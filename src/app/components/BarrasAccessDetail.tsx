import { motion } from "framer-motion";
import { MessageCircle, Instagram, Facebook, Sparkles, Heart } from "lucide-react";
import { openWhatsApp } from "../config/contact";

const WHATSAPP_NUMBER = "573232819100";
const WHATSAPP_MESSAGE = "Hola, quiero agendar Barras de Access con Yesica Lorena.";

const HERO_IMAGE = "/assets/Lorena.jpeg";
const SECONDARY_IMAGE = "/assets/lorena2.jpeg";

const beneficios = [
  "Reduce el estrés y la ansiedad",
  "Disuelve bloqueos energéticos y emocionales",
  "Regula tu sistema nervioso y relaja profundamente",
];

const productos = [
  "Velas, aceites esenciales y sales terapéuticas",
  "Cuarzos y manillas energéticas",
  "Kits y detalles personalizados para regalar bienestar",
];

const datos = {
  telefono: "+57 323 281 9100",
  whatsapp: WHATSAPP_NUMBER,
  email: "sentir@arelhadeser.com",
  direccion: "CALLE 22 NORTE 11-80 COINCA ARELHA DE SER · Armenia, Quindío",
  ig: "https://www.instagram.com/arelhadeser?igsh=MXUxYXhqeGdqdmsxMw%3D%3D&utm_source=qr",
  fb: "https://www.facebook.com/profile.php?id=61575422564811&_rdc=1&_rdr#",
  web: "https://arelhadeser.com/#/",
};

