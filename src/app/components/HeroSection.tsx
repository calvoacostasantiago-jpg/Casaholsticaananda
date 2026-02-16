import { Sparkles, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import heroLogo from 'figma:asset/0f41631905cbdaeb70a79c7517a6468072b7820d.png';

export default function HeroSection() {
  const handleCTA = () => {
    window.open('https://wa.me/573226639527?text=Hola,%20quiero%20inscribirme%20al%20Módulo%201%20de%20Radiónica%20y%20Radiestesia', '_blank');
  };

  const scrollToModules = () => {
    document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 pt-12 md:pt-16 pb-12 overflow-hidden">
      {/* Background mystical elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4a0d7a] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl animate-pulse delay-100" />
      </div>

      {/* Decorative stars */}
      <motion.div 
        className="absolute top-20 left-10 text-[#d4af37]"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
      </motion.div>
      <motion.div 
        className="absolute top-40 right-20 text-[#f0d9a8]"
        animate={{ 
          rotate: -360,
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles className="w-6 h-6 md:w-10 md:h-10" />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 left-16 text-[#d4af37]"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles className="w-7 h-7 md:w-9 md:h-9" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-10">
            <img 
              src={heroLogo} 
              alt="Logo Entra al Mundo" 
              className="w-40 h-40 md:w-56 md:h-56 object-contain mx-auto transform scale-125"
            />
          </div>

          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-[#d4af37] leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900 }}
          >
            Eleva tu Vibración,
            <br />
            <span className="text-[#f0d9a8]">Transforma tu Realidad</span>
          </h1>

          <p 
            className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300 }}
          >
            Descubre el poder de la <span className="text-[#d4af37] font-semibold">Radiónica y la Radiestesia</span> para sanar, 
            manifestar y conectar con tu esencia más elevada
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <motion.button
              onClick={handleCTA}
              className="px-10 py-4 bg-gradient-to-r from-[#d4af37] to-[#f0d9a8] text-[#2e0d4b] rounded-full uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-105 transform"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comienza tu Viaje
            </motion.button>

            <button
              onClick={scrollToModules}
              className="px-10 py-4 border-2 border-[#d4af37] text-[#d4af37] rounded-full uppercase tracking-wider transition-all duration-300 hover:bg-[#d4af37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Ver Módulos
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8 text-[#d4af37]" />
        </motion.div>
      </div>
    </section>
  );
}