import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import chocolatesImage from "@/assets/chocolates-detail.jpg";
import { Award, Heart, Star } from "lucide-react";

const ApresentacaoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="apresentacao" className="py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-easter/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block font-body text-sm font-semibold tracking-widest text-accent uppercase mb-4"
          >
            01 — Quem Somos
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Excelência de <span className="text-gradient-gold">Gramado</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-gold-400/20 via-easter/10 to-gold-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={chocolatesImage}
                alt="Chocolates Florybal artesanais"
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/50 via-transparent to-transparent" />
            </div>
            
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-elevated border border-border"
            >
              <p className="font-display text-4xl text-gradient-gold mb-1">+30</p>
              <p className="font-body text-sm text-muted-foreground">Anos de tradição</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-6 -left-6 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-4 shadow-gold"
            >
              <Award className="w-8 h-8 text-chocolate-950" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="font-body text-xl text-foreground leading-relaxed">
                A <strong className="text-gradient-gold font-semibold">Florybal Chocolates Caseiros</strong> é uma marca tradicional 
                de Gramado (RS), reconhecida nacionalmente pela{" "}
                <span className="text-primary font-medium">excelência em chocolates artesanais</span>, 
                qualidade sensorial e forte apelo emocional.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Agora presente em <strong className="text-accent">Pomerode (SC)</strong>, a Florybal leva ao público catarinense 
                muito mais do que chocolate: entrega <em className="text-foreground font-medium">experiência, memória afetiva e encantamento</em>.
              </p>
            </motion.div>

            {/* Quote Block */}
            <motion.div
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-secondary/50 border-l-4 border-gold-500"
            >
              <p className="font-display text-xl text-foreground italic leading-relaxed">
                "Nossa proposta é proporcionar à equipe Mueller uma{" "}
                <span className="text-gradient-gold font-semibold">vivência exclusiva</span>, transformando 
                o ambiente corporativo em um espaço de sabor, presente e emoção."
              </p>
            </motion.div>
            
            {/* Highlights */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Star, value: "Premium", label: "Qualidade" },
                { icon: Heart, value: "Artesanal", label: "Produção" },
                { icon: Award, value: "Exclusivo", label: "Atendimento" },
              ].map((item) => (
                <div 
                  key={item.label} 
                  className="group text-center p-5 rounded-2xl bg-card border border-border hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-400/20 transition-colors">
                    <item.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <p className="font-display text-lg text-primary">{item.value}</p>
                  <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApresentacaoSection;
