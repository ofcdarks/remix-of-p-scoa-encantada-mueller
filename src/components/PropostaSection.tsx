import corporateImage from "@/assets/corporate-event.jpg";
import { Gift, Sparkles, ShoppingBag, Users } from "lucide-react";

const PropostaSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Degustação Exclusiva",
      description: "Degustação de produtos Florybal para todos os colaboradores",
    },
    {
      icon: Gift,
      title: "Linha de Páscoa",
      description: "Exposição de tabletes, trufas, cestas, temáticos e lembranças corporativas",
    },
    {
      icon: ShoppingBag,
      title: "Condições Especiais",
      description: "Preços exclusivos de compra para colaboradores da empresa",
    },
    {
      icon: Users,
      title: "Atendimento Especializado",
      description: "Equipe Florybal presente no local para um atendimento personalizado",
    },
  ];

  return (
    <section className="py-24 gradient-chocolate relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-easter/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-medium tracking-widest text-gold-400 uppercase mb-4">
            02 — A Proposta
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-100 mb-6">
            Feira de Páscoa <span className="text-gradient-gold">Florybal</span>
          </h2>
          <p className="font-body text-lg text-gold-200/70 max-w-2xl mx-auto">
            Um evento interno corporativo pensado especialmente para valorizar seus colaboradores
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-chocolate-800/50 backdrop-blur-sm border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-chocolate-950" />
                </div>
                <h3 className="font-display text-xl text-gold-100 mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-gold-300/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative group order-first lg:order-last">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-easter/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={corporateImage}
                alt="Evento corporativo de chocolate Florybal"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/60 to-transparent" />
              
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl text-gold-100 mb-2">Experiência Única</p>
                <p className="font-body text-sm text-gold-300/80">
                  Um momento especial de integração e celebração para sua equipe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropostaSection;
