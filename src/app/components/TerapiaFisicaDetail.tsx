import { motion } from "framer-motion";
import { MessageCircle, Instagram, Sparkles, CheckCircle2, HandHeart } from "lucide-react";
import { openWhatsApp } from '../config/contact';

const WHATSAPP_NUMBER = '573226639527';
const WHATSAPP_MESSAGE = 'Hola, quiero agendar una cita de Terapia Física y Quiropraxia.';

const metodologia = [
  {
    title: 'Escuchar',
    text: 'Un espacio diagnóstico para entender la historia del cuerpo, sus hábitos y el origen emocional/físico de la tensión.'
  },
  {
    title: 'Equilibrar',
    text: 'Ajustes quiroprácticos precisos para restaurar la alineación de la columna y las articulaciones.'
  },
  {
    title: 'Emancipar',
    text: 'Liberación muscular profunda para que el cuerpo suelte memorias de dolor y recupere su movilidad natural.'
  }
];

const protocolo = [
  'Valoración Postural (Análisis de la marcha, hábitos y zonas de bloqueo).',
  'Ajuste Quiropráctico (Maniobras específicas para liberar el sistema nervioso).',
  'Termoterapia con Ventosas (Descontracturación profunda con calor y aceites).',
  'Fotobiomodulación / Luz Roja (Desinflamar tejidos y estimular circulación celular).',
  'Integración Sensorial (Masaje vibracional y estimulación craneal).'
];

const diferenciales = [
  'Visión Humana: Atención centrada en la persona, no solo en el síntoma.',
  'Sinergia Tecnológica: Quiropraxia tradicional + luz roja + ventosas.',
  'Resultados Tangibles: Mejora inmediata en movilidad y reducción de estrés.'
];

const galeria = [
  { src: '/assets/masajee.PNG', alt: 'Sesión de masaje terapéutico' },
  { src: '/assets/masajexd.PNG', alt: 'Liberación muscular con ajuste' },
  { src: '/assets/pacientequi.PNG', alt: 'Trabajo de alineación vertebral' }
];

