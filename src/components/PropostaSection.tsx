import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import easterCorporateEvent from "@/assets/easter-corporate-event.jpg";
import easterBunnyElegant from "@/assets/easter-bunny-elegant.jpg";
import { Gift, ShoppingBag, Users, ArrowRight, Cookie } from "lucide-react";

const PropostaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const features = [
    {
      icon: Cookie,
      title: "Degustação Guiada",
      description: "Experiência sensorial conduzida por especialistas",
    },
    {
      icon: Gift,
      title: "Linha Completa de Páscoa",
      description: "Tabletes, trufas, cestas e lembranças corporativas",
    },
    {
      icon: ShoppingBag,
      title: "Condições Exclusivas",
      description: "Preços especiais válidos apenas durante a feira",
    },
    {
      icon: Users,
      title: "Atendimento Dedicado",
      description: "Equipe Florybal no local para atendimento VIP",
    },
  ];

  return (
    <section id="proposta" className="py-24 lg:py-32 gradient-chocolate relative overflow-hidden" ref={ref}>
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-easter/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section indicator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px w-12 bg-gold-400" />
          <span className="font-body text-sm font-semibold tracking-[0.2em] text-gold-400 uppercase">
            A Experiência
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left: Text + Features */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gold-50 leading-tight">
                Feira de Páscoa
                <span className="block text-gradient-gold">Florybal Pomerode</span>
              </h2>
              <p className="font-body text-lg text-gold-200/80 leading-relaxed max-w-lg">
                Um evento corporativo desenvolvido com foco em experiência, 
                conveniência e conversão. Mais do que vender chocolate — 
                criamos um momento de encantamento.
              </p>
            </motion.div>

            {/* Features grid - 2x2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group p-5 rounded-2xl bg-chocolate-800/50 backdrop-blur-sm border border-gold-400/10 hover:border-gold-400/40 hover:bg-chocolate-800/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/40 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display text-base text-gold-100 mb-1 group-hover:text-gold-50 transition-colors">{feature.title}</h3>
                      <p className="font-body text-sm text-gold-300/60 leading-relaxed group-hover:text-gold-300/80 transition-colors">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Value proposition callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-gold-500/15 via-gold-500/10 to-transparent border-l-2 border-gold-500 hover:from-gold-500/25 hover:via-gold-500/15 transition-all duration-500 group"
            >
              <div className="flex-grow">
                <p className="font-body text-gold-200/90 text-sm leading-relaxed">
                  A feira cria um <strong className="text-gold-300">ambiente emocionalmente favorável</strong> à decisão de compra, 
                  elevando o valor percebido do presente.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gold-400 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl image-zoom group">
              <img
                src={easterCorporateEvent}
                alt="Feira de Páscoa corporativa Florybal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/80 via-chocolate-950/20 to-transparent group-hover:from-chocolate-950/70 transition-all duration-500" />
              
              {/* Floating bunny image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-4 right-4 w-28 h-28 rounded-full overflow-hidden shadow-elevated border-2 border-gold-400/40"
              >
                <img
                  src={easterBunnyElegant}
                  alt="Coelho de Páscoa artesanal"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🍫</span>
                  <span className="text-gold-400 text-xs font-medium tracking-wider uppercase">Experiência Única</span>
                </div>
                <p className="font-display text-2xl text-gold-50 leading-tight">
                  Momento de integração e encantamento para toda a equipe
                </p>
              </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold-400/30 rounded-tr-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold-400/30 rounded-bl-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropostaSection;
