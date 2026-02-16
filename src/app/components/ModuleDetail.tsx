import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, DollarSign, User, Calendar } from 'lucide-react';
import TerapiaHolisticaDetail from './TerapiaHolisticaDetail';

interface ModuleDetailProps {
  moduleId: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const moduleInfo = {
  'terapia': {
    title: 'Terapia Holística',
    description: 'Ofrecemos sesiones personalizadas de sanación integral diseñadas para equilibrar cuerpo, mente y espíritu, trabajando en todos los niveles de tu ser.',
    services: [
      'Sesiones de Reiki y sanación energética',
      'Lectura de aura y chakras',
      'Terapia con cristales y gemas',
      'Aromaterapia terapéutica',
      'Equilibrio energético',
      'Consultas personalizadas'
    ],
    whatsappMessage: 'Hola, quiero agendar una cita para Terapia Holística en Casa Holística Ananda.'
  },
  'constelaciones': {
    title: 'Constelaciones Familiares',
    description: 'Una terapia sistémica que ayuda a identificar y sanar patrones transgeneracionales, bloqueios emocionales y dinámicas familiares ocultas.',
    services: [
      'Sesiones individuales de constelaciones',
      'Talleres grupales',
      'Sanación de patrones familiares',
      'Resolución de conflictos ancestrales',
      'Liberación de cargas emocionales heredadas',
      'Encuentro con tu lugar en el sistema'
    ],
    whatsappMessage: 'Hola, quiero información sobre Constelaciones Familiares en Casa Holística Ananda.'
  },
  'hipnosis': {
    title: 'Hipnosis Terapéutica',
    description: 'Accede a tu subconsciente para transformar creencias limitantes, superar miedos y alcanzar tus objetivos personales con esta poderosa herramienta terapéutica.',
    services: [
      'Hipnosis clínica y regresiva',
      'Reprogramación de creencias',
      'Liberación de fobias y miedos',
      'Gestión del estrés y ansiedad',
      'Mejora de hábitos',
      'Desarrollo personal y autoestima'
    ],
    whatsappMessage: 'Hola, quiero información sobre Hipnosis Terapéutica en Casa Holística Ananda.'
  },
  'astrologia': {
    title: 'Astrología',
    description: 'Descubre los ciclos cósmicos que influyen en tu vida a través de tu carta natal, tránsitos planetarios y pronósticos astrológicos personalizados.',
    services: [
      'Lectura de carta natal completa',
      'Análisis de tránsitos planetarios',
      'Sinastría de parejas',
      'Revolución solar',
      'Astrología predictiva',
      'Consultas de orientación'
    ],
    whatsappMessage: 'Hola, quiero agendar una consulta de Astrología en Casa Holística Ananda.'
  },
  'ayurveda': {
    title: 'Medicina Ayurveda',
    subtitle: 'Ciencia de la Vida',
    description: 'Sistema tradicional de medicina originario de la India con más de 5.000 años de antigüedad. "Ayur" significa vida y "Veda" conocimiento.',
    highlight: 'Ayurveda = "Ciencia de la vida"',
    services: [
      'Diagnóstico de dosha (Vata, Pitta, Kapha)',
      'Consultas personalizadas',
      'Planes nutricionales ayurvédicos',
      'Tratamientos con hierbas medicinales',
      'Masajes y terapias corporales',
      'Rutinas de vida según tu constitución'
    ],
    whatsappMessage: 'Hola, quiero una consulta de Medicina Ayurveda en Casa Holística Ananda.'
  },
  'terapia-fisica': {
    title: 'Terapia Física',
    description: 'Tratamientos corporales especializados para aliviar tensiones musculares, dolores crónicos y recuperar el bienestar físico integral.',
    services: [
      'Masajes terapéuticos',
      'Tratamiento de contracturas',
      'Terapia de puntos gatillo',
      'Estiramientos asistidos',
      'Rehabilitación postural',
      'Drenaje linfático'
    ],
    whatsappMessage: 'Hola, quiero agendar una sesión de Terapia Física en Casa Holística Ananda.'
  },
  'barras-access': {
    title: 'Barras de Access',
    description: 'Liberá tu mente del estrés, la ansiedad y los pensamientos repetitivos. Abrí espacio para la claridad, la paz y nuevas posibilidades.',
    therapist: 'Lorena Echeverry',
    pricing: {
      regular: '$150.000',
      promo: '$80.000',
      label: 'Precio feria'
    },
    benefits: [
      'Reducción del estrés y ansiedad',
      'Liberación de pensamientos repetitivos',
      'Mayor claridad mental',
      'Mejora del sueño',
      'Sensación de paz profunda',
      'Apertura a nuevas posibilidades'
    ],
    whatsappMessage: 'Hola, quiero agendar una sesión de Barras de Access con Lorena Echeverry al precio de feria ($80.000).',
    phone: '322 663 9527'
  }
};

export default function ModuleDetail({ moduleId, onClose, children }: ModuleDetailProps) {
  const info = moduleInfo[moduleId as keyof typeof moduleInfo];

  const handleWhatsApp = () => {
    if (info) {
      const phone = (info as any).phone || '573226639527';
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(info.whatsappMessage)}`, '_blank');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-6xl bg-gradient-to-br from-white via-[#fef7f3] to-white rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6 text-[#5a3d7d]" />
          </button>

          {/* Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            {children ? (
              // Escuela Espiritual - contenido completo
              <div>
                {children}
              </div>
            ) : moduleId === 'terapia' ? (
              // Terapia Holística - diseño especial místico
              <TerapiaHolisticaDetail onWhatsApp={handleWhatsApp} />
            ) : info ? (
              // Otras áreas - información detallada
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                  <h2 
                    className="text-3xl md:text-5xl text-[#5a3d7d] mb-4"
                    style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
                  >
                    {info.title}
                  </h2>
                  {(info as any).subtitle && (
                    <p 
                      className="text-xl md:text-2xl text-[#d4669f] mb-3"
                      style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontStyle: 'italic' }}
                    >
                      {(info as any).subtitle}
                    </p>
                  )}
                  <p 
                    className="text-lg md:text-xl text-[#5a3d7d]/80 max-w-3xl mx-auto leading-relaxed"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {info.description}
                  </p>
                  {(info as any).highlight && (
                    <div className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-[#d4669f]/20 to-[#87c4d4]/20 rounded-full border border-[#d4669f]/30">
                      <p 
                        className="text-lg text-[#5a3d7d] font-semibold"
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        {(info as any).highlight}
                      </p>
                    </div>
                  )}
                </div>

                {/* Therapist & Pricing Info (Barras de Access) */}
                {(info as any).therapist && (
                  <div className="max-w-3xl mx-auto mb-8 p-6 bg-gradient-to-r from-[#d4669f]/10 to-[#87c4d4]/10 rounded-2xl border border-[#d4669f]/20">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <User className="w-6 h-6 text-[#d4669f]" />
                        <div>
                          <p className="text-sm text-[#5a3d7d]/70" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            Terapeuta
                          </p>
                          <p className="text-lg text-[#5a3d7d] font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {(info as any).therapist}
                          </p>
                        </div>
                      </div>
                      {(info as any).pricing && (
                        <div className="flex items-center gap-3">
                          <DollarSign className="w-6 h-6 text-[#87c4d4]" />
                          <div>
                            <p className="text-sm text-[#5a3d7d]/70 line-through" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                              Tarifa habitual: {(info as any).pricing.regular}
                            </p>
                            <p className="text-lg text-[#d4669f] font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              {(info as any).pricing.label}: {(info as any).pricing.promo}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Services/Benefits */}
                <div className="max-w-3xl mx-auto mb-12">
                  <h3 
                    className="text-2xl text-[#5a3d7d] mb-6 text-center"
                    style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
                  >
                    {(info as any).benefits ? '¿Qué obtenés?' : 'Incluye:'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {((info as any).benefits || info.services).map((service: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-white/70 rounded-2xl border border-[#d4669f]/20"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d4669f] to-[#87c4d4] mt-2 flex-shrink-0" />
                        <p 
                          className="text-[#5a3d7d]/90"
                          style={{ fontFamily: 'Open Sans, sans-serif' }}
                        >
                          {service}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="max-w-2xl mx-auto text-center">
                  <div className="bg-gradient-to-r from-[#d4669f]/10 to-[#87c4d4]/10 rounded-3xl p-8 border border-[#d4669f]/30">
                    <p 
                      className="text-lg text-[#5a3d7d] mb-6"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {(info as any).pricing ? '¿Querés reservar tu cita?' : '¿Querés saber más o agendar una cita?'}
                    </p>
                    <button
                      onClick={handleWhatsApp}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-105"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      <MessageCircle className="w-6 h-6" />
                      Contactar por WhatsApp
                    </button>
                    {(info as any).phone && (
                      <p 
                        className="text-sm text-[#5a3d7d]/70 mt-4"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        📲 {(info as any).phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}