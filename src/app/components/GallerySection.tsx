import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import exteriorImage from 'figma:asset/20077905e225fc33e5a5e5aca8b5f0d5a376543d.png';
import yogaRoomImage from 'figma:asset/ad7ab85df9fcd504821d5a2d263d12fe4a225d2d.png';
import therapyRoomImage from 'figma:asset/f4214becafc267adde0ef5377cfbc1bf4b05d209.png';
import gardenImage from 'figma:asset/ade65295e44df206a45fb84321755f368d8a953b.png';
import consultorioImage from 'figma:asset/177ee6866d70aad559c8b8e4fbc9c5c493a4fa19.png';
import colorfulRoomImage from 'figma:asset/e38308731caebb9355d48719b570390ce183fcdf.png';

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = [
    {
      src: exteriorImage,
      alt: 'Entrada Casa Holística Ananda',
      title: 'Bienvenido a Casa Ananda',
      description: 'Un espacio acogedor donde comienza tu transformación'
    },
    {
      src: yogaRoomImage,
      alt: 'Salón de yoga y meditación',
      title: 'Salón de Prácticas',
      description: 'Espacio sagrado para yoga, meditación y talleres grupales'
    },
    {
      src: gardenImage,
      alt: 'Jardín terapéutico',
      title: 'Jardín de Sanación',
      description: 'Área exterior para conectar con la naturaleza'
    },
    {
      src: therapyRoomImage,
      alt: 'Sala de terapias holísticas',
      title: 'Sala de Terapias',
      description: 'Ambiente de paz para tus sesiones individuales'
    },
    {
      src: consultorioImage,
      alt: 'Consultorio de sanación',
      title: 'Consultorio Holístico',
      description: 'Espacio íntimo para tratamientos personalizados'
    },
    {
      src: colorfulRoomImage,
      alt: 'Sala de talleres',
      title: 'Sala de Encuentros',
      description: 'Un espacio vibrante para talleres y círculos de sanación'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(timer);
  }, [images.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#d4669f]/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#87c4d4]/10 rounded-full blur-2xl" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl text-[#5a3d7d] mb-4"
            style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
          >
            Conoce Nuestro Espacio
          </h2>
          <p 
            className="text-base md:text-lg text-[#5a3d7d]/80 max-w-2xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Un lugar diseñado con amor para tu bienestar y transformación
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Image Carousel */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#5a3d7d]/5 to-[#d4669f]/5">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                {/* Image */}
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5a3d7d]/90 via-[#5a3d7d]/30 to-transparent" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl mb-3"
                    style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
                  >
                    {images[currentIndex].title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-base md:text-lg opacity-90"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {images[currentIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 z-10 group"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 z-10 group"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-[#d4669f] to-[#87c4d4]' 
                    : 'w-2 bg-[#5a3d7d]/30 hover:bg-[#5a3d7d]/50'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <p 
              className="text-[#5a3d7d]/60 text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
