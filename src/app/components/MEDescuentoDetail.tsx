import { motion } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Mail,
  Clock,
  Phone,
  HeartPulse,
  PawPrint,
  ShieldCheck,
  Sparkles,
  HandHeart,
} from "lucide-react";
import { openWhatsApp } from "../config/contact";

const WHATSAPP_MAIN = "573225426408"; // +57 322 5426408
const WHATSAPP_ALT = "573002870540"; // +57 300 2870540
const WHATSAPP_MESSAGE = "Hola, quiero información sobre los planes de MEDescuento.";

const horarios = [
  "Lunes a Viernes",
  "8:00 AM - 11:30 AM",
  "2:00 PM - 4:15 PM",
];

const PLAN_EXEQUIAL = [
  "Cobertura nacional para 8 integrantes con Los Olivos y Jardines de Renacer",
  "Traslado, preparación, cofre y sala de velación 24 horas",
  "Misa (opcional), carroza, bus de acompañantes, inhumación o cremación",
  "Ramo, cintas, trámites legales y acompañamiento integral",
  "Opcionales: repatriación de mascotas, salas VIP, acompañamiento musical",
];

const PLAN_SALUD = [
  "Descuentos hasta 70% con especialistas y red de aliados",
  "Laboratorios VIP, exámenes avanzados y atención a domicilio",
  "Médico general presencial, empresarial, virtual y a domicilio",
  "Salud mental, óptica, odontología y pediatría con tarifas preferentes",
  "Curaciones, terapias físicas y respiratorias; spa y estética",
  "Mascotas incluidas: consulta, estética y atención a domicilio",
];

const BIENESTAR = [
  "Capacitaciones con enfoque coaching (70% práctico / 30% teórico)",
  "Pausas activas físicas y mentales para equipos",
  "Consultorías empresariales y planes de mejora",
  "Eventos corporativos y familiares con logística completa",
  "Guía médica: más de 2.000 prestadores aliados",
];

