import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const ProximosPassosSection = () => {
  const steps = [
    {
      number: "01",
      title: "Definir a Data",
      description: "Escolher o melhor dia para realizar a Feira de Páscoa",
    },
    {
      number: "02",
      title: "Confirmar Local",
      description: "Definir endereços das filiais (se houver) para envio dos produtos de demonstração",
      optional: true,
    },
    {
      number: "03",
      title: "Modalidade de Pagamento",
      description: "Escolher a forma mais conveniente: colaborador ou empresa",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-easter/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-medium tracking-widest text-accent uppercase mb-4">
            06 — Próximos Passos
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Vamos <span className="text-primary">Começar</span>?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Para prosseguir com a organização da Feira de Páscoa, precisamos definir apenas três pontos simples
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group flex items-start gap-6 p-6 rounded-2xl bg-card border border-border hover:border-accent/30 shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                {/* Number */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <span className="font-display text-lg text-primary group-hover:text-primary-foreground">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-xl text-foreground">{step.title}</h3>
                    {step.optional && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-body text-muted-foreground">
                        Opcional
                      </span>
                    )}
                  </div>
                  <p className="font-body text-muted-foreground">{step.description}</p>
                </div>

                {/* Check icon */}
                <CheckCircle className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button variant="ctaGold" size="xl" asChild>
              <a href="#contato" className="flex items-center gap-2">
                Agendar Reunião
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+5547997699193">
                Ligar Agora
              </a>
            </Button>
          </div>
          <p className="font-body text-sm text-muted-foreground mt-6">
            Resposta em até 24 horas úteis
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProximosPassosSection;
