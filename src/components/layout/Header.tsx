import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Leaf, Sparkles, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { name: "Diseases", href: "/diseases" },
    { name: "Medicines", href: "/medicines" },
    { name: "Remedies", href: "/remedies" },
    { name: "Kits", href: "/kits" },
    { name: "AI Doctor", href: "/doctor-ai" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
              <Leaf className="h-5 w-5 text-primary" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-gradient-terracotta leading-tight">
                AyurVeda
              </span>
              <span className="text-[10px] text-muted-foreground -mt-0.5 tracking-wider uppercase">
                Heal Naturally
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group rounded-lg hover:bg-muted/50"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-1/2 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
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
              AI Doctor
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
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
                AI Doctor
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;