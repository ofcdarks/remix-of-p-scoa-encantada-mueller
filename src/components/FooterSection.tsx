import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
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
    <footer id="contato" className="py-20 gradient-chocolate relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-10">🍫</div>
      <div className="absolute bottom-20 right-10 text-8xl opacity-10">🐣</div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Closing Message */}
        <div className="text-center mb-16">
          <p className="font-body text-lg text-gold-300 mb-4">Com carinho,</p>
          <h3 className="font-display text-3xl md:text-4xl text-gold-100 mb-2">
            Equipe Florybal Chocolates Caseiros
          </h3>
          <p className="font-body text-gold-400/80">Pomerode/SC</p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactInfo.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Endereço" ? "_blank" : undefined}
              rel={contact.label === "Endereço" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-chocolate-800/50 backdrop-blur-sm border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center mb-4 group-hover:bg-gold-400/20 transition-colors">
                <contact.icon className="w-6 h-6 text-gold-400" />
              </div>
              <p className="font-body text-sm text-gold-400/60 uppercase tracking-wider mb-1">{contact.label}</p>
              <p className="font-body text-gold-100 text-sm">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mb-12">
          <Button 
            variant="hero" 
            size="xl"
            asChild
          >
            <a 
              href="https://wa.me/5547997699193?text=Olá!%20Tenho%20interesse%20na%20Feira%20de%20Páscoa%20Florybal%20para%20a%20empresa%20Mueller."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </a>
          </Button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="text-center">
          <p className="font-display text-lg text-gold-300 mb-2">
            🍫 Chocolate de Gramado, agora em Pomerode!
          </p>
          <p className="font-body text-sm text-gold-400/40">
            © {new Date().getFullYear()} Florybal Chocolates Caseiros. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
