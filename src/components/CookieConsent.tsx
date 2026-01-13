import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay para não aparecer imediatamente
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
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
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-chocolate-900 via-chocolate-800 to-chocolate-900 border border-gold-500/30 rounded-2xl shadow-2xl backdrop-blur-lg overflow-hidden">
            {/* Gold accent line */}
            <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
            
            <div className="p-5 md:p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400/30 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-gold-400" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-lg text-gold-100 mb-1">
                    🍪 Usamos cookies
                  </h3>
                  <p className="text-gold-200/80 text-sm leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência de navegação e personalizar conteúdo. 
                    Ao continuar, você concorda com nossa{" "}
                    <Link 
                      to="/politica-cookies" 
                      className="text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors"
                    >
                      Política de Cookies
                    </Link>
                    {" "}e{" "}
                    <Link 
                      to="/politica-privacidade" 
                      className="text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors"
                    >
                      Política de Privacidade
                    </Link>.
                  </p>
                </div>
                
                {/* Buttons */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDecline}
                    className="flex-1 md:flex-none text-gold-300/70 hover:text-gold-200 hover:bg-gold-500/10"
                  >
                    Recusar
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="flex-1 md:flex-none bg-gradient-to-r from-gold-500 to-gold-600 text-chocolate-950 font-semibold hover:shadow-gold hover:scale-[1.02] transition-all"
                  >
                    Aceitar cookies
                  </Button>
                </div>
                
                {/* Close button */}
                <button
                  onClick={handleDecline}
                  className="absolute top-3 right-3 md:relative md:top-0 md:right-0 w-8 h-8 rounded-full bg-chocolate-700/50 hover:bg-chocolate-600/50 flex items-center justify-center text-gold-300/50 hover:text-gold-200 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
