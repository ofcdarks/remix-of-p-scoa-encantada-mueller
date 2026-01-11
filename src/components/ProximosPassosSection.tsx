import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Calendar, MapPin, CreditCard } from "lucide-react";

const ProximosPassosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Definir a Data",
      description: "Escolher o melhor dia para realizar a Feira de Páscoa na Mueller",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Confirmar Local",
      description: "Definir endereços das filiais para envio de produtos demonstrativos",
      optional: true,
    },
    {
      number: "03",
      icon: CreditCard,
      title: "Modalidade de Pagamento",
      description: "Escolher a forma mais conveniente: colaborador ou empresa",
    },
  ];

  return (
    <section className="py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-easter/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-body text-sm font-semibold tracking-widest text-accent uppercase mb-4">
            06 — Próximos Passos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Vamos <span className="text-gradient-gold">Começar</span>?
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Para avançarmos com a organização, precisamos de{" "}
            <span className="text-foreground font-medium">apenas três alinhamentos simples</span>
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group flex items-center gap-6 p-8 rounded-3xl bg-card border border-border hover:border-gold-400/30 shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                {/* Number + Icon */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300">
                    <span className="font-display text-2xl text-primary group-hover:opacity-0 transition-opacity">{step.number}</span>
                    <step.icon className="w-8 h-8 text-chocolate-950 absolute opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-2xl text-foreground">{step.title}</h3>
                    {step.optional && (
                      <span className="px-3 py-1 rounded-full bg-secondary text-xs font-body text-muted-foreground font-medium">
                        Opcional
                      </span>
                    )}
                  </div>
                  <p className="font-body text-muted-foreground text-lg">{step.description}</p>
                </div>

                {/* Check icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-gold-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button variant="ctaGold" size="xl" asChild>
              <a href="#contato" className="flex items-center gap-3">
                <span>Agendar Reunião</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+5547997699193">
                Ligar: (47) 99769-9193
              </a>
            </Button>
          </div>
          <p className="font-body text-sm text-muted-foreground mt-8">
            ✨ Estamos ansiosos para criar essa experiência única com vocês
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProximosPassosSection;