export default function BarrasAccessDetail() {
  const handleWhatsApp = () => openWhatsApp(WHATSAPP_MESSAGE, WHATSAPP_NUMBER);

  return (
    <div className="relative overflow-hidden">
      {/* fondo pastel rosado con destellos */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fde2f3] via-[#f9d4e8] to-[#f6c7df]" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.55), transparent 45%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 50% 70%, rgba(255,214,234,0.38), transparent 45%)' }} />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.05, 0.8] }}
            transition={{ duration: 9 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 3 }}
            className="absolute w-36 h-36 rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              background: 'radial-gradient(circle, rgba(255,177,214,0.25), transparent 60%)',
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0.6, 0], y: [-10, -60] }}
            transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4 }}
            className="absolute text-[#d45e9b]/50"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-12 md:py-16 space-y-12">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-8 p-8 md:p-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-[#c23f83] text-sm font-semibold" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
                Arelha de Ser · Barras de Access
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#8a1d63]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                Libera bloqueos, eleva tu vibración
              </h1>
              <p className="text-lg text-[#8a3a67] max-w-2xl" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
                Mi misión es ayudarte a liberar bloqueos y elevar tu vibración para que vivas en plenitud. Soy Yesica Lorena Echeverri, psicoterapeuta energética. Te acompaño con Barras de Access y TCC en Arelha de Ser.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#d45e9b] text-white rounded-full shadow-lg hover:shadow-xl transition"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Agenda por WhatsApp
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={datos.web}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#8a1d63] rounded-full shadow-md hover:shadow-lg border border-[#f5c9df] transition"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  Ir al sitio
                </motion.a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fbd5e6] to-[#f8bcd8] blur-3xl rounded-full" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/70 shadow-2xl bg-white/60">
                <img src={HERO_IMAGE} alt="Yesica Lorena" className="w-full h-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Beneficios */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6"
        >
          <div className="p-7 rounded-3xl bg-white/75 backdrop-blur-lg border border-white/70 shadow-lg space-y-4">
            <h2 className="text-2xl text-[#8a1d63]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              Beneficios de las Barras de Access
            </h2>
            <ul className="space-y-3" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[#8a3a67]">
                  <Heart className="w-5 h-5 text-[#d45e9b]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#8a3a67]" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              En Arelha creemos que sentir es la esencia. Te ofrecemos un espacio y herramientas para tu bienestar físico, mental, emocional y espiritual.
            </p>
          </div>
          <div className="p-7 rounded-3xl bg-gradient-to-br from-[#fbe2ef] to-[#f5c9df] border border-white/70 shadow-lg space-y-3 text-[#7a2a57]" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
            <p className="text-lg font-semibold">Mi misión</p>
            <p>Estoy para servirte, guiarte y acompañarte en tu proceso de transformación. Honro tu viaje interior con procesos sagrados y reales.</p>
            <p>Libera tu mente, renueva tu energía, conecta con tu esencia. ¡Descubre el poder de las Barras de Access y deja atrás lo que no te deja avanzar!</p>
          </div>
        </motion.section>

        {/* Productos */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid md:grid-cols-[1fr_1fr] gap-6 items-center"
        >
          <div className="p-7 rounded-3xl bg-white/80 backdrop-blur-lg border border-white/70 shadow-lg space-y-4" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
            <h3 className="text-2xl text-[#8a1d63]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              Nuestra línea de bienestar
            </h3>
            <ul className="space-y-2 text-[#8a3a67]">
              {productos.map((p) => (
                <li key={p} className="flex gap-2 items-start">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#d45e9b]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#9a4b75]">Cada detalle lleva intención y propósito para acompañarte en tu día a día.</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fbe2ef] to-[#f6d4e6] blur-3xl rounded-3xl" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/70 shadow-2xl bg-white/70">
              <img src={SECONDARY_IMAGE} alt="Sesión de Barras de Access" className="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>
        </motion.section>

        {/* Propósito */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-8 rounded-3xl bg-white/75 backdrop-blur-xl border border-white/70 shadow-xl space-y-4 text-center"
          style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}
        >
          <h3 className="text-2xl text-[#8a1d63]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
            Nuestro propósito
          </h3>
          <p className="text-[#8a3a67] max-w-3xl mx-auto">
            Estamos para servirte, guiarte y acompañarte en tu proceso de transformación. Ya sea que apenas inicies o quieras profundizar, en Arelha encontrarás un espacio seguro y lleno de luz.
          </p>
          <p className="text-[#8a3a67] max-w-3xl mx-auto">
            No creemos en soluciones rápidas, sino en procesos sagrados, profundos y reales. Acompañamos desde la luz que habita en la sombra, honrando cada parte del viaje interior.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#d45e9b] text-white rounded-full shadow-lg hover:shadow-xl transition"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            <MessageCircle className="w-5 h-5" />
            Agenda tu cita
          </motion.button>
        </motion.section>

        {/* Contacto */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/70 shadow-xl"
        >
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
            <div className="space-y-2" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              <h4 className="text-2xl text-[#8a1d63]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                Contáctenos
              </h4>
              <p className="text-[#8a3a67]">+57 323 281 9100 · sentir@arelhadeser.com</p>
              <p className="text-[#8a3a67]">CALLE 22 NORTE 11-80 COINCA ARELHA DE SER · Armenia, Quindío</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25D366] text-white shadow-md"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={datos.ig}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f5c9df] text-[#8a1d63] shadow-md"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <Instagram className="w-5 h-5" /> Instagram
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={datos.fb}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#fce3f0] text-[#8a1d63] shadow-md"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <Facebook className="w-5 h-5" /> Facebook
                </motion.a>
              </div>
            </div>
            <div className="space-y-3" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              <p className="text-[#8a3a67]">"Creo que sentir es la esencia y desde ahí nace Arelha de Ser: un espacio para regresar a ti."</p>
              <p className="text-[#8a3a67]">Agenda tu sesión, ¡charlemos! Deja tu mensaje y conversemos de lo que necesitas.</p>
              <a
                href={datos.web}
                target="_blank"
                rel="noreferrer"
                className="text-[#d45e9b] font-semibold hover:underline"
              >
                Visita arelhadeser.com
              </a>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Botón flotante WhatsApp */}
      <button
        type="button"
        onClick={handleWhatsApp}
        className="fixed right-4 bottom-4 z-30 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-105 transition"
        aria-label="Agendar Barras de Access por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
