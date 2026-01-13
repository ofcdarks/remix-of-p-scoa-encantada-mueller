import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Heart, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/florybal-logo-new.png";
import easterBunnyChocolates from "@/assets/easter-bunny-chocolates.jpg";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(47) 99919-1829",
      href: "tel:+5547999191829",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "florybalpomerode@gmail.com",
      href: "mailto:florybalpomerode@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@florybalpomerode",
      href: "https://www.instagram.com/florybalpomerode/",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua XV de Novembro, 165 – Pomerode/SC",
      href: "https://maps.google.com/?q=Rua+XV+de+Novembro+165+Pomerode+SC",
    },
  ];

  return (
    <footer id="contato" className="py-12 lg:py-16 gradient-chocolate relative overflow-hidden" ref={ref}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            {/* Logo */}
            <img src={logoImage} alt="Florybal Logo" className="h-44 md:h-56 object-contain mx-auto mb-4" />
            <div className="inline-flex items-center gap-3 mb-3">
              <Heart className="w-5 h-5 text-easter fill-easter" />
              <span className="font-body text-gold-300/80 tracking-wide">Com carinho,</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-gold-50 mb-2">
              Equipe Florybal Pomerode
            </h3>
            <p className="font-body text-gold-400/70">Chocolates Caseiros • Pomerode/SC</p>
          </motion.div>

          {/* Contact Grid - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
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
                className="group flex flex-col items-center text-center p-6 rounded-xl bg-chocolate-800/40 backdrop-blur-sm border border-gold-400/10 hover:border-gold-400/40 hover:bg-chocolate-800/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/10"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/30 group-hover:scale-110 transition-all duration-300">
                  <contact.icon className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors" />
                </div>
                <p className="font-body text-xs text-gold-400/60 uppercase tracking-wider mb-1 group-hover:text-gold-400/80 transition-colors">{contact.label}</p>
                <p className="font-body text-[10px] sm:text-xs text-gold-100 leading-relaxed text-center break-words group-hover:text-gold-50 transition-colors">{contact.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="group"
            >
              <a 
                href="https://wa.me/5547999191829?text=Olá!%20Tenho%20interesse%20na%20Feira%20de%20Páscoa%20Florybal%20Pomerode%20para%20minha%20empresa.%20Gostaria%20de%20agendar%20uma%20conversa."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar pelo WhatsApp</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <Send className="w-4 h-4" />
                </motion.span>
              </a>
            </Button>
            <p className="font-body text-xs text-gold-400/40 mt-3">
              Resposta em até 24 horas úteis
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent mb-8" />

          {/* Easter decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex justify-center mb-8"
          >
            <div className="flex gap-4">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="w-16 h-16 rounded-lg overflow-hidden"
              >
                <img
                  src={easterBunnyChocolates}
                  alt="Coelhos de chocolate"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-center"
          >
            <p className="font-display text-lg text-gold-300/80 mb-3">
              🐰🍫 Chocolate de Gramado, agora em Pomerode!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <Link to="/politica-privacidade" className="font-body text-xs text-gold-400/50 hover:text-gold-400 transition-colors duration-300 underline-animation">
                Política de Privacidade
              </Link>
              <span className="text-gold-400/30">•</span>
              <Link to="/politica-cookies" className="font-body text-xs text-gold-400/50 hover:text-gold-400 transition-colors duration-300 underline-animation">
                Política de Cookies
              </Link>
            </div>
            <p className="font-body text-xs text-gold-400/30">
              © {new Date().getFullYear()} Florybal Chocolates Caseiros. Proposta exclusiva para sua empresa.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