export default function MEDescuentoDetail() {
  const plansRef = useRef<HTMLDivElement>(null);

  const handleWhatsAppMain = () => openWhatsApp(WHATSAPP_MESSAGE, WHATSAPP_MAIN);
  const handleWhatsAppAlt = () => openWhatsApp(WHATSAPP_MESSAGE, WHATSAPP_ALT);
  const handleScrollToPlans = () => plansRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#fff7fb] via-[#ffeef3] to-[#ffe5ee]">
      <div className="absolute inset-0 opacity-55" style={{ backgroundImage: 'radial-gradient(circle at 18% 22%, rgba(255,190,210,0.28), transparent 30%), radial-gradient(circle at 82% 12%, rgba(255,210,226,0.24), transparent 32%), radial-gradient(circle at 60% 72%, rgba(255,223,200,0.26), transparent 40%)' }} />

      <motion.div
        className="absolute left-6 top-10 text-[#d65780]/80"
        initial={{ scale: 0.9, opacity: 0.4 }}
        animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.32, 0.58, 0.32] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <HeartPulse className="w-12 h-12" />
      </motion.div>

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`paw-${i}`}
          className="absolute text-[#f3a8c4]/32"
          style={{ left: `${68 + i * 6}%`, top: `${64 + (i % 2) * 7}%` }}
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ y: [-6, 6, -6], opacity: [0.16, 0.42, 0.16] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
        >
          <PawPrint className="w-6 h-6" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-7 lg:px-12 py-12 md:py-16 space-y-10">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/92 backdrop-blur-xl border border-white/70 rounded-3xl shadow-xl p-6 sm:p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe7ef] text-[#b33a65] text-sm font-semibold" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
                MEDescuento · Cercanía y confianza
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#1f2d3d] leading-tight" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                Planes de salud y bienestar pensados para tu familia y los abuelos
              </h1>
              <p className="text-base md:text-lg text-[#324a63] max-w-3xl" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
                Beneficios claros en salud, acompañamiento exequial y bienestar integral. Atención amable y sencilla para que agendar sea fácil para todos.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleWhatsAppMain}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#e86f9d] text-white shadow-lg hover:shadow-xl w-full sm:w-auto"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar por WhatsApp
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => window.open('https://www.medescuento.com/', '_blank')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#1f2d3d] border border-[#1f2d3d]/15 shadow-md hover:shadow-lg w-full sm:w-auto"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  Visitar sitio
                </motion.button>
              </div>

            </div>

            <div className="space-y-5 text-[#1f2d3d]" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              <div className="p-6 rounded-2xl bg-white/96 border border-white/70 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#324a63]">
                  <Mail className="w-4 h-4" /> medescuentosas@gmail.com
                </div>
                <div className="flex items-center gap-2 text-sm text-[#324a63]">
                  <Phone className="w-4 h-4" /> +57 322 5426408 · +57 300 2870540
                </div>
                <div className="flex items-center gap-2 text-sm text-[#324a63]">
                  <Clock className="w-4 h-4" /> {horarios.join(' · ')}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleWhatsAppMain}
                    className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#e86f9d] text-white shadow"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp 322 5426408
                  </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleWhatsAppAlt}
                      className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-[#b33a65] border border-[#b33a65]/25"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp 300 2870540
                    </motion.button>
                </div>
              </div>
                <div className="p-5 rounded-2xl bg-[#f8d7e5] text-[#b33a65] shadow-lg space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4" /> Beneficios claros y acompañamiento cercano para tus seres queridos.
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://www.instagram.com/medescuentosas/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-[#b33a65] text-sm font-semibold shadow"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Instagram
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://www.facebook.com/medescuentoSas?rdid=Elflz0dDhelz6bFG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FbGisz22z%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio"
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-[#b33a65] text-sm font-semibold shadow"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Facebook
                    </motion.a>
                  </div>
                </div>
            </div>
          </div>
        </motion.section>

        {/* Video central con corazones */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="bg-white/94 backdrop-blur-xl border border-white/70 rounded-3xl shadow-xl p-6 sm:p-8 md:p-10"
        >
          <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-8 items-center">
            <div className="relative mx-auto md:mx-0 w-full max-w-[230px] sm:max-w-[260px]">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#e86f9d]/18 via-[#f5a8c2]/18 to-transparent blur" />
              <div className="relative rounded-2xl border border-white/80 bg-white/98 shadow-md overflow-hidden">
                <div className="relative w-full">
                  <div className="relative aspect-[9/16] overflow-hidden" style={{ clipPath: 'inset(0 0 14% 0)' }}>
                    <iframe
                      src="https://www.instagram.com/reel/DRkShFPkV9s/embed"
                      title="MEDescuento video"
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[200px] md:min-h-[240px] flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`heart-${i}`}
                  className="absolute text-[#d65780]/70"
                  style={{
                    left: `${30 + i * 12}%`,
                    top: `${30 + (i % 2) * 14}%`,
                  }}
                  initial={{ scale: 0.8, opacity: 0.4 }}
                  animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.4, 0.85, 0.4] }}
                  transition={{ duration: 2.4 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                >
                  <HeartPulse className="w-12 h-12" />
                </motion.div>
              ))}
              <div className="text-center space-y-2" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
                <p className="text-lg text-[#1f2d3d] font-semibold">Cuidado con corazón</p>
                <p className="text-sm text-[#324a63]">Te acompañamos con cercanía y calidez en cada paso.</p>
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 12px 30px rgba(232,111,157,0.3)" }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleScrollToPlans}
                  className="mt-3 inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-[#f7b7cc] via-[#e86f9d] to-[#d65780] text-white font-semibold shadow-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Conoce nuestros servicios
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Servicios principales */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          ref={plansRef}
          className="grid lg:grid-cols-3 gap-5"
        >
          <div className="p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-lg border border-white/70 shadow-lg space-y-3" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
            <div className="flex items-center gap-2 text-[#1f2d3d] font-semibold">
              <ShieldCheck className="w-5 h-5 text-[#e86f9d]" />
              Plan Exequial
            </div>
            <ul className="space-y-2 text-[#324a63] text-sm">
              {PLAN_EXEQUIAL.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#e86f9d]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-lg border border-white/70 shadow-lg space-y-3" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
            <div className="flex items-center gap-2 text-[#1f2d3d] font-semibold">
              <HeartPulse className="w-5 h-5 text-[#d65780]" />
              Plan Complementario de Salud
            </div>
            <ul className="space-y-2 text-[#324a63] text-sm">
              {PLAN_SALUD.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#d65780]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-lg border border-white/70 shadow-lg space-y-3" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
            <div className="flex items-center gap-2 text-[#1f2d3d] font-semibold">
              <HandHeart className="w-5 h-5 text-[#f19bb7]" />
              Bienestar y Empresa
            </div>
            <ul className="space-y-2 text-[#324a63] text-sm">
              {BIENESTAR.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#f19bb7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* CTA final */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#f7b7cc] via-[#e86f9d] to-[#d65780] text-white shadow-2xl border border-white/10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
            <div className="space-y-2 text-center lg:text-left">
              <p className="text-xl font-semibold">¿Interesado en nuestros servicios?</p>
              <p className="text-white/85 text-sm md:text-base">Conversemos por WhatsApp o correo y activa tus beneficios hoy.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleWhatsAppMain}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#1f2d3d] font-semibold shadow-lg w-full sm:w-auto"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <MessageCircle className="w-5 h-5" /> Enviar WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open('mailto:medescuentosas@gmail.com')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/70 text-white font-semibold shadow-lg w-full sm:w-auto"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <Mail className="w-5 h-5" /> Enviar correo
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>

      <button
        type="button"
        onClick={handleWhatsAppMain}
        className="fixed right-4 bottom-4 z-30 w-14 h-14 rounded-full bg-[#e86f9d] text-white shadow-2xl flex items-center justify-center hover:scale-105 transition"
        aria-label="Agendar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
