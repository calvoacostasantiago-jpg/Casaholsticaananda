


import { motion } from "framer-motion";
import { Heart, Star, ChevronDown, Mail, Instagram } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const HYPNOSIS_IMAGE = '/assets/hipnosis.png';
const BIO_IMAGE = '/assets/Maria.jpeg';
const CENTER_FLOWER = 'https://cdnjs.cloudflare.com/ajax/libs/openmoji/14.0.0/color/png/1F33C.png';

export default function HipnosisDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const problems = [
    "Ansiedad y estrés",
    "Fobias y miedos",
    "Hábitos no deseados (tabaquismo, alimentación emocional)",
    "Bloqueos emocionales",
    "Baja autoestima",
    "Procesos de duelo",
    "Mejora del rendimiento personal y profesional",
  ];

  const process = [
    { number: 1, title: "Evaluación Inicial", description: "Conversación para entender tus necesidades y objetivos" },
    { number: 2, title: "Inducción Hipnótica", description: "Técnicas de relajación profunda para acceder al subconsciente" },
    { number: 3, title: "Trabajo Terapéutico", description: "Reprogramación de patrones y creencias limitantes" },
    { number: 4, title: "Integración", description: "Regreso consciente y reflexión sobre la experiencia" }
  ];

  const benefitsLeft = [
    "Calma profunda y relajación guiada",
    "Liberación de bloqueos emocionales",
    "Mejora de la calidad del sueño",
    "Aumento de foco y claridad mental",
  ];

  const benefitsRight = [
    "Refuerzo de la autoestima y confianza",
    "Gestión de hábitos y ansiedad",
    "Procesos de duelo con contención",
    "Sesiones presenciales u online",
  ];

  const faqs = [
    { question: "¿La hipnosis clínica es segura?", answer: "Sí, es un proceso seguro y ético, siempre realizado con tu consentimiento y respeto por tu bienestar." },
    { question: "¿Pierdo el control durante la hipnosis?", answer: "No. Mantienes el control y la consciencia en todo momento, guiado por la terapeuta." },
    { question: "¿Cuántas sesiones necesito?", answer: "Depende de tu objetivo y proceso personal. Muchas personas notan cambios desde la primera sesión." },
    { question: "¿Puedo hacer sesiones online?", answer: "Sí, puedes elegir entre sesiones presenciales u online, ambas igual de efectivas." }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/573117931032?text=Hola, me interesa agendar una sesión de hipnosis clínica.", "_blank");
  };

  return (
    <div className="relative overflow-hidden">
      {/* Fondo místico gradiente azul-violeta */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1446] via-[#3e206c] to-[#e0c3fc]" />
      {/* Círculos hipnóticos suaves */}
      <div className="absolute inset-0 opacity-50 mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle at 25% 30%, rgba(255,255,255,0.08), transparent 30%), radial-gradient(circle at 70% 20%, rgba(255,255,255,0.1), transparent 28%), radial-gradient(circle at 60% 70%, rgba(255,255,255,0.08), transparent 32%)' }} />
      {/* Disco hipnótico sutil */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-35"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 55%)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [-20, -100],
              x: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          >
            <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
          </motion.div>
        ))}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
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
            <Star className="w-5 h-5 text-yellow-200 fill-yellow-200" />
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 p-8 md:p-12">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-5xl md:text-6xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Hipnosis Clínica
          </h1>
          <p 
            className="text-2xl text-purple-200 mb-6"
            style={{ fontFamily: 'Cinzel, serif', fontStyle: 'italic' }}
          >
            Transforma tu Mente, Transforma tu Vida
          </p>
          {/* espaciador retirado; info se muestra más abajo */}
        </motion.div>

        {/* Bloque místico con imagen central y beneficios a los lados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative max-w-6xl mx-auto mb-14 rounded-3xl overflow-hidden bg-white/8 backdrop-blur-xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        >
          {/* halo místico */}
          <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.18), transparent 38%), radial-gradient(circle at 30% 70%, rgba(255,109,225,0.15), transparent 45%), radial-gradient(circle at 70% 70%, rgba(98,243,255,0.18), transparent 45%)' }} />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-cyan-300/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-3 gap-6 items-center p-6 md:p-10">
            <div className="space-y-3">
              {benefitsLeft.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/10 border border-white/15 shadow-inner">
                  <Star className="w-5 h-5 text-yellow-200 flex-shrink-0" />
                  <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="relative flex items-center justify-center py-6">
              <div className="absolute inset-0 animate-pulse" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.14), transparent 55%)' }} />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, type: 'spring', damping: 12 }}
                className="relative w-48 h-48 md:w-56 md:h-56"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/40 via-pink-400/30 to-cyan-300/30 blur-2xl" />
                <div className="absolute inset-2 rounded-full bg-white/15 border border-white/30" />
                <img
                  src={CENTER_FLOWER}
                  alt="Símbolo hipnosis"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                  loading="lazy"
                />
              </motion.div>
            </div>

            <div className="space-y-3">
              {benefitsRight.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/10 border border-white/15 shadow-inner">
                  <Heart className="w-5 h-5 text-pink-200 flex-shrink-0" />
                  <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Servicios + Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16 flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
            <ImageWithFallback
              src={HYPNOSIS_IMAGE}
              alt="Logo Janeth"
              className="w-full h-full object-contain rounded-full shadow-2xl border-4 border-white/40 bg-white/5 p-1"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-full animate-ping-slow bg-white/15" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-transparent opacity-60 mix-blend-screen" />
            <motion.div
              aria-hidden
              className="absolute inset-[-18%] rounded-full"
              style={{ background: 'conic-gradient(from 90deg, rgba(255,255,255,0.08), rgba(98,243,255,0.18), rgba(255,109,225,0.16), rgba(255,255,255,0.08))' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <div className="w-full">
            <h3 className="text-2xl text-white mb-4 text-center lg:text-left" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              Servicios que ofrezco
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                >
                  <Heart className="w-5 h-5 text-purple-300" />
                  <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {problem}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bio de la Terapeuta con Glassmorphism */}
        {/* placeholder; bio will be reinserted later */}

        {/* Acerca de la hipnosis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="p-8 bg-white/15 backdrop-blur-lg rounded-3xl border border-white/25 shadow-2xl space-y-4 text-white/90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <p>
              La hipnosis clínica es un estado natural de concentración profunda que permite acceder al subconsciente, fortalecer la confianza y reprogramar patrones limitantes de manera segura y respetuosa.
            </p>
              <p>
                Soy terapeuta especializada en hipnosis clínica, acompañando a personas en procesos de cambio profundo y transformación personal. Mi enfoque se basa en técnicas de hipnosis orientadas a trabajar directamente con el subconsciente para facilitar cambios positivos y duraderos.
              </p>
            <p>
              Cada sesión es personalizada y adaptada a tus necesidades. Modalidad presencial u online, siempre con reserva previa, en un espacio profesional y confidencial.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-white/85">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20">
                <p className="font-semibold text-white">Modalidad</p>
                <p>Presencial y online · Citas con previa reserva</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/20">
                <p className="font-semibold text-white">Contacto</p>
                <p>Email: himomaya18@gmail.com</p>
                <p>WhatsApp: 311 793 1032</p>
                <p>Instagram: @mariaymolina</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="p-8 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl">
            <h3 
              className="text-2xl md:text-3xl text-white mb-6 text-center"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              ¿Qué Problemas Puedo Tratar con Hipnosis?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                >
                  <Heart className="w-5 h-5 text-purple-300 fill-purple-300 flex-shrink-0" />
                  <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {problem}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Proceso de Sesión */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="p-8 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl">
            <h3 
              className="text-2xl md:text-3xl text-white mb-6 text-center"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              ¿Cómo es una Sesión?
            </h3>
            <div className="space-y-4">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-4 p-5 bg-white/10 rounded-2xl backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h4 
                      className="text-xl text-white mb-1"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      {step.title}
                    </h4>
                    <p 
                      className="text-white/80"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Preguntas Frecuentes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="p-8 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl">
            <h3 
              className="text-2xl md:text-3xl text-white mb-6 text-center"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              Preguntas Frecuentes
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                  >
                    <span 
                      className="text-white font-semibold"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-white transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4"
                    >
                      <p 
                        className="text-white/80"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA de Agenda con Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="p-8 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl text-center">
            <h3 
              className="text-2xl md:text-3xl text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              Aquí puedes agendar tu cita personalizada
            </h3>
            <p 
              className="text-white/80 mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Sesiones presenciales y online. Reserva tu cita.
            </p>
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-2xl"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Agenda tu cita
            </motion.button>
          </div>
        </motion.div>

        {/* Botones de Contacto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl mx-auto flex items-center justify-center gap-4"
        >
          {/* WhatsApp circular */}
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </motion.button>
          {/* Instagram circular */}
          <motion.button
            onClick={() => window.open('https://instagram.com/mariaymolina', '_blank')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            <Instagram className="w-7 h-7 text-white" />
          </motion.button>
          {/* Email button tradicional */}
          <motion.button
            onClick={() => window.location.href = 'mailto:himomaya18@gmail.com'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center gap-2 border border-white/30 hover:bg-white/30 transition-all shadow-lg"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
          >
            <Mail className="w-5 h-5" />
            Email
          </motion.button>
        </motion.div>

        {/* Bio de la Terapeuta (al final) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="max-w-4xl mx-auto mt-12 mb-12 p-8 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-lg flex-shrink-0 bg-white/10">
              <ImageWithFallback
                src={BIO_IMAGE}
                alt="Janeth María Hincapié"
                className="w-full h-full object-contain bg-white/5"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 
                className="text-3xl text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
              >
                Janeth María Hincapié
              </h3>
              <p 
                className="text-purple-200 mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                Hipnoterapeuta Certificada
              </p>
              <div className="text-white/85 text-sm leading-relaxed space-y-2 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <p>
                  Soy terapeuta especializada en hipnosis clínica, acompañando a personas en procesos de cambio profundo y transformación personal. Mi enfoque se basa en técnicas de hipnosis, orientadas a trabajar directamente con el subconsciente para facilitar cambios positivos y duraderos.
                </p>
                <p>
                  Trabajo con personas que desean superar ansiedad, fobias, hábitos no deseados, bloqueos emocionales, baja autoestima, procesos de duelo y mejorar su rendimiento personal o profesional.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
