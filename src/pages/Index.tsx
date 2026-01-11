import HeroSection from "@/components/HeroSection";
import ApresentacaoSection from "@/components/ApresentacaoSection";
import PropostaSection from "@/components/PropostaSection";
import CasoSucessoSection from "@/components/CasoSucessoSection";
import LocalDataSection from "@/components/LocalDataSection";
import CondicoesSection from "@/components/CondicoesSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import ProximosPassosSection from "@/components/ProximosPassosSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ApresentacaoSection />
      <PropostaSection />
      <CasoSucessoSection />
      <LocalDataSection />
      <CondicoesSection />
      <BeneficiosSection />
      <ProximosPassosSection />
      <FooterSection />
    </main>
  );
};

export default Index;
