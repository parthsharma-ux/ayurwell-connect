import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CheckoutModal from './CheckoutModal';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();
  const { language } = useLanguage();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const isHindi = language === 'hi';

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setCheckoutOpen(true);
  };

  return (
    <>
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-full sm:max-w-md flex flex-col">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              {isHindi ? 'आपकी कार्ट' : 'Your Cart'}
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <ShoppingBag className="h-16 w-16 mb-4 opacity-30" />
                <p>{isHindi ? 'आपकी कार्ट खाली है' : 'Your cart is empty'}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                      <ShoppingBag className="h-6 w-6 text-primary/50" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.duration}</p>
                      <p className="text-primary font-semibold mt-1">₹{item.price}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      
                      <div className="flex items-center gap-2 bg-background rounded-lg border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-muted rounded-l-lg transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-muted rounded-r-lg transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <SheetFooter className="border-t border-border pt-4">
              <div className="w-full space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    {isHindi ? 'उप-कुल' : 'Subtotal'}
                  </span>
                  <span className="text-xl font-bold text-foreground">₹{totalPrice}</span>
                </div>
                <Button 
                  variant="gold" 
                  className="w-full shadow-glow-gold" 
                  size="lg"
                  onClick={handleProceedToCheckout}
                >
                  {isHindi ? `चेकआउट करें • ₹${totalPrice}` : `Checkout • ₹${totalPrice}`}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  {isHindi ? 'सभी ऑर्डर पर मुफ्त शिपिंग' : 'Free shipping on all orders'}
                </p>
              </div>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutModal open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  );
};

export default CartDrawer;
