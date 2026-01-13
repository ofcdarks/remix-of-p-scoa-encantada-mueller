import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Building2, MapPin, Star } from "lucide-react";
import easterEggsOpen from "@/assets/easter-eggs-open.jpg";

const CasoSucessoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

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
            Caso de Sucesso
          </span>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                  Veja a experiência
                  <span className="block text-gradient-gold">em ação</span>
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Confira como foi a Feira de Páscoa Florybal Pomerode realizada na empresa Bold, 
                  em Jaraguá do Sul - SC. Uma experiência que encantou colaboradores e 
                  transformou o ambiente corporativo.
                </p>
              </div>

              {/* Company info card */}
              <div className="p-5 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 shadow-gold">
                    <Building2 className="w-6 h-6 text-chocolate-950" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">Empresa Bold</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>Jaraguá do Sul - SC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                {["Degustação", "Integração", "Encantamento"].map((item) => (
                  <div 
                    key={item}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-400/20"
                  >
                    <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
                    <span className="font-body text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Easter decoration image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 relative aspect-[16/9] rounded-xl overflow-hidden shadow-soft"
              >
                <img
                  src={easterEggsOpen}
                  alt="Ovos de Páscoa abertos com recheio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-body text-xs text-foreground/80 text-center">
                    🐰 Chocolates artesanais que encantam
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Instagram Reel Embed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[9/16] max-w-[350px] mx-auto rounded-2xl overflow-hidden shadow-elevated bg-chocolate-950">
                {/* Instagram Embed */}
                <iframe
                  src="https://www.instagram.com/reel/DSKz3w0DjO0/embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Feira de Páscoa Florybal na empresa Bold"
                />
                
                {/* Decorative frame */}
                <div className="absolute inset-0 rounded-2xl border-2 border-gold-400/20 pointer-events-none" />
              </div>

              {/* Floating play indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft"
              >
                <Play className="w-4 h-4 text-gold-500 fill-gold-500" />
                <span className="font-body text-xs text-muted-foreground">Via Instagram</span>
              </motion.div>

              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold-400/30 rounded-tl-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold-400/30 rounded-br-2xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasoSucessoSection;
