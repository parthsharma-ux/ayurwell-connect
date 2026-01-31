import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Check, Crown, Globe } from 'lucide-react';
import { useRazorpay } from '@/hooks/useRazorpay';
import { useLanguage } from '@/contexts/LanguageContext';

interface SubscriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const SubscriptionModal = ({ open, onOpenChange, onSuccess }: SubscriptionModalProps) => {
  const { language, preferredRegion } = useLanguage();
  const { loading, createSubscription } = useRazorpay();
  const [selectedCurrency, setSelectedCurrency] = useState<'INR' | 'USD'>(
    preferredRegion === 'india' ? 'INR' : 'USD'
  );

  const handleSubscribe = () => {
    createSubscription(selectedCurrency, () => {
      onOpenChange(false);
      onSuccess();
    });
  };

  const isHindi = language === 'hi';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Crown className="h-6 w-6 text-gold" />
            {isHindi ? 'AI वैद्य प्रीमियम' : 'AI Vaidya Premium'}
          </DialogTitle>
          <DialogDescription>
            {isHindi 
              ? 'असीमित आयुर्वेदिक परामर्श के लिए सब्सक्राइब करें'
              : 'Subscribe for unlimited Ayurvedic consultations'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <div className="flex rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => setSelectedCurrency('INR')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCurrency === 'INR'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background hover:bg-muted'
                }`}
              >
                🇮🇳 INR
              </button>
              <button
                onClick={() => setSelectedCurrency('USD')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCurrency === 'USD'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background hover:bg-muted'
                }`}
              >
                🇺🇸 USD
              </button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-gold/10 to-terracotta/10 rounded-2xl p-6 border border-gold/30">
            <div className="text-center mb-4">
              <Badge variant="outline" className="border-gold/50 text-gold mb-2">
                {isHindi ? 'मासिक योजना' : 'Monthly Plan'}
              </Badge>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {selectedCurrency === 'INR' ? '₹11' : '$10'}
                </span>
                <span className="text-muted-foreground">
                  /{isHindi ? 'महीना' : 'month'}
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                isHindi ? 'असीमित AI वैद्य परामर्श' : 'Unlimited AI Vaidya consultations',
                isHindi ? 'व्यक्तिगत दोष विश्लेषण' : 'Personalized Dosha analysis',
                isHindi ? 'आयुर्वेदिक उपचार योजनाएं' : 'Ayurvedic treatment plans',
                isHindi ? 'आहार और जीवनशैली सुझाव' : 'Diet & lifestyle recommendations',
                isHindi ? 'चैट इतिहास सहेजें' : 'Save chat history',
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Button */}
          <Button
            variant="gold"
            size="lg"
            className="w-full shadow-glow-gold"
            onClick={handleSubscribe}
            disabled={loading}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            {loading 
              ? (isHindi ? 'प्रोसेसिंग...' : 'Processing...') 
              : (isHindi ? 'अभी सब्सक्राइब करें' : 'Subscribe Now')}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            {isHindi 
              ? 'सुरक्षित भुगतान Razorpay द्वारा संचालित'
              : 'Secure payments powered by Razorpay'}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionModal;
