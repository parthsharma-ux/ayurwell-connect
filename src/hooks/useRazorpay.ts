import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

interface RazorpayInstance {
  open: () => void;
  close: () => void;
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity?: number;
  duration?: string;
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address?: {
    line1: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export const useRazorpay = () => {
  const { user, session } = useAuth();
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }, []);

  const createKitOrder = useCallback(async (
    items: CartItem[],
    customerInfo: CustomerInfo,
    onSuccess: () => void
  ) => {
    setLoading(true);
    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load payment gateway');
      }

      const totalAmount = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
      
      const { data, error } = await supabase.functions.invoke('razorpay-create-order', {
        body: {
          order_type: 'kit',
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity || 1,
          })),
          amount: totalAmount * 100, // Convert to paise
          currency: 'INR',
          customer_info: customerInfo,
          user_id: user?.id,
        },
      });

      if (error || !data.success) {
        throw new Error(data?.error || 'Failed to create order');
      }

      const options: RazorpayOptions = {
        key: data.razorpay_key_id,
        amount: data.amount,
        currency: data.currency,
        name: 'AyurWell',
        description: 'Ayurvedic Wellness Kits',
        order_id: data.razorpay_order_id,
        handler: async (response) => {
          try {
            const verifyResult = await supabase.functions.invoke('razorpay-verify-payment', {
              body: {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                order_id: data.order_id,
              },
            });

            if (verifyResult.data?.success) {
              toast({
                title: 'Payment Successful!',
                description: 'Your order has been placed. You will receive a confirmation soon.',
              });
              onSuccess();
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (err) {
            toast({
              title: 'Payment Verification Failed',
              description: 'Please contact support if amount was deducted.',
              variant: 'destructive',
            });
          }
        },
        prefill: {
          name: customerInfo.name,
          email: customerInfo.email,
          contact: customerInfo.phone,
        },
        theme: {
          color: '#D4A574',
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      toast({
        title: 'Payment Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [user, loadRazorpayScript]);

  const createSubscription = useCallback(async (
    currency: 'INR' | 'USD',
    onSuccess: () => void
  ) => {
    if (!user || !session) {
      toast({
        title: 'Login Required',
        description: 'Please login to subscribe.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load payment gateway');
      }

      const amount = currency === 'INR' ? 9900 : 2500; // ₹99 or $25 in smallest unit
      
      const { data, error } = await supabase.functions.invoke('razorpay-create-order', {
        body: {
          order_type: 'subscription',
          items: [{ id: 'vaidya_monthly', name: 'AI Vaidya Monthly', price: amount / 100 }],
          amount,
          currency,
          customer_info: { email: user.email },
          user_id: user.id,
        },
      });

      if (error || !data.success) {
        throw new Error(data?.error || 'Failed to create subscription order');
      }

      const options: RazorpayOptions = {
        key: data.razorpay_key_id,
        amount: data.amount,
        currency: data.currency,
        name: 'AyurWell AI Vaidya',
        description: 'Monthly Subscription',
        order_id: data.razorpay_order_id,
        handler: async (response) => {
          try {
            const verifyResult = await supabase.functions.invoke('razorpay-verify-payment', {
              body: {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                order_id: data.order_id,
              },
            });

            if (verifyResult.data?.success) {
              toast({
                title: 'Subscription Activated!',
                description: 'Welcome to AI Vaidya Premium. Enjoy unlimited consultations.',
              });
              onSuccess();
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (err) {
            toast({
              title: 'Payment Verification Failed',
              description: 'Please contact support if amount was deducted.',
              variant: 'destructive',
            });
          }
        },
        prefill: {
          email: user.email,
        },
        theme: {
          color: '#D4A574',
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      toast({
        title: 'Subscription Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [user, session, loadRazorpayScript]);

  return {
    loading,
    createKitOrder,
    createSubscription,
  };
};
