import { MessageCircle } from 'lucide-react';
import HeroSection from './HeroSection';
import ModulesSection from './ModulesSection';
import ContactForm from './ContactForm';
import AboutSection from './AboutSection';
import Footer from './Footer';

export default function EscuelaEspiritualContent() {
  const handleWhatsApp = () => {
    const message = 'Hola, quiero saber más sobre la Escuela Espiritual de Casa Holística Ananda.';
    window.open(`https://wa.me/573226639527?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleContact = () => {
    window.open('https://wa.me/573226639527?text=Hola,%20me%20interesa%20información%20sobre%20los%20cursos%20de%20Radiónica%20y%20Radiestesia', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#2e0d4b] relative">
      {/* Header personalizado para modal */}
      <header className="relative py-4 md:py-6 bg-gradient-to-b from-[#2e0d4b] via-[#2e0d4b]/95 to-transparent backdrop-blur-sm border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          <h1 
            className="text-2xl md:text-3xl text-[#d4af37]"
            style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
          >
            Entra al Mundo
          </h1>
          <button
            onClick={handleWhatsApp}
            className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] text-sm md:text-base flex items-center gap-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>
        </div>
      </header>

      {/* Contenido de la Escuela Espiritual */}
      <main>
        <HeroSection />
        <ModulesSection />
        <ContactForm />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
