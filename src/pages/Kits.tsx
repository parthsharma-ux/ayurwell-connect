import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Info, Package, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

const kits = [
  { id: 1, name: 'Immunity Booster Kit', price: 799, short: 'Amla, Giloy & Tulsi formulation for daily immunity', duration: '30 days' },
  { id: 2, name: 'Digestion Care Kit', price: 699, short: 'Triphala based digestive support', duration: '30 days' },
  { id: 3, name: 'Stress Relief Kit', price: 899, short: 'Ashwagandha + Brahmi calm blend', duration: '30 days' },
  { id: 4, name: 'Women Wellness Kit', price: 999, short: 'Shatavari & herbs for hormonal balance', duration: '30 days' },
  { id: 5, name: 'Hair & Skin Glow Kit', price: 899, short: 'Bhringraj, Amla & natural oils', duration: '30 days' },
  { id: 6, name: 'Detox & Rejuvenate Kit', price: 1099, short: 'Gentle liver and gut detox', duration: '14 days' },
  { id: 7, name: 'Joint Mobility Kit', price: 1199, short: 'Boswellia & turmeric joint support', duration: '30 days' },
  { id: 8, name: 'Sleep Support Kit', price: 649, short: 'Herbal nighttime blend for restful sleep', duration: '30 days' },
  { id: 9, name: 'Energy & Vitality Kit', price: 749, short: 'Herbal tonic for daily energy', duration: '30 days' },
  { id: 10, name: 'Classic Daily Wellness', price: 549, short: 'Everyday wellness trifecta', duration: '30 days' },
  { id: 11, name: 'Pitta Balance Kit', price: 799, short: 'Cooling herbs for Pitta balance', duration: '30 days' },
  { id: 12, name: 'Customized Starter Kit', price: 1299, short: 'Personalized herbs + mini consult', duration: '30 days' }
];

const Kits = () => {
  const { addToCart } = useCart();

  return (
    <Layout>
      <div className="min-h-screen bg-background py-12 px-4 sm:px-8 lg:px-16">
        {/* Page header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight text-foreground">
                Ayurvedic Wellness Kits
              </h1>
              <p className="mt-2 text-muted-foreground max-w-xl">
                Premium, lab-verified herbal kits handcrafted for modern life. Pick a kit, get a plan, feel the difference.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Button variant="gold" className="shadow-glow-gold">
                <Package className="h-4 w-4 mr-2" />
                Shop All Kits
              </Button>
              <Button variant="outline">
                Book Consultation
              </Button>
            </div>
          </div>
        </motion.header>

        {/* Filters & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="max-w-7xl mx-auto mt-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex gap-3 items-center">
              <label className="text-sm font-medium text-muted-foreground">Sort:</label>
              <select className="rounded-lg p-2 border border-border bg-card text-foreground">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="flex gap-3 items-center">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">12</span> kits
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of kits */}
        <motion.main className="max-w-7xl mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kits.map((kit, i) => (
              <motion.article
                key={kit.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-card rounded-2xl p-4 shadow-lg hover:shadow-xl border border-border/50 transition-shadow"
              >
                <div className="relative">
                  {/* Placeholder gradient background */}
                  <div className="w-full h-48 rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-muted flex items-center justify-center">
                    <Package className="h-16 w-16 text-primary/40" />
                  </div>

                  <Badge className="absolute top-3 left-3 bg-gold/20 text-gold border-gold/30">
                    {kit.duration}
                  </Badge>

                  <button className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow hover:bg-background transition-colors">
                    <Heart className="h-4 w-4 text-muted-foreground hover:text-terracotta transition-colors" />
                  </button>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-foreground">{kit.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{kit.short}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">₹{kit.price}</span>

                    <div className="flex items-center gap-2">
                      <Button 
                        size="sm" 
                        variant="gold" 
                        className="shadow-glow-gold"
                        onClick={() => addToCart({ id: kit.id, name: kit.name, price: kit.price, duration: kit.duration })}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-muted-foreground">
                    Free Shipping • 7-day returns
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load more */}
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" className="rounded-full">
              Load more kits
            </Button>
          </div>
        </motion.main>

        {/* Sticky WhatsApp CTA */}
        <a
          href="https://wa.me/919999999999?text=Hi%20AyurVeda%2C%20I%20need%20help%20choosing%20a%20kit"
          target="_blank"
          rel="noreferrer"
          className="fixed right-6 bottom-6 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.div>
        </a>
      </div>
    </Layout>
  );
};

export default Kits;
