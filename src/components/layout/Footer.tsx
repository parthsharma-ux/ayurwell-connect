import { Link } from "react-router-dom";
import { Leaf, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "Diseases", href: "/diseases" },
      { name: "Medicines", href: "/medicines" },
      { name: "Home Remedies", href: "/remedies" },
      { name: "AI Doctor", href: "/doctor-ai" },
    ],
    categories: [
      { name: "Digestive Health", href: "/diseases?category=Digestive" },
      { name: "Skin Care", href: "/diseases?category=Dermatological" },
      { name: "Mental Health", href: "/diseases?category=Mental Health" },
      { name: "Joint Health", href: "/diseases?category=Musculoskeletal" },
    ],
    about: [
      { name: "About Ayurveda", href: "/about-ayurveda" },
      { name: "Dosha Types", href: "/dosha-types" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-foreground">
                  AyurVeda
                </span>
                <span className="text-[10px] text-muted-foreground -mt-1">
                  India's Largest Ayurvedic Platform
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover ancient wisdom for modern wellness. Find Ayurvedic medicines, 
              home remedies, and lifestyle tips for holistic health.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Popular Categories
            </h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Information
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center mb-4">
            <strong>Disclaimer:</strong> The information provided on this website is for educational purposes only. 
            It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. 
            Always seek the advice of your physician or other qualified health provider.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AyurVeda. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
