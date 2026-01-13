import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { toast } from "sonner";

const DebugResetButton = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    // Precisa clicar 3 vezes para ativar (evita cliques acidentais)
    if (clickCount < 2) {
      setClickCount(prev => prev + 1);
      toast.info(`Clique mais ${2 - clickCount} vez(es) para resetar`);
      return;
    }

    // Resetar localStorage
    localStorage.removeItem("cookieConsent");
    localStorage.removeItem("pwaPromptDismissed");
    localStorage.removeItem("pwaInstalled");
    
    toast.success("LocalStorage resetado! Recarregando...");
    
    // Recarregar a página após um pequeno delay
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 left-4 z-[50] w-10 h-10 rounded-full bg-chocolate-800/80 border border-gold-500/30 flex items-center justify-center text-gold-400/60 hover:text-gold-300 hover:bg-chocolate-700 transition-all opacity-30 hover:opacity-100"
      title="Debug: Resetar modais (clique 3x)"
    >
      <RotateCcw className="w-4 h-4" />
    </button>
  );
};

export default DebugResetButton;
