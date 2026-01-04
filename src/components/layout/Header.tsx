import LocalizedLink from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Leaf, Sparkles, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { useLocalizedNavigate } from "@/hooks/useLocalizedNavigate";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useLocalizedNavigate();
  const { totalItems, setIsCartOpen } = useCart();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav_diseases"), href: "/diseases" },
    { name: t("nav_medicines"), href: "/medicines" },
    { name: t("nav_remedies"), href: "/remedies" },
    { name: t("nav_kits"), href: "/kits" },
    { name: t("nav_ai_doctor"), href: "/doctor-ai" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <LocalizedLink to="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
              <Leaf className="h-5 w-5 text-primary" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-gradient-terracotta leading-tight">
                AyurVeda
              </span>
              <span className="text-[10px] text-muted-foreground -mt-0.5 tracking-wider uppercase">
                {t("header_tagline")}
              </span>
            </div>
          </LocalizedLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <LocalizedLink
                key={link.href}
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group rounded-lg hover:bg-muted/50"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-1/2 rounded-full" />
              </LocalizedLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/search")}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="relative text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-background text-xs font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            
            <Button
              variant="gold"
              size="sm"
              onClick={() => navigate("/doctor-ai")}
              className="hidden sm:flex items-center gap-2 shadow-glow-gold"
            >
              <Sparkles className="h-4 w-4" />
              {t("nav_ai_doctor")}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-muted/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {/* Mobile Language Toggle */}
              <div className="px-4 py-2 mb-2">
                <LanguageToggle />
              </div>
              
              {navLinks.map((link) => (
                <LocalizedLink
                  key={link.href}
                  to={link.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </LocalizedLink>
              ))}
              <Button
                variant="gold"
                size="sm"
                onClick={() => {
                  navigate("/doctor-ai");
                  setIsMenuOpen(false);
                }}
                className="mt-2 mx-4"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                {t("nav_ai_doctor")}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