export default function TerapiaFisicaDetail() {
  const handleWhatsApp = () => openWhatsApp(WHATSAPP_MESSAGE, WHATSAPP_NUMBER);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#f3f7fb] via-[#e9f1fa] to-[#dbe7f5]">
      <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(115, 165, 215, 0.18), transparent 32%), radial-gradient(circle at 80% 20%, rgba(98, 140, 196, 0.16), transparent 35%), radial-gradient(circle at 60% 70%, rgba(63, 119, 174, 0.14), transparent 42%)' }} />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: [0, 0.35, 0], y: [-8, -90] }}
            transition={{ duration: 7 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
            className="absolute text-[#4c7cb1]/30"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`calm-${i}`}
            initial={{ opacity: 0.12, scale: 0.9 }}
            animate={{ opacity: [0.12, 0.22, 0.12], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 12 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4 }}
            className="absolute w-40 h-40 sm:w-52 sm:h-52 rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              background: 'radial-gradient(circle, rgba(66, 130, 188, 0.28) 0%, rgba(66, 130, 188, 0) 60%)'
            }}
          />
        ))}
      </div>
      <motion.div
        aria-hidden
        className="absolute inset-x-[-20%] top-10 h-64 pointer-events-none"
        style={{ background: 'linear-gradient(120deg, rgba(45, 111, 183, 0.08), rgba(255,255,255,0.2), rgba(63, 119, 174, 0.08))', filter: 'blur(32px)' }}
        initial={{ x: -40, opacity: 0.55 }}
        animate={{ x: [ -40, 40, -40 ] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/85 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl p-8 md:p-10"
        >
          <div className="flex flex-col gap-6 md:gap-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d7e7f7] text-[#2f4f73] text-sm font-semibold" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
                Armonía Vertebral · Cuidado Integral
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#1f3550]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                  Armonía Vertebral - Alineación Corporal & Quiropraxia Integral Inka
                </h1>
                <p className="text-lg md:text-xl text-[#324a68] max-w-3xl" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
                  Recupera la confianza en tu cuerpo a través del equilibrio.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2d6fb7] text-white rounded-full shadow-lg hover:shadow-xl transition"
                  style={{ fontFamily: 'Lato, Open Sans, sans-serif', fontWeight: 700 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar Cita
                </motion.button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/80 shadow-lg bg-[#e7f0f9]">
                <img src="/assets/quiropraxiafoto.PNG" alt="Quiropráctico" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c4f]/45 via-[#0f2c4f]/15 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 p-4 rounded-xl bg-white/85 backdrop-blur-md shadow-md" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
                  <div className="text-sm uppercase tracking-[0.18em] text-[#2d6fb7]">Cuerpo en Balance</div>
                  <p className="text-base md:text-lg text-[#1f3550] font-semibold">Terapia Física y Quiropraxia con enfoque humano y tecnología de bienestar</p>
                  <div className="text-sm text-[#324a68]">Sesiones personalizadas · 40-60 min</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Perfil profesional */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-6"
        >
          <div className="p-7 rounded-3xl bg-white/88 backdrop-blur-lg border border-white/70 shadow-lg space-y-4">
            <h2 className="text-2xl text-[#2e3c32]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              Sobre el Especialista
            </h2>
            <div className="flex items-center gap-4">
              <img src="/assets/quiropraxiafoto.PNG" alt="Luis Carlos Rivera" className="w-20 h-20 rounded-2xl object-cover shadow-md border border-[#dbe7f5]" loading="lazy" />
              <div className="text-[#1f3550]" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
                <p className="font-semibold text-lg">Luis Carlos Rivera</p>
                <p className="text-sm text-[#3f5573]">Quiropráctico · Alineación Corporal</p>
              </div>
            </div>
            <div className="text-[#324a68] space-y-2" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              <p>
                Soy un especialista dedicado al cuidado integral del ser a través de la quiropraxia, la liberación miofascial y terapias de regeneración profunda. Mi enfoque entiende el cuerpo como una unidad sistémica: una armonía perfecta entre la columna vertebral, la cadera y las extremidades. Entiendo que el dolor no es un evento aislado, sino una señal de que el cuerpo ha perdido su centro.
              </p>
              <p className="text-[#2d6fb7] font-medium">Más de 5 años de experiencia, acompañando a más de 1.000 personas en Quinchía, Chinchiná y Popayán.</p>
            </div>
          </div>
          <div className="p-7 rounded-3xl bg-gradient-to-br from-[#2d6fb7] to-[#1f4f83] text-white shadow-xl">
            <div className="space-y-3" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              <HandHeart className="w-10 h-10 text-white/90" />
              <p className="text-lg font-semibold">Cuidamos tu postura, respiración y energía con un plan que escucha tu historia.</p>
              <div className="text-sm text-white/80">Sesiones presenciales · Atención personalizada</div>
            </div>
          </div>
        </motion.section>

        {/* Galería de sesiones */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-10"
        >
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <h3 className="text-2xl text-[#2e3c32]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              Momentos en sesión
            </h3>
            <span className="text-sm text-[#4a5a50]" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>Técnicas manuales y tecnología al servicio del bienestar</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galeria.map((item) => (
              <div key={item.src} className="relative overflow-hidden rounded-2xl border border-white/70 shadow-md bg-white/80">
                <img src={item.src} alt={item.alt} className="w-full h-44 object-contain p-3" loading="lazy" />
              </div>
            ))}
          </div>
        </motion.section>

        {/* Testimonio en video */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-10 flex justify-center"
        >
          <div className="w-full max-w-xl p-6 rounded-3xl bg-white/90 backdrop-blur-lg border border-white/70 shadow-lg space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="text-xl text-[#1f3550]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                Testimonio en Sesión
              </h3>
              <span className="text-xs text-[#324a68]" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>Escucha la experiencia de nuestros pacientes</span>
            </div>
            <div className="relative mx-auto w-[220px] sm:w-[260px] md:w-[280px]">
              <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-white/70 shadow-md bg-[#e9f1fa]">
                <iframe
                  src="https://www.instagram.com/reel/DRke9P3EeTF/embed"
                  title="Testimonio Instagram"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>
            <a
              href="https://www.instagram.com/reel/DRke9P3EeTF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#2d6fb7] hover:underline"
              style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}
            >
              Ver en Instagram
            </a>
          </div>
        </motion.section>

        {/* Metodología */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10"
        >
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <h3 className="text-2xl text-[#2e3c32]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              Metodología · Las 3 "E"
            </h3>
            <span className="text-sm text-[#4a5a50]" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>Proceso claro y acompañado en cada paso</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {metodologia.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white/85 backdrop-blur-lg border border-white/70 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#d7e7f7] text-[#2d6fb7] flex items-center justify-center font-semibold" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
                  {item.title.charAt(0)}
                </div>
                <h4 className="text-lg text-[#1f3550]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>{item.title}</h4>
                <p className="text-[#324a68]" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Protocolo */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-6"
        >
          <div className="p-7 rounded-3xl bg-white/92 backdrop-blur-lg border border-white/70 shadow-lg">
            <h3 className="text-2xl text-[#2e3c32] mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              La experiencia de una sesión
            </h3>
            <p className="text-[#4a5a50] mb-4" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              Cada encuentro es un ritual de sanación personalizado de 40 a 60 minutos.
            </p>
            <ul className="space-y-3" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              {protocolo.map((step, idx) => (
                <li key={step} className="flex gap-3 items-start">
                  <div className="mt-1 text-[#2d6fb7]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-[#1f3550]">{idx + 1}. {step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-7 rounded-3xl bg-gradient-to-br from-[#e8f1fb] to-[#d4e3f6] border border-white/70 shadow-md space-y-4">
            <h4 className="text-xl text-[#1f3550]" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
              Diferenciales
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              {diferenciales.map((item) => (
                <li key={item} className="flex gap-2 text-[#324a68]">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-[#2d6fb7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Footer / Contacto */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 mb-6"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1f3550] to-[#2d6fb7] text-white shadow-2xl border border-white/10">
            <div className="space-y-3 text-center" style={{ fontFamily: 'Lato, Open Sans, sans-serif' }}>
              <p className="text-xl font-semibold">Creo firmemente que vivir sin dolor es el primer paso para una vida plena.</p>
              <p className="text-white/80 text-base">"Mi propósito es que cada persona recupere la confianza en su cuerpo a través del equilibrio."</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-[#0c1a12] rounded-full font-semibold shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar Cita por WhatsApp
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => window.open('https://instagram.com/luiscarlosquiropraxia', '_blank')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2e3c32] rounded-full font-semibold shadow-lg hover:shadow-xl"
                >
                  <Instagram className="w-5 h-5" />
                  @luiscarlosquiropraxia
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Botón flotante WhatsApp */}
      <button
        type="button"
        onClick={handleWhatsApp}
        className="fixed right-4 bottom-4 z-30 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-105 transition"
        aria-label="Agendar cita por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
