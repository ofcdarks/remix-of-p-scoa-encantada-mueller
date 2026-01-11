import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Clock, Package, ArrowRight } from "lucide-react";

const LocalDataSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const details = [
    {
      icon: MapPin,
      label: "Local",
      value: "Mueller – Timbó",
      note: "Espaço preparado para a experiência",
    },
    {
      icon: Calendar,
      label: "Data",
      value: "Março/2026",
      note: "Conforme disponibilidade",
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Flexível",
      note: "Adequado ao expediente",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none" />

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
            Logística
          </span>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              Local e <span className="text-gradient-gold">Data</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl">
              Organização flexível para se adequar à realidade da Mueller.
            </p>
          </motion.div>

          {/* Details - Horizontal layout */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {details.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-gold-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                    <detail.icon className="w-6 h-6 text-accent group-hover:text-gold-500 transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {detail.label}
                    </p>
                    <h3 className="font-display text-xl text-foreground mb-1">{detail.value}</h3>
                    <p className="font-body text-sm text-muted-foreground">{detail.note}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Box - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-2xl bg-secondary/50 border border-border"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 shadow-gold">
                <Package className="w-6 h-6 text-chocolate-950" />
              </div>
              <div className="flex-grow">
                <h4 className="font-display text-lg text-foreground mb-2">Preparação Antecipada</h4>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Os produtos demonstrativos e o catálogo digital serão enviados previamente, 
                  garantindo preparo e comunicação eficiente antes do evento.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gold-500 flex-shrink-0 hidden md:block" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocalDataSection;
