import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, MessageCircle, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(47) 99769-9193",
      href: "tel:+5547997699193",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "comercialflorybalsc@gmail.com",
      href: "mailto:comercialflorybalsc@gmail.com",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua XV de Novembro, 165 – Centro – Pomerode/SC",
      href: "https://maps.google.com/?q=Rua+XV+de+Novembro+165+Pomerode+SC",
    },
  ];

  return (
    <footer id="contato" className="py-24 gradient-chocolate relative overflow-hidden" ref={ref}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-7xl opacity-10 select-none">🍫</div>
      <div className="absolute bottom-20 right-10 text-9xl opacity-10 select-none">🐣</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-easter fill-easter" />
            <span className="font-body text-lg text-gold-300">Com carinho,</span>
            <Heart className="w-5 h-5 text-easter fill-easter" />
          </div>
          <h3 className="font-display text-4xl md:text-5xl text-gold-100 mb-4">
            Equipe Florybal
          </h3>
          <p className="font-display text-xl text-gold-400/80">Chocolates Caseiros</p>
          <p className="font-body text-gold-400/60 mt-2">Pomerode/SC</p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              href={contact.href}
              target={contact.label === "Endereço" ? "_blank" : undefined}
              rel={contact.label === "Endereço" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center text-center p-8 rounded-3xl bg-chocolate-800/60 backdrop-blur-sm border border-gold-400/10 hover:border-gold-400/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-400/10 flex items-center justify-center mb-5 group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300">
                <contact.icon className="w-7 h-7 text-gold-400 group-hover:text-chocolate-950 transition-colors" />
              </div>
              <p className="font-body text-xs text-gold-400/60 uppercase tracking-widest mb-2">{contact.label}</p>
              <p className="font-body text-gold-100 text-sm leading-relaxed">{contact.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <Button 
            variant="hero" 
            size="xl"
            asChild
            className="group"
          >
            <a 
              href="https://wa.me/5547997699193?text=Olá!%20Tenho%20interesse%20na%20Feira%20de%20Páscoa%20Florybal%20para%20a%20empresa%20Mueller.%20Gostaria%20de%20agendar%20uma%20conversa."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar pelo WhatsApp</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Send className="w-4 h-4" />
              </motion.span>
            </a>
          </Button>
          <p className="font-body text-sm text-gold-400/50 mt-4">
            Resposta em até 24 horas úteis
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent mb-10" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-center"
        >
          <p className="font-display text-2xl text-gold-300 mb-4">
            🍫 Chocolate de Gramado, agora em Pomerode!
          </p>
          <p className="font-body text-sm text-gold-400/40">
            © {new Date().getFullYear()} Florybal Chocolates Caseiros. Proposta exclusiva para Mueller.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
