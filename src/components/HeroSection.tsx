import { motion } from "framer-motion";
import heroImage from "@/assets/hero-chocolates.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";

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
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-950/85 via-chocolate-950/70 to-chocolate-950/95" />
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,164,56,0.08)_0%,transparent_50%)]" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-20 left-10 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-40 right-20 w-56 h-56 bg-easter/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Exclusive Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/20 to-gold-400/10 backdrop-blur-md border border-gold-400/30 rounded-full px-6 py-2.5 mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-gold-300 font-body text-sm tracking-wide font-medium">
            Experiência Corporativa Exclusiva
          </span>
          <Sparkles className="w-4 h-4 text-gold-400" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-gold-100 leading-tight mb-6"
        >
          Feira de Páscoa
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block text-gradient-gold"
          >
            Florybal
          </motion.span>
        </motion.h1>

        {/* Subheading - More persuasive */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-gold-200/90 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Mais do que chocolate — uma experiência sensorial que transforma
          <br className="hidden md:block" />
          <span className="text-gold-300 font-medium">memória afetiva em encantamento</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-2xl md:text-3xl text-gold-300 italic mb-12"
        >
          Proposta exclusiva para a equipe Mueller
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" onClick={scrollToContent} className="group">
            <span>Descobrir a Experiência</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Button>
          <Button variant="heroOutline" asChild>
            <a href="#contato">Agendar Conversa</a>
          </Button>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-gold-400/60"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-400/60" />
            <span className="font-body text-sm">Tradição de Gramado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-400/60" />
            <span className="font-body text-sm">+30 Anos de Excelência</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-400/60" />
            <span className="font-body text-sm">Chocolate Artesanal Premium</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 1.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-400/60 hover:text-gold-400 transition-colors"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
