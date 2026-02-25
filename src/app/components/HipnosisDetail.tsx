


import { motion } from "framer-motion";
import { Heart, Star, ChevronDown, Mail, Instagram } from "lucide-react";
import { useState } from "react";

export default function HipnosisDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const problems = [
    "Ansiedad y estrés", "Fobias y miedos", "Traumas del pasado", "Baja autoestima",
    "Insomnio", "Depresión", "Duelo y pérdida", "Control de peso", "Adicciones",
    "Manejo del dolor", "Bloqueos emocionales", "Mejora del rendimiento"
  ];

  const process = [
    { number: 1, title: "Evaluación Inicial", description: "Conversación para entender tus necesidades y objetivos" },
    { number: 2, title: "Inducción Hipnótica", description: "Técnicas de relajación profunda para acceder al subconsciente" },
    { number: 3, title: "Trabajo Terapéutico", description: "Reprogramación de patrones y creencias limitantes" },
    { number: 4, title: "Integración", description: "Regreso consciente y reflexión sobre la experiencia" }
  ];

  const testimonials = [
    { name: "Camila R.", initials: "CR", text: "La hipnosis con Janeth fue una experiencia transformadora. Me sentí segura y acompañada en todo momento." },
    { name: "Andrés M.", initials: "AM", text: "Superé mi ansiedad y ahora vivo con más tranquilidad. Recomiendo totalmente este proceso." },
    { name: "Laura G.", initials: "LG", text: "El profesionalismo de Janeth me ayudó a sanar bloqueos emocionales de años." }
  ];

  const faqs = [
    { question: "¿La hipnosis clínica es segura?", answer: "Sí, es un proceso seguro y ético, siempre realizado con tu consentimiento y respeto por tu bienestar." },
    { question: "¿Pierdo el control durante la hipnosis?", answer: "No. Mantienes el control y la consciencia en todo momento, guiado por la terapeuta." },
    { question: "¿Cuántas sesiones necesito?", answer: "Depende de tu objetivo y proceso personal. Muchas personas notan cambios desde la primera sesión." },
    { question: "¿Puedo hacer sesiones online?", answer: "Sí, puedes elegir entre sesiones presenciales u online, ambas igual de efectivas." }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/573117931032?text=Hola Janeth, me interesa más información sobre hipnosis clínica en Casa Holística Ananda", "_blank");
  };

  return (
    <div className="relative overflow-hidden">
      {/* Fondo místico gradiente azul-violeta */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1446] via-[#3e206c] to-[#e0c3fc]" />
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
          <p 
            className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Descubre el poder de tu subconsciente para superar limitaciones y alcanzar tus objetivos
          </p>
        </motion.div>

        {/* Bio de la Terapeuta con Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 p-8 bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/40 shadow-lg flex-shrink-0 flex items-center justify-center bg-white">
              <span className="text-black font-bold">imagen</span>
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
              <p 
                className="text-white/90 leading-relaxed mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Terapeuta certificada en hipnosis clínica, con más de 10 años de experiencia acompañando procesos de transformación personal y sanación emocional.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-purple-500/30 backdrop-blur-sm rounded-full text-white text-sm border border-purple-300/30">
                  Hipnosis Clínica
                </span>
                <span className="px-3 py-1 bg-purple-500/30 backdrop-blur-sm rounded-full text-white text-sm border border-purple-300/30">
                  PNL
                </span>
                <span className="px-3 py-1 bg-purple-500/30 backdrop-blur-sm rounded-full text-white text-sm border border-purple-300/30">
                  Terapias Holísticas
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Problemas que aborda */}
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

        {/* Testimonios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <h3 
            className="text-2xl md:text-3xl text-white mb-6 text-center"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Testimonios
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="p-6 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <p 
                    className="text-white font-semibold"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {testimonial.name}
                  </p>
                </div>
                <p 
                  className="text-white/90 italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
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
      </div>
    </div>
  );
}
