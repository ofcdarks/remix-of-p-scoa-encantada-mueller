import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Smartphone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLettering from "@/assets/florybal-logo-lettering-branco.png";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallPWAPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showManualInstall, setShowManualInstall] = useState(false);

  useEffect(() => {
    // Verificar se já foi dispensado ou instalado
    const dismissed = localStorage.getItem("pwaPromptDismissed");
    const installed = localStorage.getItem("pwaInstalled");
    
    console.log("PWA prompt status:", { dismissed, installed });
    
    if (dismissed || installed) return;

    // Capturar o evento beforeinstallprompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      console.log("beforeinstallprompt event captured");
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // Verificar se já está instalado
    const handleAppInstalled = () => {
      localStorage.setItem("pwaInstalled", "true");
      setIsVisible(false);
    };
    
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  // Mostrar após delay (funciona para iOS e quando beforeinstallprompt não dispara)
  useEffect(() => {
    const dismissed = localStorage.getItem("pwaPromptDismissed");
    const installed = localStorage.getItem("pwaInstalled");
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    
    console.log("PWA check:", { dismissed, installed, isStandalone });
    
    if (dismissed || installed || isStandalone) return;

    const timer = setTimeout(() => {
      console.log("Showing PWA prompt");
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleInstall = async () => {
    // Em muitos casos (ex: desktop, já instalado, critérios PWA não atendidos),
    // o evento beforeinstallprompt não existe — então mostramos instruções manuais.
    if (!deferredPrompt) {
      setShowManualInstall(true);
      return;
    }

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      localStorage.setItem("pwaInstalled", "true");
    }

    setDeferredPrompt(null);
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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[201] w-[92%] max-w-xs sm:max-w-sm"
          >
            <div className="bg-gradient-to-br from-chocolate-800 via-chocolate-900 to-chocolate-950 border border-gold-500/40 rounded-2xl shadow-2xl overflow-hidden">
              {/* Gold accent line */}
              <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-chocolate-700/50 hover:bg-chocolate-600 flex items-center justify-center text-gold-300/70 hover:text-gold-200 transition-colors z-10"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-4 sm:p-5 text-center">
                {/* Logo */}
                <img
                  src={logoLettering}
                  alt="Florybal"
                  className="h-6 sm:h-7 mx-auto mb-3 object-contain"
                  loading="lazy"
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", damping: 15 }}
                  className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gold-500/30 to-gold-600/20 border border-gold-400/40 flex items-center justify-center shadow-gold"
                >
                  <Smartphone className="w-6 h-6 text-gold-400" />
                </motion.div>

                {/* Title */}
                <h2 className="font-display text-lg sm:text-xl text-gold-100 mb-2">
                  Instale nosso App
                </h2>

                {/* Description */}
                <p className="text-gold-200/80 text-xs sm:text-sm mb-3 leading-relaxed">
                  Acesso rápido à <span className="text-gold-300 font-medium">Feira de Páscoa</span> na sua tela inicial!
                </p>

                {/* iOS Instructions */}
                {isIOS ? (
                  <div className="bg-chocolate-700/30 rounded-lg p-3 mb-3 border border-gold-500/20">
                    <p className="text-gold-200/90 text-xs">
                      Toque em <span className="text-gold-300 font-medium">Compartilhar</span> →{" "}
                      <span className="text-gold-300 font-medium">&quot;Adicionar à Tela de Início&quot;</span>
                    </p>
                  </div>
                ) : null}

                {/* Android / Desktop manual instructions */}
                {!isIOS && (showManualInstall || !deferredPrompt) ? (
                  <div className="bg-chocolate-700/30 rounded-lg p-3 mb-3 border border-gold-500/20 text-left">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 text-gold-300/80">
                        <Info className="w-4 h-4" />
                      </div>
                      <p className="text-gold-200/90 text-xs leading-relaxed">
                        Se o botão <span className="text-gold-300 font-medium">Instalar</span> não abrir a janela do sistema, use o menu do navegador (⋮) e selecione{" "}
                        <span className="text-gold-300 font-medium">&quot;Instalar app&quot;</span> / <span className="text-gold-300 font-medium">&quot;Adicionar à tela inicial&quot;</span>.
                      </p>
                    </div>
                  </div>
                ) : null}

                {/* Buttons */}
                <div className="flex flex-col gap-2">
                  {!isIOS && (
                    <Button
                      onClick={handleInstall}
                      className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-chocolate-950 font-bold text-sm py-4 rounded-xl shadow-gold hover:shadow-[0_0_25px_hsl(38_70%_50%/0.4)] hover:scale-[1.02] transition-all"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {deferredPrompt ? "Instalar" : "Como instalar"}
                    </Button>
                  )}

                  <button
                    onClick={handleDismiss}
                    className="text-gold-400/50 hover:text-gold-300 text-xs transition-colors py-1"
                  >
                    Agora não
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
