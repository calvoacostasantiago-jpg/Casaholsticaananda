import React from "react";
import { motion } from "framer-motion";

export default function ConstelacionesFamiliaresDetail() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/573192888944?text=Hola,%20quiero%20agendar%20una%20sesión%20de%20Constelaciones%20Familiares%20con%20Anita%20Castañeda%20en%20Casa%20Holística%20Ananda.",
      "_blank"
    );
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#0d133d] py-10 px-4 relative overflow-hidden">
      {/* Fondo místico animado */}
      <div className="absolute inset-0 z-0">
        {/* Overlay azul místico */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e]/90 via-[#283593]/80 to-[#0d133d]/95 opacity-95" />
        {/* Corazones animados */}
        {[...Array(7)].map((_, i) => (
          <span
            key={i}
            className={`absolute animate-spin-slow`}
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              fontSize: `${18 + Math.random() * 32}px`,
              color: '#e0c3fc',
              opacity: 0.7 + Math.random() * 0.3,
              animationDuration: `${8 + Math.random() * 8}s`,
              filter: 'drop-shadow(0 0 8px #e0c3fc88)'
            }}
          >
            ♥
          </span>
        ))}
        {/* Estrellas animadas */}
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute animate-star-move"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 12}px`,
              color: '#fff',
              opacity: 0.5 + Math.random() * 0.5,
              animationDuration: `${6 + Math.random() * 10}s`,
              filter: 'drop-shadow(0 0 6px #fff8)'
            }}
          >
            ★
          </span>
        ))}
      </div>

            {/* Animaciones personalizadas */}
            <style>{`
              @keyframes spin-slow {
                0% { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.2); }
                100% { transform: rotate(360deg) scale(1); }
              }
              .animate-spin-slow {
                animation: spin-slow linear infinite;
              }
              @keyframes star-move {
                0% { transform: translateY(0) scale(1); opacity: 1; }
                60% { opacity: 0.7; }
                100% { transform: translateY(-60vh) scale(1.2); opacity: 0; }
              }
              .animate-star-move {
                animation: star-move linear infinite;
              }
            `}</style>
      {/* Título y presentación asimétrica y fluida */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-0 md:gap-10 mb-16"
      >
        {/* Imagen grande, flotando a la derecha en desktop, arriba en mobile */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: 'spring', stiffness: 70 }}
          className="order-2 md:order-1 flex-shrink-0 flex justify-center md:justify-end w-full md:w-1/2 -mt-10 md:mt-0"
          style={{ zIndex: 2 }}
        >
          <img
            src="/src/app/components/constelaciones-familiares-fondo.jpg(1).jpeg"
            alt="Constelación familiar abrazo fondo"
            className="rounded-[2.5rem] shadow-2xl w-72 h-72 md:w-[22rem] md:h-[22rem] object-cover border-4 border-[#e0c3fc]/70 bg-white/10 ring-4 ring-[#fff]/30 hover:scale-105 hover:shadow-[0_0_40px_#e0c3fc55] transition-transform duration-500 rotate-2 md:-rotate-3"
            style={{ maxWidth: '100%', height: 'auto', boxShadow: '0 8px 32px 0 #e0c3fc33' }}
          />
        </motion.div>
        {/* Textos a la izquierda, con fondo decorativo y formas orgánicas */}
        <div className="order-1 md:order-2 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left relative">
          {/* Fondo decorativo orgánico */}
          <div className="absolute -top-10 -left-10 md:-top-16 md:-left-16 w-40 h-40 md:w-64 md:h-64 bg-[#e0c3fc]/30 rounded-full blur-3xl z-0" />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative z-10 text-4xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-lg tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.02em' }}
          >
            Constelaciones <span className="block md:inline text-[#e0c3fc]">Familiares</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-lg md:text-2xl text-[#e0c3fc] font-semibold mb-2 tracking-wide"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Acompañamiento sistémico y consciente
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 text-base md:text-lg text-white/85 max-w-2xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Anita Castañeda · Abogada y terapeuta alternativa que integra constelaciones, yoga, meditación, Reiki y radiestesia para acompañar procesos de bienestar integral.
          </motion.p>
        </div>
      </motion.div>

      {/* Secciones con animaciones de entrada */}
      <div className="relative z-10 w-full max-w-3xl space-y-8 mb-10">
        {/* ¿Qué es una terapia...? */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border border-white/30"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#fff] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            ¿Qué es una sesión de Constelación Familiar?
          </h2>
          <p className="text-base md:text-lg text-white/90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Es un espacio para ver el sistema familiar completo, reconocer dinámicas que se repiten y ordenar lo que no está en su lugar. Ayuda a entender por qué ciertos patrones regresan y abre caminos para reconciliarte con tu historia.
          </p>
        </motion.div>
        {/* ¿Qué puedes lograr? */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border border-white/30"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#fff] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            ¿Qué busca una persona en una sesión?
          </h2>
          <p className="text-base md:text-lg text-white/90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Comprender por qué se repiten situaciones: problemas de pareja, conflictos familiares, dificultades económicas, bloqueos emocionales o síntomas de salud. En la sesión se explora si esos retos están ligados a historias o lealtades familiares que se siguen manifestando.
          </p>
        </motion.div>
        {/* ¿Qué puede ayudarte a sanar? */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border border-white/30"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#fff] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Beneficios que puedes sentir
          </h2>
          <ul className="space-y-2 text-white/90 text-base md:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <li><span className="mr-2">✔️</span>Claridad sobre lo que es tuyo y lo que proviene del sistema familiar.</li>
            <li><span className="mr-2">✔️</span>Alivio al soltar cargas y responsabilidades que no te corresponden.</li>
            <li><span className="mr-2">✔️</span>Mejor relación con pareja, familia y vínculos cercanos.</li>
            <li><span className="mr-2">✔️</span>Decisiones con más seguridad y coherencia.</li>
            <li><span className="mr-2">✔️</span>Paz con tu historia, aun si no fue perfecta.</li>
          </ul>
        </motion.div>
      </div>

      {/* Sección Tu terapeuta con collage visual */}
      <div className="relative z-10 w-full max-w-3xl mx-auto mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-[#e0c3fc]/30 flex flex-col md:flex-row items-center md:items-stretch gap-8">
          {/* Collage visual con Anita */}
          <div className="flex-shrink-0 flex flex-col gap-4 w-full md:w-1/2 items-center justify-center">
            <div className="rounded-3xl shadow-2xl overflow-hidden border-2 border-[#e0c3fc]/50 w-60 h-72 bg-white/10">
              <img
                src="/assets/anitaconstelaciones.jpg"
                alt="Anita Castañeda, terapeuta de constelaciones"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 w-full justify-center">
              <img src="/assets/anita campo.jpg" alt="Anita en el campo" className="rounded-2xl shadow-lg w-40 h-32 object-cover border-2 border-[#e0c3fc]/40" />
              <img src="/assets/anita retiro.jpg" alt="Anita en retiro" className="rounded-2xl shadow-lg w-40 h-32 object-cover border-2 border-[#e0c3fc]/40" />
            </div>
            <img src="/assets/anita yoga.jpg" alt="Anita yoga" className="rounded-2xl shadow-lg w-2/3 md:w-60 h-32 object-cover border-2 border-[#e0c3fc]/40 mx-auto" />
            <span className="text-sm text-[#e0c3fc] font-semibold mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Tu terapeuta: Anita</span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#e0c3fc] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Anita Castañeda
            </h3>
            <p className="text-base text-white/90 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Abogada de formación y terapeuta holística por vocación. Con más de diez años de experiencia, integra yoga y meditación (formación en India), Reiki, radiestesia y constelaciones familiares. Su enfoque acompaña procesos de armonización emocional, mental y corporal, para que te conozcas mejor y vivas de forma más consciente y plena.
            </p>
            <ul className="text-[#e0c3fc] text-sm md:text-base font-semibold space-y-1 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>✔️ Constelaciones familiares y enfoque sistémico</li>
              <li>✔️ Yoga y meditación (formación en India)</li>
              <li>✔️ Reiki y radiestesia</li>
              <li>✔️ Acompañamiento en vínculos, duelos y bloqueos emocionales</li>
              <li>✔️ Integración legal-humana para decisiones conscientes</li>
            </ul>
            <p className="text-sm text-white/80" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              “Te acompaño a mirar tu historia con claridad, soltar cargas y tomar tu lugar con paz y seguridad”.
            </p>
          </div>
        </div>
      </div>


      {/* Contacto e Instagram al final */}
      <div className="relative z-20 w-full max-w-2xl mx-auto mb-8 flex flex-col items-center text-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button
            onClick={handleWhatsApp}
            className="px-7 py-2 bg-gradient-to-r from-[#6a3093] to-[#a18cd1] text-white rounded-full text-base font-bold shadow-lg hover:scale-105 transition-all duration-300 border border-white/30"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}
          >
            Contactar a Anita por WhatsApp
          </button>
          <a
            href="https://www.instagram.com/anitaespiritual?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#e0c3fc] to-[#6a3093] text-[#3a2c5e] font-bold rounded-full shadow-lg border border-white/30 hover:scale-105 transition-all duration-300"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="url(#ig-gradient)"/><defs><linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#fbc2eb"/><stop offset="1" stopColor="#a18cd1"/></linearGradient></defs><path d="M16.98 2H7.02C4.25 2 2 4.25 2 7.02v9.96C2 19.75 4.25 22 7.02 22h9.96C19.75 22 22 19.75 22 16.98V7.02C22 4.25 19.75 2 16.98 2zM20 16.98c0 1.66-1.36 3.02-3.02 3.02H7.02C5.36 20 4 18.64 4 16.98V7.02C4 5.36 5.36 4 7.02 4h9.96C18.64 4 20 5.36 20 7.02v9.96z" fill="#fff"/><path d="M12 7.5A4.5 4.5 0 1 0 12 16.5a4.5 4.5 0 0 0 0-9zm0 7.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5-7.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" fill="#fff"/></svg>
            Instagram
          </a>
        </div>
      </div>

      {/* Llamado a la acción final, bien separado y visualmente destacado */}
      <div className="relative z-20 w-full max-w-2xl mx-auto mt-12 mb-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#e0c3fc]/90 via-[#b39ddb]/80 to-[#fff]/80 rounded-3xl shadow-2xl p-10 border border-[#e0c3fc]/30 flex flex-col items-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            ¿Listo para transformar tu historia familiar?
          </h3>
          <p className="text-base md:text-lg text-[#283593] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Agenda tu sesión de Constelaciones Familiares y comienza tu camino de sanación y reconciliación.
          </p>
          <button
            onClick={handleWhatsApp}
            className="px-8 py-3 rounded-full bg-[#e0c3fc] text-[#1a237e] font-bold text-lg shadow-lg hover:bg-[#b39ddb] hover:scale-105 transition-all duration-300 border-2 border-[#fff]"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.04em' }}
          >
            Agendar sesión por WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}
