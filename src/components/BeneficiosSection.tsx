import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Calendar, ShoppingBag, Award, Settings, ArrowRight } from "lucide-react";
import easterGiftBox from "@/assets/easter-gift-box.jpg";
import easterBasket from "@/assets/easter-basket.jpg";

const BeneficiosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const benefits = [
    {
      icon: Heart,
      title: "Valorização dos Colaboradores",
      description: "Fortalecimento do bem-estar e reconhecimento da equipe",
    },
    {
      icon: Calendar,
      title: "Momento Memorável",
      description: "Ambiente acolhedor que marca o período de Páscoa",
    },
    {
      icon: ShoppingBag,
      title: "Praticidade Total",
      description: "Presentes de Páscoa no próprio ambiente de trabalho",
    },
    {
      icon: Award,
      title: "Marca Premium",
      description: "Associação da sua empresa com experiência de alta qualidade",
    },
    {
      icon: Settings,
      title: "Zero Esforço Operacional",
      description: "Solução completa sem necessidade de logística interna",
    },
  ];

  return (
    <section id="beneficios" className="py-24 lg:py-32 gradient-chocolate relative overflow-hidden" ref={ref}>
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      
      {/* Ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-[150px]" />

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
            Benefícios Estratégicos
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Benefits List */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gold-50 leading-tight">
                Por que escolher a
                <span className="block text-gradient-gold">Florybal Pomerode?</span>
              </h2>
              <p className="font-body text-lg text-gold-200/80 max-w-lg">
                Uma ação de endomarketing com retorno emocional e institucional.
              </p>
            </motion.div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-chocolate-800/60 border border-transparent hover:border-gold-400/20 transition-all duration-500 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/40 group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-display text-base text-gold-100 mb-1 group-hover:text-gold-50 transition-colors">{benefit.title}</h3>
                    <p className="font-body text-sm text-gold-300/60 group-hover:text-gold-300/80 transition-colors">{benefit.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold-400/0 group-hover:text-gold-400/80 group-hover:translate-x-1 transition-all duration-300 ml-auto flex-shrink-0 mt-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image + Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl image-zoom group">
              <img
                src={easterGiftBox}
                alt="Caixa de presente de Páscoa com chocolates premium Florybal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/60 via-chocolate-950/10 to-transparent group-hover:from-chocolate-950/40 transition-all duration-500" />
              
              {/* Floating Easter basket */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl overflow-hidden shadow-elevated border-2 border-gold-400/30 hover:border-gold-400/60 hover:shadow-gold transition-all duration-500 image-zoom"
              >
                <img
                  src={easterBasket}
                  alt="Cesta de Páscoa"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Impact Statement */}
            <div className="p-6 rounded-2xl border border-gold-400/20 bg-gradient-to-br from-chocolate-800/40 via-chocolate-800/30 to-chocolate-900/40 backdrop-blur-sm hover:border-gold-400/40 hover:from-chocolate-800/50 transition-all duration-500 group">
              <p className="font-display text-xl md:text-2xl text-gold-100 leading-relaxed">
                "Mais que um evento — é uma{" "}
                <span className="text-gradient-gold">estratégia de valorização</span>{" "}
                com impacto emocional duradouro."
              </p>
              <p className="font-body text-sm text-gold-400/60 mt-4 group-hover:text-gold-400/80 transition-colors">
                — Proposta de Valor Florybal Pomerode
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
