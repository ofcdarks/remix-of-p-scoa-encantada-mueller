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

  const whatsappUrl = "https://wa.me/5547999191829?text=Olá!%20Tenho%20interesse%20na%20Feira%20de%20Páscoa%20Florybal%20Pomerode%20para%20minha%20empresa.";

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-chocolate-700 via-chocolate-800 to-chocolate-900 shadow-xl flex items-center justify-center group hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-300 ${isOpen ? 'hidden' : ''}`}
        aria-label="Abrir chat"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageCircle className="w-7 h-7 text-gold-300 group-hover:text-gold-200 transition-colors" />
        {/* Notification dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-easter rounded-full border-2 border-chocolate-800 animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-2xl shadow-chocolate-950/50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-chocolate-800 via-chocolate-700 to-chocolate-800 p-4 flex items-center gap-3">
              {(selectedFaq || showContact) && (
                <button 
                  onClick={handleBack}
                  className="p-1 rounded-lg hover:bg-chocolate-600/50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gold-300" />
                </button>
              )}
              <div className="flex-1">
                <h3 className="font-display text-lg text-gold-100">
                  {showContact ? "Falar com a equipe" : selectedFaq ? "Resposta" : "🍫 Olá! Como podemos ajudar?"}
                </h3>
                {!selectedFaq && !showContact && (
                  <p className="text-xs text-gold-400/70">Florybal Pomerode</p>
                )}
              </div>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setSelectedFaq(null);
                  setShowContact(false);
                }}
                className="p-2 rounded-lg hover:bg-chocolate-600/50 transition-colors"
              >
                <X className="w-5 h-5 text-gold-300" />
              </button>
            </div>

            {/* Content */}
            <div className="bg-gradient-to-b from-chocolate-900 to-chocolate-950 p-4 max-h-[400px] overflow-y-auto">
              <AnimatePresence mode="wait">
                {showContact ? (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="bg-chocolate-800/50 rounded-xl p-4 border border-gold-400/10">
                      <p className="text-gold-200/90 text-sm mb-4">
                        Nossa equipe está pronta para atender você! Escolha como prefere entrar em contato:
                      </p>
                      
                      <div className="space-y-3">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg bg-green-600/20 border border-green-500/30 hover:bg-green-600/30 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-gold-100 font-medium text-sm">WhatsApp</p>
                            <p className="text-gold-400/70 text-xs">(47) 99919-1829</p>
                          </div>
                          <Send className="w-4 h-4 text-green-400 ml-auto group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                          href="tel:+5547999191829"
                          className="flex items-center gap-3 p-3 rounded-lg bg-gold-500/10 border border-gold-400/20 hover:bg-gold-500/20 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-full bg-gold-500/30 flex items-center justify-center">
                            <Phone className="w-5 h-5 text-gold-300" />
                          </div>
                          <div>
                            <p className="text-gold-100 font-medium text-sm">Ligar agora</p>
                            <p className="text-gold-400/70 text-xs">(47) 99919-1829</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <p className="text-center text-gold-400/50 text-xs">
                      Resposta em até 24 horas úteis
                    </p>
                  </motion.div>
                ) : selectedFaq ? (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <div className="bg-gold-500/10 rounded-xl p-3 border border-gold-400/20">
                      <p className="text-gold-200 text-sm font-medium">{selectedFaq.question}</p>
                    </div>
                    <div className="bg-chocolate-800/50 rounded-xl p-4 border border-gold-400/10">
                      <p className="text-gold-200/90 text-sm leading-relaxed">{selectedFaq.answer}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowContact(true)}
                      className="w-full mt-4 border-gold-400/30 text-gold-300 hover:bg-gold-500/10 hover:text-gold-200"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Ainda tem dúvidas? Fale conosco
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="faqs"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-2"
                  >
                    <p className="text-gold-400/70 text-xs mb-3">Perguntas frequentes:</p>
                    {faqs.map((faq, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setSelectedFaq(faq)}
                        className="w-full text-left p-3 rounded-xl bg-chocolate-800/40 border border-gold-400/10 hover:border-gold-400/30 hover:bg-chocolate-800/60 transition-all duration-300 group"
                      >
                        <p className="text-gold-200/90 text-sm group-hover:text-gold-100 transition-colors">
                          {faq.question}
                        </p>
                      </motion.button>
                    ))}

                    <div className="pt-3 border-t border-gold-400/10 mt-4">
                      <Button
                        onClick={() => setShowContact(true)}
                        className="w-full bg-gradient-to-r from-chocolate-700 to-chocolate-600 hover:from-chocolate-600 hover:to-chocolate-500 text-gold-100 border border-gold-400/20"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Falar com alguém
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer decoration */}
            <div className="bg-chocolate-950 px-4 py-2 flex items-center justify-center gap-2">
              <span className="text-[10px] text-gold-400/40">Powered by</span>
              <span className="text-[10px] text-gold-400/60 font-medium">Florybal Chocolates</span>
              <span className="text-sm">🍫</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
