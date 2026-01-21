import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// @ts-ignore - Resend npm import for Deno
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
  language: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, language }: WelcomeEmailRequest = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const isHindi = language === "hi";

    const subject = isHindi 
      ? "🌿 आयुर्वेद ज्ञान न्यूज़लेटर में आपका स्वागत है!" 
      : "🌿 Welcome to AyurVeda Wisdom Newsletter!";

    const htmlContent = isHindi ? `
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f7f4;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #2d5016 0%, #4a7c23 100%); padding: 40px 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px;">🌿 आयुर्वेद ज्ञान</h1>
      <p style="color: #e8f5e0; margin: 10px 0 0 0; font-size: 16px;">प्राचीन ज्ञान, आधुनिक जीवन</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <h2 style="color: #2d5016; margin: 0 0 20px 0; font-size: 24px;">नमस्ते! 🙏</h2>
      
      <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
        आयुर्वेद ज्ञान न्यूज़लेटर परिवार में आपका स्वागत है! हमें खुशी है कि आपने प्राचीन आयुर्वेदिक ज्ञान की यात्रा में हमारे साथ जुड़ने का निर्णय लिया।
      </p>
      
      <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
        <strong>आपको क्या मिलेगा:</strong>
      </p>
      
      <ul style="color: #4a5568; font-size: 16px; line-height: 2; margin: 0 0 20px 0; padding-left: 20px;">
        <li>🌱 आयुर्वेदिक घरेलू उपचार और नुस्खे</li>
        <li>🍃 जड़ी-बूटियों के लाभ और उपयोग</li>
        <li>🧘 योग और ध्यान के सुझाव</li>
        <li>🥗 आयुर्वेदिक आहार योजनाएं</li>
        <li>📚 स्वास्थ्य संबंधी विशेष लेख</li>
      </ul>
      
      <div style="background-color: #f0f9e8; border-left: 4px solid #4a7c23; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
        <p style="color: #2d5016; font-size: 16px; margin: 0; font-style: italic;">
          "स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं"<br>
          <small style="color: #4a5568;">- स्वस्थ व्यक्ति के स्वास्थ्य की रक्षा करना और रोगी के रोग को दूर करना</small>
        </p>
      </div>
      
      <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
        हम जल्द ही आपको पहला न्यूज़लेटर भेजेंगे। तब तक, हमारे ब्लॉग पर और जानकारी प्राप्त करें।
      </p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://ayurveda.app/hi/blog" style="display: inline-block; background: linear-gradient(135deg, #2d5016 0%, #4a7c23 100%); color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
          ब्लॉग पढ़ें →
        </a>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f8f7f4; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="color: #718096; font-size: 14px; margin: 0 0 10px 0;">
        प्राकृतिक स्वास्थ्य के लिए आयुर्वेद
      </p>
      <p style="color: #a0aec0; font-size: 12px; margin: 0;">
        © 2024 आयुर्वेद ज्ञान। सर्वाधिकार सुरक्षित।
      </p>
    </div>
  </div>
</body>
</html>
    ` : `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f7f4;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #2d5016 0%, #4a7c23 100%); padding: 40px 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px;">🌿 AyurVeda Wisdom</h1>
      <p style="color: #e8f5e0; margin: 10px 0 0 0; font-size: 16px;">Ancient Knowledge, Modern Living</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <h2 style="color: #2d5016; margin: 0 0 20px 0; font-size: 24px;">Welcome Aboard! 🙏</h2>
      
      <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
        Thank you for joining the AyurVeda Wisdom newsletter family! We're thrilled that you've decided to embark on this journey of discovering ancient Ayurvedic wisdom with us.
      </p>
      
      <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
        <strong>Here's what you can expect:</strong>
      </p>
      
      <ul style="color: #4a5568; font-size: 16px; line-height: 2; margin: 0 0 20px 0; padding-left: 20px;">
        <li>🌱 Ayurvedic home remedies and recipes</li>
        <li>🍃 Herbal benefits and usage guides</li>
        <li>🧘 Yoga and meditation tips</li>
        <li>🥗 Ayurvedic diet and nutrition plans</li>
        <li>📚 Exclusive health articles and insights</li>
      </ul>
      
      <div style="background-color: #f0f9e8; border-left: 4px solid #4a7c23; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
        <p style="color: #2d5016; font-size: 16px; margin: 0; font-style: italic;">
          "Swasthasya Swasthya Rakshanam, Aturasya Vikar Prashamanam"<br>
          <small style="color: #4a5568;">- To protect the health of the healthy and cure the diseases of the sick</small>
        </p>
      </div>
      
      <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
        We'll be sending you our first newsletter soon. In the meantime, explore our blog for more valuable insights on natural health and wellness.
      </p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://ayurveda.app/en/blog" style="display: inline-block; background: linear-gradient(135deg, #2d5016 0%, #4a7c23 100%); color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
          Explore Our Blog →
        </a>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f8f7f4; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="color: #718096; font-size: 14px; margin: 0 0 10px 0;">
        Ayurveda for Natural Health & Wellness
      </p>
      <p style="color: #a0aec0; font-size: 12px; margin: 0;">
        © 2024 AyurVeda Wisdom. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
    `;

    const emailResponse = await resend.emails.send({
      from: "AyurVeda Wisdom <onboarding@resend.dev>",
      to: [email],
      subject: subject,
      html: htmlContent,
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
