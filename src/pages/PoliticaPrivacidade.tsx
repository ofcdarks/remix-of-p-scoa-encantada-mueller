import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/florybal-logo-new.png";

const PoliticaPrivacidade = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-chocolate-950 border-b border-gold-400/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImage} alt="Florybal Logo" className="h-10 object-contain" />
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-gold-300 hover:text-gold-200 transition-colors font-body text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-gold-500" />
            <h1 className="font-display text-3xl md:text-4xl text-foreground">
              Política de Privacidade
            </h1>
          </div>

          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <section>
              <h2 className="font-display text-xl text-foreground mb-3">1. Introdução</h2>
              <p>
                A Florybal Pomerode está comprometida em proteger sua privacidade. Esta política
                descreve como coletamos, usamos e protegemos suas informações pessoais quando você
                utiliza nosso site e serviços.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">2. Informações Coletadas</h2>
              <p>Podemos coletar os seguintes tipos de informações:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Nome e informações de contato (e-mail, telefone)</li>
                <li>Dados da empresa (quando aplicável)</li>
                <li>Informações de navegação e uso do site</li>
                <li>Dados de comunicação via WhatsApp ou e-mail</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">3. Uso das Informações</h2>
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Responder a solicitações e propostas comerciais</li>
                <li>Enviar informações sobre nossos produtos e serviços</li>
                <li>Melhorar nosso site e experiência do usuário</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">4. Compartilhamento de Dados</h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros
                para fins de marketing. Podemos compartilhar dados apenas quando necessário para
                prestação de serviços ou cumprimento legal.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">5. Segurança</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas
                informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">6. Seus Direitos</h2>
              <p>De acordo com a LGPD, você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar seu consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">7. Contato</h2>
              <p>
                Para dúvidas sobre esta política ou exercer seus direitos, entre em contato:
              </p>
              <p className="mt-2">
                <strong>E-mail:</strong> florybalpomerode@gmail.com
                <br />
                <strong>Telefone:</strong> (47) 99919-1829
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PoliticaPrivacidade;
