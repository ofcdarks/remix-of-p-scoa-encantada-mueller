import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLettering from "@/assets/florybal-logo-lettering-branco.png";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallPWAPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem("pwaPromptDismissed");
    const installed = localStorage.getItem("pwaInstalled");
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;

    if (dismissed || installed || isStandalone) return;

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    const handleAppInstalled = () => {
      localStorage.setItem("pwaInstalled", "true");
      setIsVisible(false);
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    const timer = setTimeout(() => setIsVisible(true), 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
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

          {/* Modal - centralizado na parte inferior (compacto no mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-[201] px-4"
          >
            <div className="mx-auto w-full max-w-[300px] sm:max-w-[360px]">
              <div className="bg-gradient-to-br from-chocolate-800 via-chocolate-900 to-chocolate-950 border border-gold-500/40 rounded-xl shadow-2xl overflow-hidden">
              {/* Gold accent line */}
              <div className="h-0.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-chocolate-700/50 hover:bg-chocolate-600 flex items-center justify-center text-gold-300/70 hover:text-gold-200 transition-colors z-10"
                aria-label="Fechar"
              >
                <X className="w-3 h-3" />
              </button>

              <div className="p-3 sm:p-4 text-center">
                {/* Logo */}
                <img
                  src={logoLettering}
                  alt="Florybal"
                  className="h-4 sm:h-5 mx-auto mb-2 object-contain"
                  loading="lazy"
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", damping: 15 }}
                  className="w-9 h-9 mx-auto mb-2 rounded-lg bg-gradient-to-br from-gold-500/30 to-gold-600/20 border border-gold-400/40 flex items-center justify-center"
                >
                  <Smartphone className="w-4 h-4 text-gold-400" />
                </motion.div>

                {/* Title */}
                <h2 className="font-display text-sm text-gold-100 mb-1">
                  Instale nosso App
                </h2>

                {/* Description */}
                <p className="text-gold-200/80 text-xs mb-3 leading-relaxed">
                  Acesso rápido à <span className="text-gold-300 font-medium">Feira de Páscoa</span> na sua tela inicial!
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-1.5">
                  <Button
                    onClick={handleInstall}
                    size="sm"
                    className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-chocolate-950 font-bold text-xs py-2 rounded-lg shadow-gold hover:scale-[1.02] transition-all"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Instalar
                  </Button>

                  <button
                    onClick={handleDismiss}
                    className="text-gold-400/50 hover:text-gold-300 text-[10px] transition-colors"
                  >
                    Agora não
                  </button>
                </div>
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
