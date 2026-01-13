import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeno delay para garantir que o componente montou
    const checkConsent = () => {
      const consent = localStorage.getItem("cookieConsent");
      console.log("Cookie consent status:", consent);
      if (!consent) {
        // Delay para não aparecer imediatamente
        const timer = setTimeout(() => {
          console.log("Showing cookie consent");
          setIsVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    };
    
    checkConsent();
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-chocolate-900 via-chocolate-800 to-chocolate-900 border border-gold-500/30 rounded-xl shadow-2xl backdrop-blur-lg overflow-hidden">
            {/* Gold accent line */}
            <div className="h-0.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
            
            <div className="p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                {/* Icon */}
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gold-500/20 border border-gold-400/30 flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-gold-400" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <p className="text-gold-200/80 text-xs leading-relaxed">
                    Usamos cookies para melhorar sua experiência.{" "}
                    <Link 
                      to="/politica-cookies" 
                      className="text-gold-400 hover:text-gold-300 underline underline-offset-2"
                    >
                      Saiba mais
                    </Link>
                  </p>
                </div>
                
                {/* Buttons */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleDecline}
                    className="flex-1 sm:flex-none px-3 py-1.5 text-gold-300/60 hover:text-gold-200 text-xs transition-colors"
                  >
                    Recusar
                  </button>
                  <Button
                    onClick={handleAccept}
                    size="sm"
                    className="flex-1 sm:flex-none bg-gradient-to-r from-gold-500 to-gold-600 text-chocolate-950 font-semibold text-xs px-4 py-2 hover:shadow-gold transition-all"
                  >
                    Aceitar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
