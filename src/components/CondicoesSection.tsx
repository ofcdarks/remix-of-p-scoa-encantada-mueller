import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, FileText, BadgePercent, TrendingUp, Check } from "lucide-react";

const CondicoesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const conditions = [
    {
      icon: CreditCard,
      title: "Desconto em Folha",
      description: "Facilidade para colaboradores mediante alinhamento com o RH",
      highlight: "Praticidade",
      benefits: ["Sem burocracia", "Desconto direto", "Mais adesão"]
    },
    {
      icon: FileText,
      title: "Parcelamento Empresarial",
      description: "Até 3x no boleto para compras diretas da empresa",
      highlight: "3x sem juros",
      benefits: ["Flexibilidade", "Planejamento", "Facilidade"]
    },
    {
      icon: BadgePercent,
      title: "Condições Antecipadas",
      description: "Preços especiais para pedidos antecipados de kits corporativos",
      highlight: "Exclusivo",
      benefits: ["Economia", "Prioridade", "Personalização"]
    },
  ];

  return (
    <section className="py-28 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 text-9xl">🍫</div>
        <div className="absolute top-1/3 right-10 text-8xl">🥚</div>
        <div className="absolute bottom-20 left-1/3 text-9xl">🎁</div>
        <div className="absolute bottom-1/3 right-1/3 text-7xl">✨</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-body text-sm font-semibold tracking-widest text-accent uppercase mb-4">
            04 — Condições Comerciais
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Facilidades <span className="text-gradient-gold">Exclusivas</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pensando em <span className="text-foreground font-medium">acessibilidade, praticidade e valorização</span> do colaborador, 
            oferecemos condições diferenciadas
          </p>
        </motion.div>

        {/* Conditions Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-gold-400/30 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-3">
                {/* Highlight Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-chocolate-950 text-xs font-bold uppercase tracking-wider shadow-gold">
                  {condition.highlight}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-colors duration-300 mt-4">
                  <condition.icon className="w-8 h-8 text-primary group-hover:text-gold-600 transition-colors" />
                </div>
                
                <h3 className="font-display text-2xl text-foreground mb-3">{condition.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">{condition.description}</p>
                
                {/* Benefits list */}
                <ul className="space-y-2">
                  {condition.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-gold-500" />
                      <span className="font-body text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500/10 to-gold-400/5 border border-gold-400/20">
            <TrendingUp className="w-5 h-5 text-gold-500" />
            <p className="font-body text-foreground">
              Essas facilidades <strong className="text-gradient-gold">aumentam significativamente</strong> a adesão e impulsionam o volume de vendas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CondicoesSection;
