import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ChevronLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Como funciona a Feira de Páscoa?",
    answer: "Montamos um espaço exclusivo na sua empresa com degustação gratuita de chocolates artesanais. Seus colaboradores podem comprar com condições especiais de pagamento."
  },
  {
    question: "Qual o custo para a empresa?",
    answer: "Custo zero! A Florybal cuida de toda a estrutura, produtos e atendimento. A empresa apenas cede o espaço."
  },
  {
    question: "Quais formas de pagamento?",
    answer: "Aceitamos PIX, cartão de crédito (até 3x sem juros) e débito. Também oferecemos a opção de desconto em folha."
  },
  {
    question: "Quanto tempo dura o evento?",
    answer: "A feira pode durar de 1 a 5 dias, conforme a disponibilidade e tamanho da empresa. O horário é flexível."
  },
  {
    question: "Quais produtos estão disponíveis?",
    answer: "Ovos de Páscoa, trufas, bombons, barras, e muito mais! Todos artesanais, direto de Gramado."
  }
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<FAQ | null>(null);
  const [showContact, setShowContact] = useState(false);

  const handleBack = () => {
    if (showContact) {
      setShowContact(false);
    } else if (selectedFaq) {
      setSelectedFaq(null);
    }
  };

  const whatsappUrl = "https://wa.link/fquzxx";

  return (
    <>
      {/* Chat Button with Pulse Animation */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-chocolate-600 via-chocolate-700 to-chocolate-800 shadow-xl flex items-center justify-center group transition-all duration-500 ${isOpen ? 'hidden' : ''}`}
        aria-label="Abrir chat"
      >
        {/* Pulsing gradient glow */}
        <span className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-gold-500/40 via-gold-400/20 to-gold-500/40 animate-[pulse_2s_ease-in-out_infinite] blur-sm" />
        <span className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-gold-400/30 via-chocolate-500/20 to-gold-400/30 animate-[pulse_2.5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
        
        {/* Inner glow on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 text-gold-200 group-hover:text-gold-100 relative z-10 transition-all duration-300 group-hover:scale-110" />
        
        {/* Notification dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-easter rounded-full border-2 border-chocolate-700 shadow-md">
          <span className="absolute inset-0 rounded-full bg-easter animate-[ping_2s_ease-in-out_infinite] opacity-50" />
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-2xl shadow-chocolate-950/60 border border-gold-400/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-chocolate-700 via-chocolate-600 to-chocolate-700 p-5 flex items-center gap-3 border-b border-gold-400/20">
              {(selectedFaq || showContact) && (
                <button 
                  onClick={handleBack}
                  className="p-1.5 rounded-lg hover:bg-chocolate-500/50 transition-all duration-200 hover:scale-105"
                >
                  <ChevronLeft className="w-5 h-5 text-gold-200" />
                </button>
              )}
              <div className="flex-1">
                <h3 className="font-display text-xl text-gold-50">
                  {showContact ? "Falar com a equipe" : selectedFaq ? "Resposta" : "🍫 Olá!"}
                </h3>
                <p className="text-xs text-gold-300/70 mt-0.5">
                  {showContact ? "Escolha como prefere contato" : selectedFaq ? "Veja a resposta abaixo" : "Como podemos ajudar?"}
                </p>
              </div>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setSelectedFaq(null);
                  setShowContact(false);
                }}
                className="p-2 rounded-lg hover:bg-chocolate-500/50 transition-all duration-200 hover:scale-105 hover:rotate-90"
              >
                <X className="w-5 h-5 text-gold-200" />
              </button>
            </div>

            {/* Content */}
            <div className="bg-gradient-to-b from-chocolate-800 to-chocolate-900 p-5 min-h-[300px] max-h-[420px] overflow-y-auto">
              <AnimatePresence mode="wait">
                {showContact ? (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-gold-200/80 text-sm text-center mb-6">
                      Nossa equipe está pronta para atender você!
                    </p>
                    
                    <div className="space-y-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-green-600/20 border border-green-500/30 hover:bg-green-600/30 hover:border-green-400/50 transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/10"
                      >
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gold-50 font-semibold">WhatsApp</p>
                          <p className="text-gold-300/70 text-sm">(47) 99919-1829</p>
                        </div>
                        <Send className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href="https://wa.link/fquzxx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-gold-500/10 border border-gold-400/20 hover:bg-gold-500/20 hover:border-gold-400/40 transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/10"
                      >
                        <div className="w-12 h-12 rounded-full bg-gold-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Phone className="w-6 h-6 text-gold-200" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gold-50 font-semibold">Ligar agora</p>
                          <p className="text-gold-300/70 text-sm">(47) 99919-1829</p>
                        </div>
                      </a>
                    </div>

                    <p className="text-center text-gold-400/50 text-xs pt-4">
                      ⏱️ Resposta em até 24 horas úteis
                    </p>
                  </motion.div>
                ) : selectedFaq ? (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    {/* Question bubble */}
                    <div className="bg-gold-500/15 rounded-2xl rounded-tr-sm p-4 border border-gold-400/20 ml-8">
                      <p className="text-gold-100 text-sm font-medium">{selectedFaq.question}</p>
                    </div>
                    
                    {/* Answer bubble */}
                    <div className="bg-chocolate-700/60 rounded-2xl rounded-tl-sm p-5 border border-gold-400/10 mr-8 shadow-lg">
                      <p className="text-gold-100/90 text-sm leading-relaxed">{selectedFaq.answer}</p>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-4"
                    >
                      <Button
                        onClick={() => setShowContact(true)}
                        size="sm"
                        className="w-full bg-gradient-to-r from-gold-600/20 to-gold-500/20 hover:from-gold-600/30 hover:to-gold-500/30 text-gold-200 border border-gold-400/30 hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-0.5 text-xs px-3"
                      >
                        <MessageCircle className="w-3 h-3 mr-1.5 flex-shrink-0" />
                        <span className="truncate">Ainda tem dúvidas? Fale conosco</span>
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="faqs"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-3"
                  >
                    <p className="text-gold-300/60 text-xs uppercase tracking-wider mb-4">Perguntas frequentes</p>
                    {faqs.map((faq, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06 }}
                        onClick={() => setSelectedFaq(faq)}
                        className="w-full text-left p-4 rounded-xl bg-chocolate-700/40 border border-gold-400/10 hover:border-gold-400/30 hover:bg-chocolate-700/60 transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold-500/5"
                      >
                        <p className="text-gold-100/90 text-sm group-hover:text-gold-50 transition-colors flex items-center gap-2">
                          <span className="text-gold-400/50 group-hover:text-gold-400 transition-colors">→</span>
                          {faq.question}
                        </p>
                      </motion.button>
                    ))}

                    <div className="pt-4 mt-2 border-t border-gold-400/10">
                      <Button
                        onClick={() => setShowContact(true)}
                        className="w-full bg-gradient-to-r from-chocolate-600 to-chocolate-500 hover:from-chocolate-500 hover:to-chocolate-400 text-gold-50 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/10"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Falar com alguém
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="bg-chocolate-900 px-4 py-3 flex items-center justify-center gap-2 border-t border-gold-400/10">
              <span className="text-[11px] text-gold-400/40">Powered by</span>
              <span className="text-[11px] text-gold-300/60 font-medium">Florybal Chocolates</span>
              <span className="text-sm">🍫</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
