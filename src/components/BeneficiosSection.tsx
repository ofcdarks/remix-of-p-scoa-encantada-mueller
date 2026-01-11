import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Calendar, ShoppingBag, Award, Settings, Sparkles } from "lucide-react";
import premiumGiftImage from "@/assets/premium-gift.jpg";

const BeneficiosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Heart,
      title: "Valorização dos Colaboradores",
      description: "Fortalecimento do bem-estar e reconhecimento da equipe através de uma experiência sensorial exclusiva",
    },
    {
      icon: Calendar,
      title: "Momento Temático Memorável",
      description: "Criação de um ambiente acolhedor e afetivo que marca o período de Páscoa na memória de todos",
    },
    {
      icon: ShoppingBag,
      title: "Praticidade e Antecipação",
      description: "Facilidade na aquisição de presentes de Páscoa com toda a conveniência no próprio ambiente de trabalho",
    },
    {
      icon: Award,
      title: "Associação de Marca Premium",
      description: "Conexão da Mueller com uma experiência positiva, afetiva e de altíssima qualidade",
    },
    {
      icon: Settings,
      title: "Redução de Esforço Operacional",
      description: "Solução completa e organizada que elimina a necessidade de logística interna",
    },
  ];

  return (
    <section className="py-28 gradient-chocolate relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-easter/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-body text-sm font-semibold tracking-widest text-gold-400 uppercase mb-4">
            05 — Benefícios Estratégicos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-100 mb-6">
            Por que a <span className="text-gradient-gold">Florybal</span>?
          </h2>
          <p className="font-body text-xl text-gold-200/80 max-w-3xl mx-auto leading-relaxed">
            Uma <span className="text-gold-300 font-medium">ação de endomarketing</span> com retorno 
            emocional e institucional para a Mueller
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex gap-5 p-6 rounded-2xl bg-chocolate-800/50 backdrop-blur-sm border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                  <benefit.icon className="w-7 h-7 text-chocolate-950" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-gold-100 mb-1">{benefit.title}</h3>
                  <p className="font-body text-sm text-gold-300/70 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image + Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-easter/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-3xl shadow-elevated">
                <img
                  src={premiumGiftImage}
                  alt="Presente de chocolate premium Florybal"
                  className="w-full h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/60 to-transparent" />
              </div>
            </div>

            {/* Impact Statement */}
            <div className="p-8 rounded-3xl border border-gold-400/20 bg-gradient-to-br from-gold-400/10 to-gold-400/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-gold-400" />
                <span className="font-body text-sm text-gold-400 uppercase tracking-wider font-medium">Mais que um evento</span>
              </div>
              <p className="font-display text-2xl md:text-3xl text-gold-100 leading-relaxed mb-2">
                "A Feira de Páscoa Florybal é uma{" "}
                <span className="text-gradient-gold">ação estratégica de endomarketing</span>{" "}
                com retorno emocional e institucional"
              </p>
              <p className="font-body text-sm text-gold-400/60 mt-4">
                — Proposta de valor Florybal
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
