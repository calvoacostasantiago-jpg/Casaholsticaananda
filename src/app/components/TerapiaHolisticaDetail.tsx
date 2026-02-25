import { motion } from 'motion/react';
import { MessageCircle, Sparkles, Star, Heart, Zap, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TerapiaHolisticaDetailProps {
  onWhatsApp: () => void;
}

export default function TerapiaHolisticaDetail({ onWhatsApp }: TerapiaHolisticaDetailProps) {
  const services = [
    {
      name: 'Liberación emocional',
      description:
        'Soltar tristeza, miedo o ansiedad liberando bloqueos que afectan tu bienestar. Conecta con tu equilibrio interno y siente más paz, claridad y liviandad.',
      price: '$120.000',
      duration: '60-75 min'
    },
    {
      name: 'Masaje analgésico con bolsas herbales calientes',
      description:
        'Experiencia profundamente relajante, analgésica y curativa con paquetes de tela natural rellenos de hierbas, aromaterapia y cuencos tibetanos.',
      price: '$120.000',
      duration: '70-90 min'
    },
    {
      name: 'Guía energética con Radiónica y Radiestesia (Tabla Radiónica)',
      description:
        'Limpieza y protección de aura, hogar y negocio. Diagnóstico con tablas biométricas y activación de frecuencias para que la vida fluya de forma armoniosa.',
      price: '$140.000',
      duration: '60-90 min',
      featured: true
    }
  ];

  const benefits = [
    'Paz, claridad y liviandad emocional',
    'Liberación de emociones atrapadas y bloqueos',
    'Relajación profunda y alivio analgésico',
    'Ambientes más ligeros en hogar y negocio',
    'Protección y limpieza de aura y espacios',
    'Diagnóstico energético con tablas biométricas',
    'Activación de frecuencias para que la vida fluya',
    'Menos ansiedad y mejor descanso',
    'Mayor foco para decisiones y propósito',
    'Reconexión con tu equilibrio natural',
    'Soporte en crisis emocionales o estancamiento',
    'Acompañamiento respetuoso y personalizado'
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Fondo místico con degradados y elementos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2e0d4b] via-[#4a0d7a] to-[#6b1e9c] opacity-95" />
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos de luz */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-10 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#d4669f] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#87c4d4] rounded-full blur-3xl"
        />

        {/* Estrellas flotantes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -40, -20],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
          </motion.div>
        ))}

        {/* Destellos */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-3 h-3 text-white" />
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 p-8 md:p-12">
        {/* Header con imagen y título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Logo o imagen decorativa */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 mx-auto mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] via-[#f0d9a8] to-[#d4669f] rounded-full blur-xl opacity-50" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#d4af37] to-[#d4669f] flex items-center justify-center border-4 border-white/30">
              <Heart className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <h1 
            className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-[#d4af37] via-white to-[#f0d9a8] bg-clip-text text-transparent"
            style={{ fontFamily: 'Cinzel, serif', fontWeight: 900 }}
          >
            Terapia Holística
          </h1>
          
          <p 
            className="text-2xl md:text-3xl text-[#f0d9a8] mb-6 italic"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}
          >
            Sanación de Cuerpo, Mente y Espíritu
          </p>

          <div className="max-w-3xl mx-auto mb-8">
            <p 
              className="text-lg md:text-xl text-white/90 leading-relaxed"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Liberación emocional, masaje analgésico con bolsas herbales y guía energética con radiónica y radiestesia. 
              Te acompañamos a soltar bloqueos, armonizar tu energía y darle un flujo más ligero a tu vida.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-white/85">Liberación emocional · Masaje analgésico · Radiónica</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-white/85">Atención 1 a 1 · Agenda flexible</span>
          </div>

          {/* Badge decorativo */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37]/30 to-[#d4669f]/30 backdrop-blur-sm border-2 border-[#d4af37] rounded-full"
          >
            <Zap className="w-5 h-5 text-[#d4af37]" />
            <span 
              className="text-white uppercase tracking-wider"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Sesiones Personalizadas
            </span>
          </motion.div>
        </motion.div>

        {/* Imagen y reel en paralelo */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12 grid md:grid-cols-[1.1fr_0.9fr] gap-4 items-stretch"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#d4af37]/30 relative min-h-[280px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1591630060069-7cb1f16261b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpc3RpYyUyMGhlYWxpbmclMjBoYW5kcyUyMGVuZXJneXxlbnwxfHx8fDE3NzEyNTUzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Terapia Holística"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2e0d4b] via-transparent to-transparent" />
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xs aspect-[9/16] rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <iframe
                src="https://www.instagram.com/reel/DRiY686DjSc/embed"
                title="Reel de Instagram Terapia Holística"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                scrolling="no"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Servicios ofrecidos */}
        <div className="max-w-5xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl text-center text-[#d4af37] mb-8"
            style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
          >
            Servicios Disponibles
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative p-6 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 ${
                  service.featured
                    ? 'bg-gradient-to-br from-[#d4af37]/30 to-[#d4669f]/30 border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.4)]'
                    : 'bg-white/10 border-white/20 hover:border-[#d4af37]/50'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#d4af37] to-[#f0d9a8] rounded-full">
                    <p 
                      className="text-xs text-[#2e0d4b] uppercase tracking-wider"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      Recomendada
                    </p>
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <h3 
                    className="text-xl text-white pr-4"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    {service.name}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#d4669f] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <p 
                  className="text-white/80 text-sm mb-4"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p 
                      className="text-2xl text-[#d4af37]"
                      style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
                    >
                      {service.price}
                    </p>
                    <p className="text-xs text-white/75" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.duration || '60-90 min'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparador rápido */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto mb-10"
        >
          <h3 
            className="text-2xl md:text-3xl text-center text-[#d4af37] mb-6"
            style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
          >
            Comparador de terapias
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={`compare-${index}`}
                className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{service.name}</p>
                  <span className="text-sm px-2 py-1 rounded-full bg-white/10 border border-white/20">{service.duration || '60-90 min'}</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {service.description}
                </p>
                <p className="text-[#d4af37] font-bold" style={{ fontFamily: 'Cinzel, serif' }}>{service.price}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Situaciones típicas */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="max-w-4xl mx-auto mb-10 p-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/80" style={{ fontFamily: 'Montserrat, sans-serif' }}>¿Sientes que tu energía está bloqueada?</p>
              <h3 className="text-2xl text-white" style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}>Guía energética con radiónica y radiestesia</h3>
              <p className="text-white/85" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Con tablas biométricas y péndulo leemos bloqueos, emociones atrapadas y niveles de energía. Activamos frecuencias para que la vida fluya de forma más armoniosa.
              </p>
            </div>
            <ul className="grid md:grid-cols-2 gap-2 text-white/85" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <li className="p-3 rounded-xl bg-white/5 border border-white/15">Bloqueos recurrentes en lo personal o laboral</li>
              <li className="p-3 rounded-xl bg-white/5 border border-white/15">Ambientes cargados en casa o negocio</li>
              <li className="p-3 rounded-xl bg-white/5 border border-white/15">Estrés, ansiedad o sensación de estancamiento</li>
              <li className="p-3 rounded-xl bg-white/5 border border-white/15">Crisis emocionales/financieras o búsqueda de propósito</li>
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onWhatsApp}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold shadow-[0_0_24px_rgba(37,211,102,0.4)]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Agenda tu terapia
              </motion.button>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Enfoque de bienestar. No reemplaza atención médica.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Beneficios de la Terapia Holística */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <h3 
            className="text-2xl md:text-3xl text-center text-[#d4af37] mb-8"
            style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
          >
            Beneficios de la Terapia Holística
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-[#d4af37]/50 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <p 
                  className="text-white/90 text-sm"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terapeuta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Header de terapeuta */}
          <div className="text-center mb-8">
            <h3 
              className="text-2xl md:text-3xl text-[#d4af37] mb-2"
              style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
            >
              Tu Terapeuta
            </h3>
          </div>

          {/* Card de Angélica */}
          <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl border-2 border-[#d4af37]/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#d4af37] to-[#d4669f] flex items-center justify-center flex-shrink-0 border-4 border-white/30 overflow-hidden shadow-lg">
                <img
                  src="/assets/cd60ea2b1a39a7831da0d12f7b5870f382116390.png"
                  alt="Angélica Montes Terapeuta Holística"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
              <div className="text-center md:text-left">
                <p 
                  className="text-sm text-[#f0d9a8] uppercase tracking-wider mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                >
                  Terapeuta Certificada
                </p>
                <h4 
                  className="text-3xl text-white mb-2"
                  style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
                >
                  Angélica Montes
                </h4>
                <p 
                  className="text-[#f0d9a8] text-lg mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
                >
                  Especialista en Terapias Holísticas e Integrativas
                </p>
              </div>
            </div>

            {/* Experiencia */}
            <div className="space-y-6">
              <div className="p-5 bg-white/10 rounded-2xl border border-white/20">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                  <div>
                    <h5 
                      className="text-white text-lg mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      Experiencia en Prevención y Control
                    </h5>
                    <p 
                      className="text-white/80 leading-relaxed"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      Acompañamiento respetuoso para liberar bloqueos emocionales y recuperar bienestar integral.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white/10 rounded-2xl border border-white/20">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                  <div>
                    <h5 
                      className="text-white text-lg mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      Acompañamiento en Procesos de Final de Vida
                    </h5>
                    <p 
                      className="text-white/80 leading-relaxed"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      Presencia compasiva para sostener procesos emocionales exigentes y traer calma.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white/10 rounded-2xl border border-white/20">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                  <div>
                    <h5 
                      className="text-white text-lg mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      Formación Integral en Terapias Energéticas
                    </h5>
                    <p 
                      className="text-white/80 leading-relaxed"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      Certificada en medicina Sintergética, radiónica y radiestesia para limpiezas y activaciones energéticas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-3xl p-8 border-2 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.3)]">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center"
            >
              <MessageCircle className="w-10 h-10 text-white" />
            </motion.div>

            <h3 
              className="text-2xl md:text-3xl text-white mb-4"
              style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
            >
              ¿Lista para Transformar tu Vida?
            </h3>

            <p 
              className="text-lg text-white/90 mb-6"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Agenda tu cita ahora y comienza tu viaje de sanación holística
            </p>

            <motion.button
              onClick={onWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full text-lg uppercase tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:shadow-[0_0_50px_rgba(37,211,102,0.8)] inline-flex items-center gap-3"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              <MessageCircle className="w-6 h-6" />
              Agenda tu Cita por WhatsApp
            </motion.button>

            <p 
              className="text-white/70 mt-4"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              📲 573002353499
            </p>
            <p 
              className="text-white/60 text-sm"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Enfoque de bienestar y armonización energética. No reemplaza atención médica.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="fixed inset-x-0 bottom-4 px-4 md:hidden z-40">
        <button
          onClick={onWhatsApp}
          className="w-full py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold shadow-[0_0_24px_rgba(37,211,102,0.5)]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Agendar por WhatsApp
        </button>
      </div>
    </div>
  );
}