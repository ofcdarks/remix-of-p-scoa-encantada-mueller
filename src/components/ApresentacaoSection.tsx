import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import easterBunny from "@/assets/easter-bunny-chocolates.jpg";
import easterEggsOpen from "@/assets/easter-eggs-open.jpg";
import logoImage from "@/assets/selo-loja-autorizada.png";
import { Award, Heart, Star, CheckCircle, Egg } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const ApresentacaoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const highlights = [
    "Reconhecida nacionalmente pela excelência",
    "Qualidade sensorial incomparável",
    "Forte apelo emocional e afetivo",
  ];

  return (
    <section id="apresentacao" className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px w-12 bg-accent" />
          <span className="font-body text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Apresentação
          </span>
        </motion.div>

        {/* Content Grid - Asymmetric for visual interest */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image Grid - Takes 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl image-zoom group">
              <img
                src={easterBunny}
                alt="Coelho de chocolate artesanal de Páscoa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/60 via-chocolate-950/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
            </div>

            {/* Secondary floating image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -right-4 lg:-right-12 top-1/4 w-28 lg:w-36"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gold-400/30 hover:border-gold-400/60 transition-all duration-500 hover:shadow-gold image-zoom">
                <img 
                  src={easterEggsOpen} 
                  alt="Ovos de Páscoa premium"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            
            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-card rounded-2xl p-6 shadow-elevated border border-border hover-lift hover-glow"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-gold pulse-glow">
                  <Egg className="w-7 h-7 text-chocolate-950" />
                </div>
                <div>
                  <p className="font-display text-3xl text-gradient-gold font-semibold">
                    +<AnimatedCounter target={30} duration={2000} />
                  </p>
                  <p className="font-body text-sm text-muted-foreground">Anos de tradição</p>
                </div>
              </div>
            </motion.div>

            {/* Selo Loja Autorizada */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-4 -left-4 lg:-left-8 bg-white rounded-xl p-2 shadow-lg"
            >
              <img src={logoImage} alt="Florybal Loja Autorizada" className="w-20 h-auto" />
            </motion.div>
          </motion.div>

          {/* Text Content - Takes 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-2">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                Excelência que vem de
                <span className="block text-gradient-gold">Gramado</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="font-body text-lg text-foreground/90 leading-relaxed">
                A <strong className="text-gradient-gold">Florybal Chocolates Caseiros</strong> é uma marca tradicional 
                de Gramado (RS), reconhecida nacionalmente pela excelência em chocolates artesanais, 
                qualidade sensorial e forte apelo emocional.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Agora presente em <strong className="text-foreground">Pomerode (SC)</strong>, levamos ao público 
                catarinense muito mais do que chocolate: entregamos experiência, memória afetiva e encantamento.
              </p>
            </div>

            {/* Highlights with checkmarks */}
            <div className="space-y-3 py-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-gold-500" />
                  </div>
                  <span className="font-body text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote Block - More minimal */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative pl-6 border-l-2 border-gold-500"
            >
              <p className="font-display text-xl text-foreground/90 italic leading-relaxed">
                "Nossa proposta é proporcionar à sua equipe uma vivência exclusiva, 
                transformando o ambiente corporativo em um espaço de{" "}
                <span className="text-gold-600 not-italic font-medium">sabor, presente e emoção</span>."
              </p>
            </motion.blockquote>
            
            {/* Compact highlights - Better aligned */}
            <div className="flex flex-wrap items-center justify-start gap-2 pt-4">
              {[
                { icon: Star, label: "Premium" },
                { icon: Heart, label: "Artesanal" },
                { icon: Award, label: "Exclusivo" },
              ].map((item) => (
                <div 
                  key={item.label} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border hover:border-gold-400/40 hover:bg-gold-500/10 transition-all duration-300 cursor-default group"
                >
                  <item.icon className="w-3.5 h-3.5 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-body text-xs text-foreground/80">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApresentacaoSection;
