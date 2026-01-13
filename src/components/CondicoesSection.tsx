import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, FileText, BadgePercent, Check, Zap } from "lucide-react";
import easterTruffles from "@/assets/easter-truffles.jpg";

const CondicoesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const conditions = [
    {
      icon: CreditCard,
      title: "Desconto em Folha",
      highlight: "Praticidade",
      description: "Facilidade para colaboradores mediante alinhamento com o RH",
      benefits: ["Sem burocracia", "Desconto direto", "Maior adesão"]
    },
    {
      icon: FileText,
      title: "Boleto Empresarial",
      highlight: "30 dias",
      description: "Boleto para 30 dias em compras diretas da empresa",
      benefits: ["Flexibilidade", "Planejamento", "Sem entrada"]
    },
    {
      icon: BadgePercent,
      title: "Pedidos Antecipados",
      highlight: "Exclusivo",
      description: "Condições diferenciadas para kits corporativos",
      benefits: ["Economia", "Prioridade", "Personalização"]
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} 
      />

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
            Condições Especiais
          </span>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              Facilidades <span className="text-gradient-gold">Exclusivas</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Pensando em acessibilidade, praticidade e valorização do colaborador.
            </p>
          </motion.div>

          {/* Conditions Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-gold-400/30 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  {/* Highlight Badge */}
                  <div className="absolute -top-3 left-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-chocolate-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                      {condition.highlight}
                    </span>
                  </div>

                  <div className="pt-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 transition-colors">
                      <condition.icon className="w-6 h-6 text-primary group-hover:text-gold-600 transition-colors" />
                    </div>
                    
                    <h3 className="font-display text-xl text-foreground mb-2">{condition.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{condition.description}</p>
                    
                    {/* Benefits list */}
                    <div className="space-y-2">
                      {condition.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-gold-500" />
                          <span className="font-body text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Easter image decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-elevated border-4 border-gold-400/20">
              <img
                src={easterTruffles}
                alt="Trufas de Páscoa artesanais"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gold-500/5 border border-gold-400/20 max-w-xl mx-auto"
          >
            <Zap className="w-5 h-5 text-gold-500" />
            <p className="font-body text-sm text-foreground text-center">
              Essas facilidades <strong className="text-gradient-gold">aumentam significativamente</strong> a adesão e conversão
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CondicoesSection;
