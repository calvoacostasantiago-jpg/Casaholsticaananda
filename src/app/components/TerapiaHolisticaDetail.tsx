import { motion } from 'motion/react';
import { MessageCircle, Sparkles, Star, Heart, Zap, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TerapiaHolisticaDetailProps {
  onWhatsApp: () => void;
}

export default function TerapiaHolisticaDetail({ onWhatsApp }: TerapiaHolisticaDetailProps) {
  const services = [
    {
      name: 'Reiki y Sanación Energética',
      description: 'Equilibra tu energía vital y desbloquea canales de sanación',
      price: '$80.000',
    },
    {
      name: 'Lectura de Aura y Chakras',
      description: 'Diagnóstico energético completo de tu campo áurico',
      price: '$70.000',
    },
    {
      name: 'Terapia con Cristales',
      description: 'Sanación con gemas y cristales de alta vibración',
      price: '$90.000',
    },
    {
      name: 'Aromaterapia Terapéutica',
      description: 'Tratamiento holístico con aceites esenciales puros',
      price: '$65.000',
    },
    {
      name: 'Sesión Integral Completa',
      description: 'Combinación de técnicas personalizadas según tus necesidades',
      price: '$120.000',
      featured: true
    }
  ];

  const benefits = [
    'Reducción del estrés y la ansiedad',
    'Equilibrio emocional y mental',
    'Alivio de dolores físicos y contracturas',
    'Mejora de la calidad del sueño',
    'Fortalecimiento del sistema inmunológico',
    'Mayor claridad mental y enfoque',
    'Liberación de bloqueos energéticos',
    'Sanación de traumas emocionales',
    'Aumento de la vitalidad y energía',
    'Conexión profunda con tu ser interior',
    'Armonización de cuerpo, mente y espíritu',
    'Prevención de enfermedades crónicas'
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
              Descubre los beneficios de la Terapia Holística en Casa Holística Ananda. 
              Te acompañamos a sanar cuerpo, mente y espíritu a través de métodos integrativos, 
              armonizando tu energía y devolviendo el bienestar a tu vida.
            </p>
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

        {/* Imagen representativa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#d4af37]/30"
        >
          <div className="relative h-64 md:h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1591630060069-7cb1f16261b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpc3RpYyUyMGhlYWxpbmclMjBoYW5kcyUyMGVuZXJneXxlbnwxfHx8fDE3NzEyNTUzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Terapia Holística"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2e0d4b] via-transparent to-transparent" />
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#d4af37] to-[#d4669f] flex items-center justify-center flex-shrink-0 border-4 border-white/30">
                <User className="w-12 h-12 text-white" />
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
                      5 años acompañando a personas en programas de prevención y manejo de enfermedades crónicas, 
                      promoviendo bienestar y calidad de vida.
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
                      Apoyo humano y profesional a familias y pacientes en el proceso de morir en casa, 
                      brindando contención y serenidad.
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
                      Certificada en medicina Sintergética (Politécnico Grancolombiano), 
                      radiónica y radiestesia (Escuela de Radiestesia diferencial y efectiva).
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
              📲 322 663 9527
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}