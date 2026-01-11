import { CreditCard, FileText, BadgePercent } from "lucide-react";

const CondicoesSection = () => {
  const conditions = [
    {
      icon: CreditCard,
      title: "Desconto em Folha",
      description: "Para colaboradores (mediante acordo com RH)",
      highlight: "Facilidade",
    },
    {
      icon: FileText,
      title: "Parcelamento",
      description: "Até 3x no boleto empresarial para compras diretas da empresa",
      highlight: "3x sem juros",
    },
    {
      icon: BadgePercent,
      title: "Descontos Especiais",
      description: "Para pedidos antecipados de kits corporativos de Páscoa",
      highlight: "Exclusivo",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🍫</div>
        <div className="absolute top-1/3 right-20 text-6xl">🥚</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🎁</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-medium tracking-widest text-accent uppercase mb-4">
            04 — Condições Comerciais
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Condições <span className="text-primary">Especiais</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Para facilitar o acesso e valorizar o colaborador, a Florybal oferece condições 
            exclusivas para empresas parceiras
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {conditions.map((condition, index) => (
            <div
              key={condition.title}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-accent/30 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-chocolate-950 text-xs font-bold uppercase tracking-wide">
                {condition.highlight}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <condition.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-2xl text-foreground mb-3">{condition.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{condition.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Element */}
        <div className="text-center mt-16">
          <p className="font-body text-sm text-muted-foreground">
            💼 <span className="font-medium text-foreground">Negociação flexível</span> — 
            Adaptamos as condições conforme as necessidades da sua empresa
          </p>
        </div>
      </div>
    </section>
  );
};

export default CondicoesSection;
