import chocolatesImage from "@/assets/chocolates-detail.jpg";

const ApresentacaoSection = () => {
  return (
    <section id="apresentacao" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-easter/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-sm font-medium tracking-widest text-accent uppercase mb-4">
            01 — Apresentação
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Tradição de <span className="text-primary">Gramado</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/20 to-easter/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={chocolatesImage}
                alt="Chocolates Florybal artesanais"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elevated border border-border">
              <p className="font-display text-3xl text-primary mb-1">+30</p>
              <p className="font-body text-sm text-muted-foreground">Anos de tradição</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground leading-relaxed">
              A <strong className="text-primary font-semibold">Florybal Chocolates Caseiros</strong>, marca tradicional de Gramado (RS), 
              está presente em <strong className="text-accent">Pomerode (SC)</strong> trazendo o melhor do chocolate artesanal 
              para o público Catarinense.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Nesta Páscoa, gostaríamos de proporcionar à equipe da <strong className="text-foreground">Mueller</strong> uma 
              experiência exclusiva e encantadora através da <strong className="text-primary">Feira de Páscoa Florybal</strong>, 
              unindo <em className="text-accent">sabor, presente e emoção</em> em um só momento.
            </p>
            
            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {[
                { value: "100%", label: "Artesanal" },
                { value: "Gramado", label: "Origem" },
                { value: "Premium", label: "Qualidade" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                  <p className="font-display text-xl text-primary">{item.value}</p>
                  <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApresentacaoSection;
