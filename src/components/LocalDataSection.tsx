import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Clock, Package } from "lucide-react";

const LocalDataSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const details = [
    {
      icon: MapPin,
      title: "Local",
      value: "Mueller – Timbó",
      description: "Ambiente preparado para receber a experiência completa",
    },
    {
      icon: Calendar,
      title: "Data",
      value: "Março de 2026",
      description: "Período sugerido, a definir conforme disponibilidade",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Flexível",
      description: "Conforme conveniência do expediente da empresa",
    },
  ];

  return (
    <section className="py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-easter/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-body text-sm font-semibold tracking-widest text-accent uppercase mb-4">
            03 — Logística
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Local e <span className="text-gradient-gold">Data</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Details Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group text-center p-10 rounded-3xl bg-card border border-border hover:border-gold-400/30 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-3"
            >
              <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center mx-auto mb-8 group-hover:bg-gold-400/10 transition-colors duration-300">
                <detail.icon className="w-10 h-10 text-accent group-hover:text-gold-500 transition-colors" />
              </div>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-3">
                {detail.title}
              </p>
              <h3 className="font-display text-2xl text-foreground mb-4">{detail.value}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 shadow-gold">
                <Package className="w-7 h-7 text-chocolate-950" />
              </div>
              <div>
                <h4 className="font-display text-xl text-foreground mb-3">Preparação Antecipada</h4>
                <p className="font-body text-muted-foreground leading-relaxed text-lg">
                  Os <strong className="text-foreground">produtos demonstrativos</strong> e o{" "}
                  <strong className="text-foreground">catálogo digital completo</strong> serão enviados previamente, 
                  seguindo cronograma a ser alinhado — garantindo <span className="text-accent">preparo e comunicação eficiente</span> antes do evento.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalDataSection;
