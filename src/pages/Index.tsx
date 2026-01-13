import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ApresentacaoSection from "@/components/ApresentacaoSection";
import PropostaSection from "@/components/PropostaSection";
import CasoSucessoSection from "@/components/CasoSucessoSection";
import LocalDataSection from "@/components/LocalDataSection";
import CondicoesSection from "@/components/CondicoesSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import ProximosPassosSection from "@/components/ProximosPassosSection";
import FooterSection from "@/components/FooterSection";
import CatalogoSection from "@/components/CatalogoSection";
import ChatWidget from "@/components/ChatWidget";
import CookieConsent from "@/components/CookieConsent";
import InstallPWAPrompt from "@/components/InstallPWAPrompt";
import DebugResetButton from "@/components/DebugResetButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ApresentacaoSection />
      <CatalogoSection />
      <PropostaSection />
      <CasoSucessoSection />
      <LocalDataSection />
      <CondicoesSection />
      <BeneficiosSection />
      <ProximosPassosSection />
      <FooterSection />
      <ChatWidget />
      <CookieConsent />
      <InstallPWAPrompt />
      <DebugResetButton />
    </main>
  );
};

export default Index;
