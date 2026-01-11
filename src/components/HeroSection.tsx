import heroImage from "@/assets/hero-chocolates.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("apresentacao");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chocolates Florybal - Páscoa Premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-950/80 via-chocolate-950/60 to-chocolate-950/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-easter/10 rounded-full blur-3xl animate-float animation-delay-500" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
          <span className="text-gold-300 font-body text-sm tracking-wide">🍫 Proposta Exclusiva</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gold-100 leading-tight mb-6 animate-fade-in-up animation-delay-100">
          Feira de Páscoa
          <span className="block text-gradient-gold">Florybal</span>
        </h1>

        {/* Subheading */}
        <p className="font-body text-lg md:text-xl text-gold-200/80 max-w-2xl mx-auto mb-4 animate-fade-in-up animation-delay-200">
          Uma experiência exclusiva de chocolate artesanal de Gramado
        </p>
        <p className="font-display text-2xl md:text-3xl text-gold-300 italic mb-10 animate-fade-in-up animation-delay-300">
          para a equipe Mueller
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <Button variant="hero" onClick={scrollToContent}>
            Conhecer a Proposta
          </Button>
          <Button variant="heroOutline" asChild>
            <a href="#contato">Entrar em Contato</a>
          </Button>
        </div>

        {/* Trust Badge */}
        <p className="font-body text-sm text-gold-400/60 mt-12 animate-fade-in-up animation-delay-500">
          Chocolate de Gramado, agora em Pomerode
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-400/60 hover:text-gold-400 transition-colors animate-float"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
