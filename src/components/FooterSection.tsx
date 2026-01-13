import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/florybal-logo-negativo.png";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const contactInfo = [
    { icon: Phone, value: "(47) 99919-1829", href: "https://wa.link/fquzxx" },
    { icon: Mail, value: "florybalpomerode@gmail.com", href: "mailto:florybalpomerode@gmail.com" },
    { icon: Instagram, value: "@florybalpomerode", href: "https://www.instagram.com/florybalpomerode/" },
    { icon: MapPin, value: "Rua XV de Novembro, 165 – Pomerode/SC", href: "https://maps.google.com/?q=Rua+XV+de+Novembro+165+Pomerode+SC" },
  ];

  return (
    <footer id="contato" className="py-8 lg:py-10 gradient-chocolate relative overflow-hidden" ref={ref}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo + CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6"
          >
            <img src={logoImage} alt="Florybal Logo" className="h-24 md:h-28 object-contain" />
            
            <Button variant="hero" size="lg" asChild>
              <a 
                href="https://wa.link/fquzxx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar pelo WhatsApp</span>
              </a>
            </Button>
          </motion.div>

          {/* Contact Info - Inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6"
          >
            {contactInfo.map((contact) => (
              <a
                key={contact.value}
                href={contact.href}
                target={contact.icon === MapPin ? "_blank" : undefined}
                rel={contact.icon === MapPin ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-gold-300/70 hover:text-gold-300 transition-colors text-sm"
              >
                <contact.icon className="w-4 h-4 text-gold-400" />
                <span className="font-body">{contact.value}</span>
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent mb-4" />

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left"
          >
            <p className="font-body text-xs text-gold-400/50">
              © {new Date().getFullYear()} Florybal Chocolates Caseiros • Chocolate de Gramado em Pomerode
            </p>
            <div className="flex gap-4">
              <Link to="/politica-privacidade" className="font-body text-xs text-gold-400/50 hover:text-gold-400 transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/politica-cookies" className="font-body text-xs text-gold-400/50 hover:text-gold-400 transition-colors">
                Política de Cookies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
