import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/easter-hero-eggs.jpg";
import easterBunny from "@/assets/easter-bunny-chocolates.jpg";
import easterTruffles from "@/assets/easter-truffles.jpg";
import easterEggsOpen from "@/assets/easter-eggs-open.jpg";
import logoImage from "@/assets/florybal-logo-negativo.png";
import { Button } from "@/components/ui/button";
import { ChevronDown, Egg } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContent = () => {
    const element = document.getElementById("apresentacao");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={heroImage}
          alt="Chocolates Florybal - Páscoa Premium"
          className="w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-950/80 via-chocolate-950/60 to-chocolate-950/95" />
        {/* Grain texture overlay for premium feel */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" 
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} 
        />
      </motion.div>

      {/* Animated ambient light spots */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-easter/10 rounded-full blur-[100px]"
      />

      {/* Floating Easter chocolate images */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute left-4 lg:left-16 top-1/3 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <img 
            src={easterBunny} 
            alt="Coelho de Páscoa de chocolate"
            className="w-32 lg:w-44 h-auto rounded-2xl shadow-2xl border-2 border-gold-400/30 object-cover"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
            <Egg className="w-4 h-4 text-chocolate-950" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute right-4 lg:right-16 top-1/4 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="relative"
        >
          <img 
            src={easterTruffles} 
            alt="Trufas de Páscoa"
            className="w-28 lg:w-36 h-auto rounded-2xl shadow-2xl border-2 border-gold-400/30 object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute right-8 lg:right-28 bottom-1/3 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <img 
            src={easterEggsOpen} 
            alt="Ovos de Páscoa abertos"
            className="w-32 lg:w-40 h-auto rounded-2xl shadow-2xl border-2 border-gold-400/30 object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28 md:pt-32">
        {/* Trust indicators - Float above */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {/* Logo */}
          <img src={logoImage} alt="Florybal Logo" className="h-24 md:h-32 lg:h-40 object-contain drop-shadow-lg" />
        </motion.div>

        {/* Exclusive Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-500/20 backdrop-blur-md border border-gold-400/40 rounded-full px-8 py-3 mb-10"
        >
          <span className="text-lg">🍫</span>
          <span className="text-gold-200 font-body text-sm tracking-[0.2em] font-semibold uppercase">
            Proposta Exclusiva
          </span>
          <span className="text-lg">🍫</span>
        </motion.div>

        {/* Main Heading - Larger, more dramatic */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-gold-50 leading-[0.95] mb-8 tracking-tight"
        >
          Feira de Páscoa
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="block text-gradient-gold mt-2"
          >
            Florybal Pomerode
          </motion.span>
        </motion.h1>

        {/* Value proposition - Clear and impactful */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-lg md:text-xl text-gold-200/90 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Uma experiência sensorial exclusiva que transforma o ambiente corporativo 
          em um espaço de <span className="text-gold-300 font-medium">sabor, presente e emoção</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-display text-xl md:text-2xl text-gold-400 mb-10"
        >
          Para a sua <span className="font-semibold">Empresa</span>
        </motion.p>

        {/* CTA Buttons - Better visual hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button variant="hero" size="lg" onClick={scrollToContent} className="group min-w-[220px]">
            <span>Conhecer a Proposta</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="ml-2"
            >
              →
            </motion.span>
          </Button>
          <Button variant="heroOutline" size="lg" asChild className="min-w-[220px]">
            <a href="#contato">
              <span className="relative z-10">Agendar Conversa</span>
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator - Integrated */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          onClick={scrollToContent}
          className="flex flex-col items-center gap-1 text-gold-400/40 hover:text-gold-400 transition-colors group"
          aria-label="Rolar para baixo"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
