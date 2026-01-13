import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CreditCard, CheckCircle2 } from "lucide-react";

const ProximosPassosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Definir a Data",
      description: "Escolher o melhor dia para a Feira de Páscoa",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Confirmar Local",
      description: "Endereços das filiais para envio de amostras",
      optional: true,
    },
    {
      number: "03",
      icon: CreditCard,
      title: "Forma de Pagamento",
      description: "Escolher: colaborador ou empresa",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Subtle background */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gold-400/5 to-transparent pointer-events-none" />

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
            Próximos Passos
          </span>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              Vamos <span className="text-gradient-gold">Começar</span>?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Para avançarmos, precisamos de apenas três alinhamentos simples.
            </p>
          </motion.div>

          {/* Steps - Clean horizontal timeline */}
          <div className="relative mb-16">
            {/* Connection line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-border" />
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step number circle */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border-2 border-border mb-6 mx-auto group-hover:border-gold-400/50 transition-colors">
                    <span className="font-display text-xl text-foreground">{step.number}</span>
                    {/* Completed indicator on hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-chocolate-950" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="font-display text-lg text-foreground">{step.title}</h3>
                    {step.optional && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-body text-muted-foreground font-medium uppercase tracking-wider">
                        Opcional
                      </span>
                    )}
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <Button variant="ctaGold" size="lg" asChild>
                <a href="#contato" className="flex items-center gap-2 min-w-[200px]">
                  <span>Agendar Reunião</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+5547999191829" className="min-w-[200px]">
                  (47) 99919-1829
                </a>
              </Button>
            </div>
            <p className="font-body text-sm text-muted-foreground mt-6">
              Estamos ansiosos para criar essa experiência com vocês ✨
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProximosPassosSection;
