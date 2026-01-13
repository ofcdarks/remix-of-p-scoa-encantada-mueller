import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallPWAPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // Verificar se já foi dispensado ou instalado
    const dismissed = localStorage.getItem("pwaPromptDismissed");
    const installed = localStorage.getItem("pwaInstalled");
    
    if (dismissed || installed) return;

    // Capturar o evento beforeinstallprompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // Mostrar após 5 segundos
    const timer = setTimeout(() => {
      // Em iOS não tem beforeinstallprompt, mas ainda mostramos instruções
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
      
      if (!isStandalone && (deferredPrompt || isIOS)) {
        setIsVisible(true);
      }
    }, 5000);

    // Verificar se já está instalado
    window.addEventListener("appinstalled", () => {
      localStorage.setItem("pwaInstalled", "true");
      setIsVisible(false);
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, [deferredPrompt]);

  // Mostrar para iOS também após delay
  useEffect(() => {
    const dismissed = localStorage.getItem("pwaPromptDismissed");
    const installed = localStorage.getItem("pwaInstalled");
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    
    if (dismissed || installed || isStandalone) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === "accepted") {
        localStorage.setItem("pwaInstalled", "true");
      }
      setDeferredPrompt(null);
    }
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem("pwaPromptDismissed", "true");
    setIsVisible(false);
  };

  const isIOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-chocolate-950/80 backdrop-blur-sm z-[200]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[201] w-[90%] max-w-md"
          >
            <div className="bg-gradient-to-br from-chocolate-800 via-chocolate-900 to-chocolate-950 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden">
              {/* Gold accent line */}
              <div className="h-1.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
              
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-chocolate-700/50 hover:bg-chocolate-600 flex items-center justify-center text-gold-300/70 hover:text-gold-200 transition-colors z-10"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="p-6 md:p-8 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", damping: 15 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/30 to-gold-600/20 border border-gold-400/40 flex items-center justify-center shadow-gold"
                >
                  <Smartphone className="w-10 h-10 text-gold-400" />
                </motion.div>
                
                {/* Title */}
                <h2 className="font-display text-2xl md:text-3xl text-gold-100 mb-3">
                  Instale nosso App
                </h2>
                
                {/* Description */}
                <p className="text-gold-200/80 text-sm md:text-base mb-6 leading-relaxed">
                  Adicione a <span className="text-gold-300 font-semibold">Feira de Páscoa Florybal</span> à sua tela inicial para acesso rápido e experiência completa!
                </p>
                
                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {["Acesso rápido", "Funciona offline", "Sem ocupar espaço"].map((benefit, i) => (
                    <motion.span
                      key={benefit}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="px-3 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/25 text-gold-300 text-xs font-medium"
                    >
                      ✓ {benefit}
                    </motion.span>
                  ))}
                </div>
                
                {/* iOS Instructions */}
                {isIOS ? (
                  <div className="bg-chocolate-700/30 rounded-xl p-4 mb-6 border border-gold-500/20">
                    <p className="text-gold-200/90 text-sm">
                      Toque em{" "}
                      <span className="inline-flex items-center gap-1 text-gold-300 font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
                        </svg>
                        Compartilhar
                      </span>{" "}
                      e depois em{" "}
                      <span className="text-gold-300 font-medium">"Adicionar à Tela de Início"</span>
                    </p>
                  </div>
                ) : null}
                
                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  {!isIOS && (
                    <Button
                      onClick={handleInstall}
                      className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-chocolate-950 font-bold text-base py-6 rounded-xl shadow-gold hover:shadow-[0_0_30px_hsl(38_70%_50%/0.5)] hover:scale-[1.02] transition-all"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Instalar Agora
                    </Button>
                  )}
                  
                  <button
                    onClick={handleDismiss}
                    className="text-gold-400/60 hover:text-gold-300 text-sm transition-colors"
                  >
                    Agora não, obrigado
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InstallPWAPrompt;
