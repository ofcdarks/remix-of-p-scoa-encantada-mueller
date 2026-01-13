import { motion } from "framer-motion";
import { ArrowLeft, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/florybal-logo-new.png";

const PoliticaCookies = () => {
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
            <Cookie className="w-8 h-8 text-gold-500" />
            <h1 className="font-display text-3xl md:text-4xl text-foreground">
              Política de Cookies
            </h1>
          </div>

          <p className="text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <section>
              <h2 className="font-display text-xl text-foreground mb-3">1. O que são Cookies?</h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você
                visita nosso site. Eles nos ajudam a melhorar sua experiência de navegação e
                fornecer funcionalidades personalizadas.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">2. Tipos de Cookies Utilizados</h2>
              
              <h3 className="font-semibold text-foreground mt-4 mb-2">Cookies Essenciais</h3>
              <p>
                Necessários para o funcionamento básico do site. Sem eles, algumas funcionalidades
                podem não estar disponíveis.
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Cookies de Desempenho</h3>
              <p>
                Coletam informações sobre como os visitantes usam o site, ajudando-nos a melhorar
                seu funcionamento.
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Cookies de Funcionalidade</h3>
              <p>
                Permitem que o site lembre suas escolhas (como idioma ou região) para proporcionar
                recursos mais personalizados.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">3. Como Gerenciar Cookies</h2>
              <p>
                Você pode controlar e gerenciar cookies através das configurações do seu navegador.
                Note que desabilitar certos cookies pode afetar a funcionalidade do site.
              </p>
              <p className="mt-2">
                A maioria dos navegadores permite:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Ver quais cookies estão armazenados</li>
                <li>Aceitar ou rejeitar cookies individualmente</li>
                <li>Bloquear cookies de terceiros</li>
                <li>Excluir todos os cookies ao fechar o navegador</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">4. Cookies de Terceiros</h2>
              <p>
                Nosso site pode conter links para redes sociais e outros serviços que podem definir
                seus próprios cookies. Não temos controle sobre esses cookies e recomendamos
                consultar as políticas de privacidade desses serviços.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">5. Atualizações desta Política</h2>
              <p>
                Podemos atualizar esta política periodicamente. Recomendamos revisá-la regularmente
                para estar informado sobre como protegemos suas informações.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-foreground mb-3">6. Contato</h2>
              <p>
                Para dúvidas sobre nossa política de cookies:
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

export default PoliticaCookies;
