import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import corporateImage from "@/assets/corporate-event.jpg";
import { Sparkles, Gift, ShoppingBag, Users, Heart, TrendingUp } from "lucide-react";

const PropostaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sparkles,
      title: "Degustação Guiada",
      description: "Experiência sensorial conduzida por especialistas Florybal",
      highlight: "Premium",
    },
    {
      icon: Gift,
      title: "Linha Completa de Páscoa",
      description: "Tabletes, trufas, cestas, temáticos e lembranças corporativas",
      highlight: "Exclusivo",
    },
    {
      icon: ShoppingBag,
      title: "Condições Únicas",
      description: "Preços e facilidades válidos apenas durante a feira",
      highlight: "Especial",
    },
    {
      icon: Users,
      title: "Atendimento VIP",
      description: "Equipe Florybal dedicada para atendimento personalizado",
      highlight: "Dedicado",
    },
  ];

  const benefits = [
    { icon: Heart, text: "Ambiente emocionalmente favorável à decisão" },
    { icon: TrendingUp, text: "Eleva o valor percebido do presente" },
    { icon: Gift, text: "Estimula a antecipação das escolhas" },
  ];

  return (
    <section className="py-28 gradient-chocolate relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-easter/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-body text-sm font-semibold tracking-widest text-gold-400 uppercase mb-4">
            02 — A Experiência
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-100 mb-6">
            Feira de Páscoa <span className="text-gradient-gold">Florybal</span>
          </h2>
          <p className="font-body text-xl text-gold-200/80 max-w-3xl mx-auto leading-relaxed">
            Um evento corporativo desenvolvido com foco em 
            <span className="text-gold-300 font-medium"> experiência, conveniência e conversão</span>
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative p-7 rounded-3xl bg-chocolate-800/60 backdrop-blur-sm border border-gold-400/10 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Highlight Badge */}
                <div className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-chocolate-950 text-[10px] font-bold uppercase tracking-wider">
                  {feature.highlight}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                  <feature.icon className="w-7 h-7 text-chocolate-950" />
                </div>
                <h3 className="font-display text-xl text-gold-100 mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-gold-300/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-gold-400/30 to-easter/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={corporateImage}
                alt="Evento corporativo de chocolate Florybal"
                className="w-full h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/70 via-chocolate-950/20 to-transparent" />
              
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display text-3xl text-gold-100 mb-3">Experiência Única</p>
                <p className="font-body text-gold-300/90 leading-relaxed">
                  Um momento especial de integração, celebração e encantamento para toda a equipe
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-r from-gold-500/10 via-gold-400/5 to-gold-500/10 border border-gold-400/20 backdrop-blur-sm">
            <p className="font-display text-xl text-gold-100 text-center mb-6">
              Mais do que vender chocolate, a feira cria:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <p className="font-body text-sm text-gold-200/90">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropostaSection;
