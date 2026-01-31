import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Auto-redirect to home after a delay on mobile to prevent stuck state
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      // Check if this looks like a valid language route that failed to load
      const pathParts = location.pathname.split('/').filter(Boolean);
      if (pathParts.length === 1 && (pathParts[0] === 'en' || pathParts[0] === 'hi')) {
        // Redirect to the language index
        navigate(`/${pathParts[0]}`, { replace: true });
        return;
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="mb-4 text-6xl font-bold text-gradient-gold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          404
        </motion.h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Oops! This page doesn't exist
        </p>
        <p className="mb-8 text-sm text-muted-foreground/70">
          The page you're looking for might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <LocalizedLink to="/">
            <Button variant="gold" className="inline-flex items-center gap-2 w-full sm:w-auto">
              <Home className="h-4 w-4" />
              Return to Home
            </Button>
          </LocalizedLink>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
