import { useParams } from 'react-router-dom';
import LocalizedLink from '@/components/LocalizedLink';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, ArrowLeft, Check, AlertTriangle, Clock, Package, Leaf } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { getKitBySlug, kits } from '@/data/kits';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLocalizedKit, useDataTranslations } from '@/lib/localizedData';

const KitDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const labels = useDataTranslations(language);
  
  const rawKit = getKitBySlug(slug || '');

  if (!rawKit) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              {language === "hi" ? "किट नहीं मिली" : "Kit not found"}
            </h1>
            <LocalizedLink to="/kits">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t("backToKits")}
              </Button>
            </LocalizedLink>
          </div>
        </div>
      </Layout>
    );
  }

  const kit = getLocalizedKit(rawKit, language);
  const relatedKits = kits.filter(k => k.id !== rawKit.id).slice(0, 4).map(k => getLocalizedKit(k, language));

  return (
    <Layout>
      <div className="min-h-screen bg-background py-8 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LocalizedLink to="/" className="hover:text-foreground transition-colors">{t("home")}</LocalizedLink>
              <span>/</span>
              <LocalizedLink to="/kits" className="hover:text-foreground transition-colors">{t("kits")}</LocalizedLink>
              <span>/</span>
              <span className="text-foreground">{kit.name}</span>
            </div>
          </motion.nav>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50">
                <img
                  src={rawKit.image}
                  alt={kit.name}
                  className="w-full aspect-square object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gold/20 text-gold border-gold/30">
                  <Clock className="h-3 w-3 mr-1" />
                  {rawKit.duration}
                </Badge>
                <button className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow hover:bg-background transition-colors">
                  <Heart className="h-5 w-5 text-muted-foreground hover:text-terracotta transition-colors" />
                </button>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {kit.name}
                </h1>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                  {kit.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">₹{rawKit.price}</span>
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">
                  {language === "hi" ? "मुफ्त शिपिंग" : "Free Shipping"}
                </Badge>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  className="flex-1 shadow-glow-gold"
                  onClick={() => addToCart({ id: rawKit.id, name: kit.name, price: rawKit.price, duration: rawKit.duration })}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {t("addToCart")}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <Separator className="bg-border/50" />

              {/* What's Included */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-gold" />
                  {labels.includes}
                </h3>
                <ul className="space-y-2">
                  {rawKit.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Detailed Info Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Ingredients */}
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-emerald-500" />
                {labels.ingredients}
              </h3>
              <ul className="space-y-2">
                {rawKit.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-500" />
                {labels.benefits}
              </h3>
              <ul className="space-y-2">
                {kit.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                    <Check className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage Instructions */}
            <div className="bg-card rounded-2xl p-6 border border-border/50 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" />
                {labels.usage}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">{labels.dosage}</p>
                  <p className="text-foreground font-medium">{rawKit.usage.dosage}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{labels.timing}</p>
                  <p className="text-foreground font-medium">{rawKit.usage.timing}</p>
                </div>
                <Separator className="bg-border/50" />
                <ul className="space-y-2">
                  {rawKit.usage.instructions.map((instruction, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-gold font-bold">{index + 1}.</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Warnings */}
          {kit.warnings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                {labels.warnings}
              </h3>
              <ul className="space-y-2">
                {kit.warnings.map((warning: string, index: number) => (
                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    {warning}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Related Kits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              {language === "hi" ? "आपको ये भी पसंद आ सकते हैं" : "You May Also Like"}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedKits.map((relatedKit) => (
                <LocalizedLink key={relatedKit.id} to={`/kits/${relatedKit.slug}`}>
                  <motion.article
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-card rounded-2xl p-4 border border-border/50 hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={relatedKit.image}
                      alt={relatedKit.name}
                      className="w-full h-40 rounded-xl object-cover"
                    />
                    <div className="mt-3">
                      <h3 className="font-semibold text-foreground line-clamp-1">{relatedKit.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{relatedKit.short}</p>
                      <p className="mt-2 text-primary font-bold">₹{relatedKit.price}</p>
                    </div>
                  </motion.article>
                </LocalizedLink>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default KitDetail;