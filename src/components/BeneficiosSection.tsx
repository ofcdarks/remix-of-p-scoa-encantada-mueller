import { Heart, Calendar, ShoppingBag, Award } from "lucide-react";

const BeneficiosSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Valorização dos Colaboradores",
      description: "Incentivo ao bem-estar e reconhecimento da equipe através de uma experiência especial",
    },
    {
      icon: Calendar,
      title: "Evento Temático Acolhedor",
      description: "Um momento de celebração e integração para encerrar o período com afetividade",
    },
    {
      icon: ShoppingBag,
      title: "Praticidade na Compra",
      description: "Antecipação na aquisição de presentes de Páscoa com toda conveniência",
    },
    {
      icon: Award,
      title: "Associação de Marca",
      description: "Conectar a Mueller a uma experiência positiva com produtos artesanais de alta qualidade",
    },
  ];

  return (
    <section className="py-24 gradient-chocolate relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-medium tracking-widest text-gold-400 uppercase mb-4">
            05 — Benefícios
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-100 mb-6">
            Por que escolher a <span className="text-gradient-gold">Florybal</span>?
          </h2>
          <p className="font-body text-lg text-gold-200/70 max-w-2xl mx-auto">
            Mais do que chocolates, oferecemos uma experiência que gera valor para sua empresa
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group flex gap-6 p-8 rounded-2xl bg-chocolate-800/50 backdrop-blur-sm border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-chocolate-950" />
              </div>
              <div>
                <h3 className="font-display text-xl text-gold-100 mb-2">{benefit.title}</h3>
                <p className="font-body text-gold-300/70 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="p-8 rounded-2xl border border-gold-400/20 bg-gold-400/5 backdrop-blur-sm">
            <p className="font-display text-2xl md:text-3xl text-gold-100 leading-relaxed">
              "Unir <span className="text-gradient-gold">sabor, presente e emoção</span> em um só momento"
            </p>
            <p className="font-body text-sm text-gold-400/60 mt-4">
              — Filosofia Florybal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
