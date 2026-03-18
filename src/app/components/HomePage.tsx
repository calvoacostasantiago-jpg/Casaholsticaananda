import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import GallerySection from './GallerySection';
import LocationSection from './LocationSection';
import DecorativeElements from './DecorativeElements';
import { Module } from '../types';
import ModuleDetail from './ModuleDetail';
import EscuelaEspiritualContent from './EscuelaEspiritualContent';
import ConstelacionesFamiliaresDetail from './ConstelacionesFamiliaresDetail';
import HipnosisDetail from './HipnosisDetail';
import AstrologiaDetail from './AstrologiaDetail';
import TerapiaFisicaDetail from './TerapiaFisicaDetail';
import BarrasAccessDetail from './BarrasAccessDetail';
import MEDescuentoDetail from './MEDescuentoDetail';
import Footer from './Footer';
import { openWhatsApp, WHATSAPP_DEFAULT_MESSAGE } from '../config/contact';

const DEFAULT_MODULES: Module[] = [
  {
    id: 'terapia',
    title: 'Terapia Radiónica y Radiestesia',
    description: 'Sesiones personalizadas con enfoque radiónico y radiestesia para equilibrar cuerpo, mente y espíritu.',
    image: '/assets/Find Clear Answers_ Crystal Pendulum for Energy Work.png',
    whatsappMessage: 'Hola, quiero información sobre Terapia Radiónica y Radiestesia en Casa Holística Ananda.'
  },
  {
    id: 'escuela-espiritual',
    title: 'Escuela Radiónica y Radiestesia',
    description: 'Entra al mundo de la radiónica, radiestesia y sanación holística con nuestros módulos transformadores.',
    image: '/assets/escuelaradiostesia.jpeg',
    whatsappMessage: 'Hola, quiero saber más sobre la Escuela Espiritual de Casa Holística Ananda.'
  },
  {
    id: 'constelaciones',
    title: 'Constelaciones Familiares',
    description: 'Sana patrones transgeneracionales y encuentra tu lugar en el sistema familiar.',
    image: '/assets/descarga.png',
    whatsappMessage: 'Hola, quiero agendar una sesión de Constelaciones Familiares con Anita Castañeda en Casa Holística Ananda.',
    whatsappNumber: '573192888944'
  },
  {
    id: 'hipnosis',
    title: 'Hipnosis',
    description: 'Accede a tu subconsciente para transformar creencias limitantes y alcanzar tus objetivos.',
    image: '/assets/Janeth.png',
    whatsappMessage: 'Hola, me interesa agendar una sesión de hipnosis clínica.',
    whatsappNumber: '573117931032'
  },
  {
    id: 'astrologia',
    title: 'Medicina Cuántica',
    description: 'Sesiones de Medicina Cuántica y Astrología integradas para equilibrar tu energía y claridad de vida.',
    image: '/assets/donhector.PNG',
    whatsappMessage: 'Hola Maestro Héctor, quiero reservar una sesión de Medicina Cuántica Espiritual / Astrología. ¿Podemos agendar? Mi nombre es:',
    whatsappNumber: '573002353499'
  },
  {
    id: 'ayurveda',
    title: 'Medicina Ayurveda',
    description: 'Ciencia de la vida con más de 5.000 años de antigüedad para equilibrar tu dosha.',
    image: '/assets/yubita.png',
    whatsappMessage: 'Hola, estoy interesado en agendar una cita de Ayurveda con el Dr. Héctor Manuel Uribe Neira.',
    whatsappNumber: '573246523951'
  },
  {
    id: 'terapia-fisica',
    title: 'Terapia Física',
    description: 'Tratamientos corporales para aliviar tensiones, dolores y recuperar el bienestar físico.',
    image: '/assets/quiropraxialogo.PNG',
    whatsappMessage: 'Hola, quiero información sobre Terapia Física en Casa Holística Ananda.',
    whatsappNumber: '573226639527'
  },
  {
    id: 'barras-access',
    title: 'Barras de Access',
    description: 'Liberá tu mente del estrés, ansiedad y pensamientos repetitivos con esta terapia innovadora.',
    image: '/assets/logoacces.PNG',
    whatsappMessage: 'Hola, quiero agendar una sesión de Barras de Access con Lorena Echeverry.'
  },
  {
    id: 'medescuento',
    title: 'MEDescuento',
    description: 'Soluciones integrales en salud y bienestar con planes exequiales y complementarios.',
    image: '/assets/meddescuento.jpg',
    whatsappMessage: 'Hola, quiero información sobre los beneficios y descuentos disponibles.'
  }
];

