import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const FREE_TRIAL_HOURS = 72; // 3 days in hours
const REMINDER_HOURS_BEFORE = 6; // Send reminder 6 hours before expiry

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    if (!resendApiKey) {
      console.log('RESEND_API_KEY not configured, skipping email reminders');
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Email service not configured',
        emails_sent: 0 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(resendApiKey);
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const now = new Date();
    
    // Calculate the time window for users whose trial is about to expire
    // Trial expires at: first_chat_at + 72 hours
    // We want users where: (first_chat_at + 72h) - now <= 6h AND (first_chat_at + 72h) - now > 0
    // That means: first_chat_at <= now - 66h AND first_chat_at > now - 72h
    
    const trialExpiryWindowStart = new Date(now.getTime() - FREE_TRIAL_HOURS * 60 * 60 * 1000);
    const trialExpiryWindowEnd = new Date(now.getTime() - (FREE_TRIAL_HOURS - REMINDER_HOURS_BEFORE) * 60 * 60 * 1000);

    // Get users whose trial is about to expire (within 6 hours) and haven't been reminded yet
    const { data: expiringTrials, error: queryError } = await supabase
      .from('vaidya_free_chats')
      .select('user_id, first_chat_at, reminder_sent')
      .gt('first_chat_at', trialExpiryWindowStart.toISOString())
      .lte('first_chat_at', trialExpiryWindowEnd.toISOString())
      .or('reminder_sent.is.null,reminder_sent.eq.false');

    if (queryError) {
      console.error('Query error:', queryError);
      throw queryError;
    }

    console.log(`Found ${expiringTrials?.length || 0} users with expiring trials`);

    if (!expiringTrials || expiringTrials.length === 0) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'No expiring trials found',
        emails_sent: 0 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    let emailsSent = 0;
    const errors: string[] = [];

    for (const trial of expiringTrials) {
      try {
        // Get user email from auth.users
        const { data: userData, error: userError } = await supabase.auth.admin.getUserById(trial.user_id);
        
        if (userError || !userData?.user?.email) {
          console.log(`Could not get email for user ${trial.user_id}`);
          continue;
        }

        const userEmail = userData.user.email;
        const trialExpiry = new Date(new Date(trial.first_chat_at).getTime() + FREE_TRIAL_HOURS * 60 * 60 * 1000);
        const hoursRemaining = Math.max(0, Math.ceil((trialExpiry.getTime() - now.getTime()) / (1000 * 60 * 60)));

        // Send reminder email
        const { error: emailError } = await resend.emails.send({
          from: 'Ayurveda AI Vaidya <noreply@resend.dev>',
          to: [userEmail],
          subject: `⏰ Your Free Trial Expires in ${hoursRemaining} Hours - Don't Lose Access!`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #1a1a2e; color: #ffffff; padding: 20px; margin: 0;">
              <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%); border-radius: 16px; overflow: hidden; border: 1px solid #d4a574;">
                
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #d4a574 0%, #c9956c 100%); padding: 30px; text-align: center;">
                  <h1 style="margin: 0; color: #1a1a2e; font-size: 28px;">🙏 Namaste!</h1>
                  <p style="margin: 10px 0 0; color: #1a1a2e; font-size: 16px;">Your AI Vaidya Free Trial is Ending Soon</p>
                </div>
                
                <!-- Content -->
                <div style="padding: 30px;">
                  <div style="background: rgba(212, 165, 116, 0.1); border-radius: 12px; padding: 20px; margin-bottom: 25px; border: 1px solid rgba(212, 165, 116, 0.3);">
                    <p style="margin: 0; font-size: 18px; text-align: center;">
                      ⏰ <strong style="color: #d4a574;">Only ${hoursRemaining} hours</strong> remaining!
                    </p>
                  </div>
                  
                  <p style="color: #e0e0e0; line-height: 1.6; font-size: 15px;">
                    You've been enjoying unlimited access to our <strong style="color: #d4a574;">AI Ayurveda Vaidya</strong> during your 3-day free trial. 
                    Don't let your personalized health guidance stop!
                  </p>
                  
                  <h3 style="color: #d4a574; margin-top: 25px;">✨ What you'll keep with Premium:</h3>
                  <ul style="color: #e0e0e0; line-height: 1.8; padding-left: 20px;">
                    <li>Unlimited AI Vaidya consultations</li>
                    <li>Personalized Dosha analysis</li>
                    <li>Custom Ayurvedic treatment plans</li>
                    <li>Diet & lifestyle recommendations</li>
                    <li>Saved chat history</li>
                  </ul>
                  
                  <div style="text-align: center; margin-top: 30px;">
                    <a href="https://ayurvedavaidya.lovable.app/en/doctor-ai" 
                       style="display: inline-block; background: linear-gradient(135deg, #d4a574 0%, #c9956c 100%); color: #1a1a2e; text-decoration: none; padding: 15px 40px; border-radius: 50px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(212, 165, 116, 0.3);">
                      🌿 Subscribe Now - Just ₹99/month
                    </a>
                  </div>
                  
                  <p style="color: #888; font-size: 13px; text-align: center; margin-top: 25px;">
                    या / or $25/month for international users
                  </p>
                </div>
                
                <!-- Footer -->
                <div style="background: rgba(0,0,0,0.3); padding: 20px; text-align: center; border-top: 1px solid rgba(212, 165, 116, 0.2);">
                  <p style="margin: 0; color: #888; font-size: 12px;">
                    आयुर्वेद से स्वस्थ जीवन | Healthy Life with Ayurveda
                  </p>
                  <p style="margin: 10px 0 0; color: #666; font-size: 11px;">
                    You received this email because you signed up for AI Vaidya.
                  </p>
                </div>
              </div>
            </body>
            </html>
          `,
        });

        if (emailError) {
          console.error(`Failed to send email to ${userEmail}:`, emailError);
          errors.push(`${userEmail}: ${emailError.message}`);
          continue;
        }

        // Mark reminder as sent
        await supabase
          .from('vaidya_free_chats')
          .update({ reminder_sent: true })
          .eq('user_id', trial.user_id);

        emailsSent++;
        console.log(`Sent trial expiry reminder to ${userEmail}`);
      } catch (err) {
        console.error(`Error processing user ${trial.user_id}:`, err);
        errors.push(`${trial.user_id}: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Sent ${emailsSent} trial expiry reminders`,
      emails_sent: emailsSent,
      errors: errors.length > 0 ? errors : undefined
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    console.error('Error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
