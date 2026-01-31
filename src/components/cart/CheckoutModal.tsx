import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRazorpay } from '@/hooks/useRazorpay';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag, Loader2 } from 'lucide-react';

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CheckoutModal = ({ open, onOpenChange }: CheckoutModalProps) => {
  const { language } = useLanguage();
  const { items, totalPrice, clearCart } = useCart();
  const { loading, createKitOrder } = useRazorpay();
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      line1: '',
      city: '',
      state: '',
      pincode: '',
    },
  });

  const isHindi = language === 'hi';

  const handleChange = (field: string, value: string) => {
    if (field.startsWith('address.')) {
      const addressField = field.split('.')[1];
      setCustomerInfo(prev => ({
        ...prev,
        address: { ...prev.address, [addressField]: value },
      }));
    } else {
      setCustomerInfo(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      return;
    }

    createKitOrder(
      items.map(item => ({
        id: String(item.id),
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        duration: item.duration,
      })),
      customerInfo,
      () => {
        clearCart();
        onOpenChange(false);
        setCustomerInfo({
          name: '',
          email: '',
          phone: '',
          address: { line1: '', city: '', state: '', pincode: '' },
        });
      }
    );
  };

  const isValid = customerInfo.name && customerInfo.email && customerInfo.phone;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            {isHindi ? 'चेकआउट' : 'Checkout'}
          </DialogTitle>
          <DialogDescription>
            {isHindi 
              ? 'अपनी डिलीवरी जानकारी दर्ज करें'
              : 'Enter your delivery information'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Order Summary */}
          <div className="bg-muted/30 rounded-xl p-4 space-y-2">
            {items.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} × {item.quantity}</span>
                <span className="font-medium">₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t border-border pt-2 mt-2 flex justify-between font-bold">
              <span>{isHindi ? 'कुल' : 'Total'}</span>
              <span className="text-primary">₹{totalPrice}</span>
            </div>
          </div>

          {/* Customer Info */}
          <div className="space-y-3">
            <div>
              <Label htmlFor="name">{isHindi ? 'पूरा नाम' : 'Full Name'} *</Label>
              <Input
                id="name"
                value={customerInfo.name}
                onChange={e => handleChange('name', e.target.value)}
                placeholder={isHindi ? 'अपना नाम दर्ज करें' : 'Enter your name'}
              />
            </div>
            
            <div>
              <Label htmlFor="email">{isHindi ? 'ईमेल' : 'Email'} *</Label>
              <Input
                id="email"
                type="email"
                value={customerInfo.email}
                onChange={e => handleChange('email', e.target.value)}
                placeholder={isHindi ? 'अपना ईमेल दर्ज करें' : 'Enter your email'}
              />
            </div>
            
            <div>
              <Label htmlFor="phone">{isHindi ? 'फोन नंबर' : 'Phone Number'} *</Label>
              <Input
                id="phone"
                type="tel"
                value={customerInfo.phone}
                onChange={e => handleChange('phone', e.target.value)}
                placeholder={isHindi ? 'अपना फोन नंबर दर्ज करें' : 'Enter your phone'}
              />
            </div>
            
            <div>
              <Label htmlFor="address">{isHindi ? 'पता' : 'Address'}</Label>
              <Input
                id="address"
                value={customerInfo.address.line1}
                onChange={e => handleChange('address.line1', e.target.value)}
                placeholder={isHindi ? 'घर का पता' : 'Street address'}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="city">{isHindi ? 'शहर' : 'City'}</Label>
                <Input
                  id="city"
                  value={customerInfo.address.city}
                  onChange={e => handleChange('address.city', e.target.value)}
                  placeholder={isHindi ? 'शहर' : 'City'}
                />
              </div>
              <div>
                <Label htmlFor="state">{isHindi ? 'राज्य' : 'State'}</Label>
                <Input
                  id="state"
                  value={customerInfo.address.state}
                  onChange={e => handleChange('address.state', e.target.value)}
                  placeholder={isHindi ? 'राज्य' : 'State'}
                />
              </div>
            </div>
            
            <div className="w-1/2">
              <Label htmlFor="pincode">{isHindi ? 'पिनकोड' : 'PIN Code'}</Label>
              <Input
                id="pincode"
                value={customerInfo.address.pincode}
                onChange={e => handleChange('address.pincode', e.target.value)}
                placeholder="123456"
              />
            </div>
          </div>

          {/* Pay Button */}
          <Button
            variant="gold"
            size="lg"
            className="w-full shadow-glow-gold"
            onClick={handleCheckout}
            disabled={loading || !isValid}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                {isHindi ? 'प्रोसेसिंग...' : 'Processing...'}
              </>
            ) : (
              <>
                {isHindi ? `₹${totalPrice} का भुगतान करें` : `Pay ₹${totalPrice}`}
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            {isHindi 
              ? 'सुरक्षित भुगतान Razorpay द्वारा संचालित • मुफ्त शिपिंग'
              : 'Secure payments powered by Razorpay • Free Shipping'}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
