import { MapPin, Calendar, Clock } from "lucide-react";

const LocalDataSection = () => {
  const details = [
    {
      icon: MapPin,
      title: "Local",
      value: "Mueller - Timbó",
      description: "Ambiente preparado para receber a feira",
    },
    {
      icon: Calendar,
      title: "Data",
      value: "Março de 2026",
      description: "A definir conforme disponibilidade da empresa",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Flexível",
      description: "Conforme conveniência do expediente",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-medium tracking-widest text-accent uppercase mb-4">
            03 — Local e Data
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Quando e <span className="text-primary">Onde</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full" />
        </div>

        {/* Details Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {details.map((detail, index) => (
            <div
              key={detail.title}
              className="group text-center p-8 rounded-3xl bg-card border border-border hover:border-accent/30 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors">
                <detail.icon className="w-8 h-8 text-accent" />
              </div>
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {detail.title}
              </p>
              <h3 className="font-display text-2xl text-foreground mb-3">{detail.value}</h3>
              <p className="font-body text-sm text-muted-foreground">{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-secondary/50 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-accent text-lg">📦</span>
              </div>
              <div>
                <h4 className="font-display text-lg text-foreground mb-2">Preparação Antecipada</h4>
                <p className="font-body text-muted-foreground leading-relaxed">
                  O envio dos produtos demonstrativos e catálogo digital será realizado antes do evento, 
                  conforme cronograma a combinar com a equipe Mueller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalDataSection;
