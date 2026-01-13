import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, X, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

// Import catalog pages
import page1 from "@/assets/catalogo/page_1.jpg";
import page2 from "@/assets/catalogo/page_2.jpg";
import page3 from "@/assets/catalogo/page_3.jpg";
import page4 from "@/assets/catalogo/page_4.jpg";
import page5 from "@/assets/catalogo/page_5.jpg";
import page6 from "@/assets/catalogo/page_6.jpg";
import page7 from "@/assets/catalogo/page_7.jpg";
import page8 from "@/assets/catalogo/page_8.jpg";
import page9 from "@/assets/catalogo/page_9.jpg";
import page10 from "@/assets/catalogo/page_10.jpg";

const catalogPages = [
  { id: 1, image: page1, title: "Capa - Fantástica Páscoa Florybal 2026" },
  { id: 2, image: page2, title: "Ovos ao Leite e Sabores Meio a Meio" },
  { id: 3, image: page3, title: "Ovos Chocolate Branco, Especiais e Trufados" },
  { id: 4, image: page4, title: "Ovos Recheados e Produtos para Ninho" },
  { id: 5, image: page5, title: "Coelhos e Coleções Infantis" },
  { id: 6, image: page6, title: "Linha Infantil e Mundo das Fadas" },
  { id: 7, image: page7, title: "Corações e Cestas" },
  { id: 8, image: page8, title: "Cestas e Presentes Variados" },
  { id: 9, image: page9, title: "50% e 70% Teor de Cacau, Diet e Soja" },
  { id: 10, image: page10, title: "Lançamentos e Casa do Coelho" },
];

const CatalogoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % catalogPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + catalogPages.length) % catalogPages.length);
  };

  const openZoom = (image: string) => {
    setZoomedImage(image);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage(null);
  };

  return (
    <section
      ref={ref}
      id="catalogo"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-cream-50 via-secondary to-cream-100"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-gold-400 to-chocolate-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-chocolate-400 to-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-chocolate-700 to-chocolate-800 text-gold-200 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-md">
            <BookOpen className="w-4 h-4" />
            Catálogo Completo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-chocolate-800 mb-4">
            Catálogo Páscoa 2026
          </h2>
          <p className="text-lg text-chocolate-600 max-w-2xl mx-auto">
            Conheça toda a linha de produtos Florybal para esta Páscoa. 
            Navegue pelas páginas e descubra as delícias que preparamos para você!
          </p>
        </motion.div>

        {/* Catalog Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Viewer */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-chocolate-200">
            {/* Navigation Arrows */}
            <button
              onClick={prevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-chocolate-700 p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-chocolate-700 p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Próxima página"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Zoom Button */}
            <button
              onClick={() => openZoom(catalogPages[currentPage].image)}
              className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-chocolate-700 p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Ampliar imagem"
            >
              <ZoomIn className="w-5 h-5" />
            </button>

            {/* Page Display */}
            <div className="relative aspect-[16/11] overflow-hidden">
              <motion.img
                key={currentPage}
                src={catalogPages[currentPage].image}
                alt={catalogPages[currentPage].title}
                className="w-full h-full object-contain bg-cream-50"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Page Info Bar */}
            <div className="bg-gradient-to-r from-chocolate-700 to-chocolate-800 text-gold-100 px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">
                  {catalogPages[currentPage].title}
                </h3>
                <span className="bg-gold-500/20 px-4 py-1 rounded-full text-sm font-medium text-gold-200">
                  Página {currentPage + 1} de {catalogPages.length}
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6 overflow-x-auto pb-4">
            <div className="flex gap-3 justify-center min-w-max px-4">
              {catalogPages.map((page, index) => (
                <button
                  key={page.id}
                  onClick={() => setCurrentPage(index)}
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                    currentPage === index
                      ? "ring-4 ring-gold-500 scale-105 shadow-lg"
                      : "opacity-70 hover:opacity-100 hover:scale-102"
                  }`}
                >
                  <img
                    src={page.image}
                    alt={`Página ${page.id}`}
                    className="w-24 h-16 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className={`absolute inset-0 flex items-center justify-center text-white font-bold text-sm ${
                      currentPage === index
                        ? "bg-chocolate-700/50"
                        : "bg-black/30 hover:bg-black/20"
                    }`}
                  >
                    {page.id}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-chocolate-600 mb-4">
              Clique nas setas ou miniaturas para navegar pelo catálogo. 
              Use o botão de zoom para ver os detalhes.
            </p>
            <Button 
              variant="gold" 
              size="lg"
              onClick={() => openZoom(catalogPages[currentPage].image)}
              className="gap-2"
            >
              <ZoomIn className="w-5 h-5" />
              Ver em Tela Cheia
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && zoomedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all"
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Navigation in Zoom Mode */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPage(); setZoomedImage(catalogPages[(currentPage - 1 + catalogPages.length) % catalogPages.length].image); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextPage(); setZoomedImage(catalogPages[(currentPage + 1) % catalogPages.length].image); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all"
            aria-label="Próxima página"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <img
            src={zoomedImage}
            alt="Catálogo ampliado"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
            loading="eager"
            decoding="async"
          />
          
          {/* Page indicator in zoom mode */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 text-white px-6 py-2 rounded-full">
            Página {currentPage + 1} de {catalogPages.length}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default CatalogoSection;
