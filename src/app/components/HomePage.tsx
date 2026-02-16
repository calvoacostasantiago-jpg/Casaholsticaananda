import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from 'figma:asset/be3b38b6a14b010a2707c08a3984632410545a20.png';
import GallerySection from './GallerySection';
import LocationSection from './LocationSection';
import DecorativeElements from './DecorativeElements';

interface Module {
  id: string;
  title: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

interface HomePageProps {
  onModuleClick: (moduleId: string) => void;
}

export default function HomePage({ onModuleClick }: HomePageProps) {
  const modules: Module[] = [
    {
      id: 'terapia',
      title: 'Terapia Holística',
      description: 'Sesiones personalizadas de sanación integral para equilibrar cuerpo, mente y espíritu.',
      image: 'https://images.unsplash.com/photo-1740748776786-74365e440be4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpc3RpYyUyMHRoZXJhcHklMjBtYXNzYWdlfGVufDF8fHx8MTc3MDk0MzcwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      whatsappMessage: 'Hola, quiero información sobre Terapia Holística en Casa Holística Ananda.'
    },
    {
      id: 'escuela-espiritual',
      title: 'Escuela Espiritual',
      description: 'Entra Al Mundo - Aprende radiónica, radiestesia y sanación holística con nuestros módulos transformadores.',
      image: 'https://images.unsplash.com/photo-1760691313751-98262affa4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBoZWFsaW5nJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NzA5ODk5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      whatsappMessage: 'Hola, quiero saber más sobre la Escuela Espiritual de Casa Holística Ananda.'
    },
    {
      id: 'constelaciones',
      title: 'Constelaciones Familiares',
      description: 'Sana patrones transgeneracionales y encuentra tu lugar en el sistema familiar.',
      image: 'https://images.unsplash.com/photo-1674671261547-fa4a80a52a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjb25zdGVsbGF0aW9uJTIwdGhlcmFweXxlbnwxfHx8fDE3NzA5OTM2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      whatsappMessage: 'Hola, quiero información sobre Constelaciones Familiares en Casa Holística Ananda.'
    },
    {
      id: 'hipnosis',
      title: 'Hipnosis',
      description: 'Accede a tu subconsciente para transformar creencias limitantes y alcanzar tus objetivos.',
      image: 'https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXBub3NpcyUyMG1lZGl0YXRpb24lMjB0aGVyYXB5fGVufDF8fHx8MTc3MDk5MzY5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      whatsappMessage: 'Hola, quiero información sobre Hipnosis en Casa Holística Ananda.'
    },
    {
      id: 'astrologia',
      title: 'Astrología',
      description: 'Descubre tu carta natal y comprende los ciclos cósmicos que influyen en tu vida.',
      image: 'https://images.unsplash.com/photo-1614089254151-676cc373b01e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb2xvZ3klMjB6b2RpYWMlMjBzdGFyc3xlbnwxfHx8fDE3NzA5NDQzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      whatsappMessage: 'Hola, quiero información sobre Astrología en Casa Holística Ananda.'
    },
    {
      id: 'ayurveda',
      title: 'Medicina Ayurveda',
      description: 'Ciencia de la vida con más de 5.000 años de antigüedad para equilibrar tu dosha.',
      image: 'https://images.unsplash.com/photo-1759141936083-d10203b4d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMGhlcmJzJTIwc3BpY2VzfGVufDF8fHx8MTc3MDk5MTIxNXww&ixlib=rb-4.1.0&q=80&w=1080',
      whatsappMessage: 'Hola, quiero información sobre Medicina Ayurveda en Casa Holística Ananda.'
    },
    {
      id: 'terapia-fisica',
      title: 'Terapia Física',
      description: 'Tratamientos corporales para aliviar tensiones, dolores y recuperar el bienestar físico.',
      image: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzA5OTM2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      whatsappMessage: 'Hola, quiero información sobre Terapia Física en Casa Holística Ananda.'
    },
    {
      id: 'barras-access',
      title: 'Barras de Access',
      description: 'Liberá tu mente del estrés, ansiedad y pensamientos repetitivos con esta terapia innovadora.',
      image: 'https://images.unsplash.com/photo-1591630060069-7cb1f16261b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsaW5nJTIwaGFuZHMlMjBlbmVyZ3l8ZW58MXx8fHwxNzcwOTkzNjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      whatsappMessage: 'Hola, quiero agendar una sesión de Barras de Access con Lorena Echeverry.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f3f0] via-[#fef7f3] to-[#f0e8f5] relative overflow-hidden">
      {/* Decorative background elements */}
      <DecorativeElements />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header 
          className="py-6 px-4 sm:px-6 md:px-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <motion.div
              className="relative"
              animate={{ 
                filter: [
                  'drop-shadow(0 0 10px rgba(212, 102, 159, 0.3))',
                  'drop-shadow(0 0 20px rgba(135, 196, 212, 0.5))',
                  'drop-shadow(0 0 10px rgba(212, 102, 159, 0.3))'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={logo} 
                alt="Casa Holística Ananda" 
                className="w-24 h-24 md:w-32 md:h-32 mb-3"
              />
            </motion.div>
            <h1 
              className="text-2xl md:text-4xl text-[#5a3d7d] text-center"
              style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
            >
              Casa Holística Ananda
            </h1>
            <p 
              className="text-base md:text-lg text-[#5a3d7d]/70 text-center mt-1"
              style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300 }}
            >
              Angélica Montes · Terapeuta
            </p>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 py-8 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 
                className="text-xl md:text-2xl text-[#5a3d7d] mb-3"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
              >
                Explora Nuestros Servicios
              </h2>
              <p 
                className="text-sm md:text-base text-[#5a3d7d]/80 max-w-2xl mx-auto"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Descubre un camino hacia el bienestar integral a través de nuestras áreas especializadas
              </p>
            </motion.div>

            {/* Modules Grid - 4 columnas en desktop, 2 en tablet, 1 en móvil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#d4669f]/20 hover:border-[#d4669f]/50"
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#5a3d7d]/60 z-10" />
                    <ImageWithFallback
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 
                      className="text-lg md:text-xl text-[#5a3d7d] mb-2 line-clamp-1"
                      style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
                    >
                      {module.title}
                    </h3>
                    <p 
                      className="text-sm text-[#5a3d7d]/80 mb-4 leading-relaxed line-clamp-2"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {module.description}
                    </p>

                    {/* Button */}
                    <button
                      onClick={() => onModuleClick(module.id)}
                      className="w-full py-2 px-4 bg-gradient-to-r from-[#d4669f] to-[#87c4d4] text-white rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,102,159,0.5)] flex items-center justify-center gap-2 group/btn text-xs"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                    >
                      Ver más
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        {/* Gallery Section */}
        <GallerySection />

        {/* Location Section */}
        <LocationSection />

        {/* Footer */}
        <footer className="py-4 px-4 text-center">
          <p 
            className="text-[#5a3d7d]/60 text-xs md:text-sm"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            © 2026 Casa Holística Ananda · Todos los derechos reservados
          </p>
        </footer>
      </div>
    </div>
  );
}