export default function HomePage() {
  const [modules] = useState<Module[]>(DEFAULT_MODULES);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const handleCardClick = (module: Module) => {
    setSelectedModule(module);
  };

  const handleCloseModule = () => setSelectedModule(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f3f0] via-[#fef7f3] to-[#f0e8f5] relative overflow-hidden">
      <DecorativeElements />

      <div className="relative z-10 min-h-screen flex flex-col">
        <a
          href="#modules"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:px-3 focus:py-2 focus:bg-white focus:text-[#5a3d7d] focus:rounded-md focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
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
                src={"/assets/be3b38b6a14b010a2707c08a3984632410545a20.png"} 
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
              Angélica Montes · Directora
            </p>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => openWhatsApp(WHATSAPP_DEFAULT_MESSAGE)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full uppercase tracking-wide transition-all duration-300 hover:bg-[#1ebe5c] hover:shadow-[0_0_20px_rgba(37,211,102,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1ebe5c] focus-visible:ring-offset-2 focus-visible:ring-offset-white text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                Agenda por WhatsApp
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.header>

        <main className="flex-1 py-8 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-center"
            >
              <p
                className="text-sm md:text-base text-[#5a3d7d]/80 max-w-3xl mx-auto"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Casa Holística Ananda es un espacio de bienestar integral donde unimos terapias energéticas, trabajo corporal
                y formación espiritual para acompañarte a equilibrar cuerpo, mente y espíritu.
              </p>
            </motion.div>

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

            <div id="modules" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {modules.map((module, index) => {
                const hasImage = module.image && module.image.trim().length > 0;

                return (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#d4669f]/20 hover:border-[#d4669f]/50"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      {hasImage ? (
                        <img
                          src={module.image}
                          alt={`Imagen de ${module.title}`}
                          className="absolute inset-0 w-full h-full"
                          style={
                            module.id === 'terapia'
                              ? { objectFit: 'cover', objectPosition: 'center 80%' }
                              : module.id === 'astrologia'
                                ? { objectFit: 'cover', objectPosition: 'center 70%' }
                                : module.id === 'barras-access'
                                  ? { objectFit: 'contain', backgroundColor: '#fff' }
                                : module.id === 'medescuento'
                                  ? { objectFit: 'contain', backgroundColor: '#fff' }
                              : module.id === 'ayurveda'
                                ? { objectFit: 'cover', objectPosition: 'center 60%' }
                                : { objectFit: 'cover' }
                          }
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d4669f]/20 via-[#87c4d4]/18 to-[#5a3d7d]/28" />
                      )}
                      <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.25), transparent 45%)' }} />
                    </div>

                    <div className="p-4 space-y-3">
                      <h3 
                        className="text-lg md:text-xl text-[#5a3d7d] line-clamp-1 whitespace-nowrap"
                        style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
                      >
                        {module.title}
                      </h3>
                      <p 
                        className="text-sm text-[#5a3d7d]/80 leading-relaxed line-clamp-2"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        {module.description}
                      </p>

                      <div className="grid grid-cols-1 gap-2">
                        <button
                          type="button"
                          onClick={() => handleCardClick(module)}
                          className="w-full py-2 px-4 bg-gradient-to-r from-[#d4669f] to-[#87c4d4] text-white rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,102,159,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4669f] focus-visible:ring-offset-2 focus-visible:ring-offset-white flex items-center justify-center gap-2 group/btn text-xs"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                        >
                          Ver más
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        <button
                          type="button"
                          onClick={() => openWhatsApp(module.whatsappMessage, module.whatsappNumber)}
                          className="w-full py-2 px-4 border border-[#25D366]/70 text-[#0f3d1f] rounded-full uppercase tracking-wide transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#0a2a16] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-white flex items-center justify-center gap-2 text-xs bg-white/70"
                          aria-label={`WhatsApp ${module.title}`}
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                        >
                          WhatsApp
                          <MessageCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </main>

        <GallerySection />
        <LocationSection />
        <Footer />
      </div>

      {selectedModule && (
        (() => {
          if (selectedModule.landing) {
            return (
              <ModuleDetail
                moduleId={selectedModule.id}
                module={selectedModule}
                onClose={handleCloseModule}
              />
            );
          }

          switch (selectedModule.id) {
            case 'escuela-espiritual':
              return (
                <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule}>
                  <EscuelaEspiritualContent />
                </ModuleDetail>
              );
            case 'constelaciones':
              return (
                <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule}>
                  <ConstelacionesFamiliaresDetail />
                </ModuleDetail>
              );
            case 'hipnosis':
              return (
                <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule}>
                  <HipnosisDetail />
                </ModuleDetail>
              );
            case 'astrologia':
              return (
                <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule}>
                  <AstrologiaDetail />
                </ModuleDetail>
              );
            case 'terapia-fisica':
              return (
                <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule}>
                  <TerapiaFisicaDetail />
                </ModuleDetail>
              );
            case 'barras-access':
              return (
                <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule}>
                  <BarrasAccessDetail />
                </ModuleDetail>
              );
            case 'medescuento':
              return (
                <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule}>
                  <MEDescuentoDetail />
                </ModuleDetail>
              );
            default:
              return (
                <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule} />
              );
          }
        })()
      )}
    </div>
  );
}