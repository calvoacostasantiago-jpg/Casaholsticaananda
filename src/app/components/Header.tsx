import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContact = () => {
    window.open('https://wa.me/573226639527?text=Hola,%20me%20interesa%20información%20sobre%20los%20cursos%20de%20Radiónica%20y%20Radiestesia', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 md:py-4' : 'py-4 md:py-6'
      }`}
    >
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#2e0d4b]/98 backdrop-blur-md shadow-lg shadow-[#d4af37]/10' 
            : 'bg-gradient-to-b from-[#2e0d4b] via-[#2e0d4b]/95 to-transparent backdrop-blur-sm'
        }`}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 
            className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-[#d4af37] uppercase tracking-wider"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            ENTRA AL MUNDO
          </h1>
          <p 
            className="text-[10px] sm:text-xs md:text-sm text-[#f0d9a8] uppercase tracking-wide mt-0.5 md:mt-1"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
          >
            Radiónica y Radiestesia Vibra Alto
          </p>
        </div>

        <button
          onClick={handleContact}
          className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-[#d4af37] to-[#f0d9a8] text-[#2e0d4b] rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-105 transform"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
        >
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-xs sm:text-sm md:text-base uppercase">Contacto</span>
        </button>
      </div>
    </header>
  );
}