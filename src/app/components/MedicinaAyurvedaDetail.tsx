import { useMemo } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Leaf, Sparkles, Play, Waves, Flower } from 'lucide-react';
import { Section } from './ui/section';
import { AYURVEDA_BENEFITS, AYURVEDA_VIDEOS, AYURVEDA_GALLERY } from '../data/ayurveda';
import { openWhatsApp } from '../config/contact';

type MedicinaAyurvedaDetailProps = Record<string, never>;

const THERAPIST_WHATSAPP = '+573246523951';
const THERAPIST_WHATSAPP_MESSAGE = 'Hola, estoy interesado en agendar una cita de Ayurveda con el Dr. Héctor Manuel Uribe Neira.';

const AYURVEDA_SERVICE_SUMMARY = [
  {
    tier: 'Entrada',
    items: [
      {
        title: 'Evaluación Ayurvédica express (45 min)',
        desc: 'Identifica tu dosha, qué está desequilibrado y recibe un plan inmediato de hábitos y alimentación.',
      },
      {
        title: 'Detox Digestivo express (7 días)',
        desc: 'Protocolo según tu dosha que desinflama, mejora digestión y eleva la energía desde los primeros días.',
      },
      {
        title: 'Estrés y Sueño en Balance (7 días)',
        desc: 'Calma sistema nervioso, reduce ansiedad y mejora sueño con rutinas guiadas y respiración.',
      },
      {
        title: 'Terapia Reiki Vagbhata (60 min)',
        desc: 'Sanación energética profunda: libera tensiones, armoniza chakras y activa la regeneración natural.',
      },
      {
        title: 'Armonización de Chakras (Radiestesia)',
        desc: 'Detecta bloqueos, libera cargas emocionales y restablece el flujo energético con péndulo y varillas.',
      },
    ],
  },
  {
    tier: 'Intermedios (14 días)',
    items: [
      {
        title: 'Detox corporal intermedio (Purvakarma)',
        desc: 'Limpieza guiada con alimentación, aceites y vapor terapéutico más seguimiento semanal.',
      },
      {
        title: 'Detox intermedio Mente–Emociones',
        desc: 'Respiración, meditación, Shirodhara/Champi y apoyo floral/aromas para soltar sobrecarga emocional.',
      },
      {
        title: 'Plan Bienestar en Movimiento (Dolor)',
        desc: 'Marma, basti localizado, AromaTouch y yoga suave para dolor, inflamación y movilidad.',
      },
    ],
  },
  {
    tier: 'Avanzados',
    items: [
      {
        title: 'Detox Integral Profundo (Panchakarma) · 30 días',
        desc: 'Depuración escalonada con hitos y acompañamiento: digestión, energía, sistema nervioso y claridad.',
      },
      {
        title: 'Rejuvenecimiento Integral (Rasayana) · 45–60 días',
        desc: 'Anti-aging natural: nutrición y regeneración profunda, sueño reparador, fuerza vital e inmunidad.',
      },
    ],
  },
];

export default function MedicinaAyurvedaDetail(_: MedicinaAyurvedaDetailProps) {
  const openTherapistWhatsApp = () => {
    openWhatsApp(THERAPIST_WHATSAPP_MESSAGE, THERAPIST_WHATSAPP);
  };

  const sparkles = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        duration: 8 + Math.random() * 4,
      })),
    [],
  );

  const leaves = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, idx) => ({
        left: `${10 + idx * 10}%`,
        top: `${(idx % 4) * 18 + 8}%`,
        rotate: `${-10 + idx * 5}deg`,
        duration: 8 + idx,
        delay: idx * 0.2,
      })),
    [],
  );

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0f271a] via-[#123524] to-[#0b1c13] text-[#e9f5e9]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 -top-16 w-72 h-72 bg-[#7aa37d]/30 blur-3xl" />
        <div className="absolute right-[-60px] top-10 w-80 h-80 bg-[#b7d7b9]/28 blur-3xl" />
        <div className="absolute left-1/3 bottom-[-40px] w-96 h-96 bg-[#d4c7a3]/26 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 h-24 bg-gradient-to-b from-[#7aa37d]/8 to-transparent" />
        <motion.div
          aria-hidden
          className="absolute -right-10 top-24 w-40 h-40 rounded-full bg-gradient-to-br from-[#7aa37d]/25 via-[#b7d7b9]/15 to-transparent blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.6, 0.35], rotate: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute left-12 bottom-16 w-48 h-48 rounded-full bg-gradient-to-br from-[#b7d7b9]/30 via-[#7aa37d]/18 to-transparent blur-3xl"
          animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.4, 0.65, 0.4], rotate: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#d4c7a3]/45 to-transparent blur-2xl"
          animate={{ y: [0, 12, -6, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {sparkles.map((spark, idx) => (
          <motion.div
            key={`spark-${idx}`}
            aria-hidden
            className="absolute"
            style={{
              left: spark.left,
              top: spark.top
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.6, 1.15, 0.6], rotate: [0, 120, 240, 360] }}
            transition={{ duration: spark.duration, repeat: Infinity, delay: spark.delay }}
          >
            <Sparkles className="w-3 h-3 text-[#d4c7a3]" />
          </motion.div>
        ))}
        {leaves.map((leaf, idx) => (
          <motion.div
            key={`leaf-${idx}`}
            aria-hidden
            className="absolute text-[#6d8f6f]/50"
            style={{
              left: leaf.left,
              top: leaf.top,
              rotate: leaf.rotate,
            }}
            animate={{ y: [0, 6, -4, 0], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: leaf.duration, repeat: Infinity, ease: 'easeInOut', delay: leaf.delay }}
          >
            <Leaf className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7aa37d]/25 text-[#e9f5e9] text-sm font-semibold border border-[#7aa37d]/40">
              <Leaf className="w-4 h-4" /> Medicina Ayurvédica · Nutrición
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#f2f9f1]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
              Ayurveda: la medicina que permite volver a escuchar al cuerpo
            </h1>
            <p className="text-base md:text-lg text-[#dfeee0] leading-relaxed">
              Ayurveda devuelve la escucha al cuerpo para que cansancio, inflamación o insomnio no se normalicen. Ajustes diarios y personalizados según tu dosha equilibran digestión, energía y mente.
            </p>
            <div className="rounded-2xl bg-white/10 border border-[#7aa37d]/35 shadow-sm p-4 space-y-2 text-sm text-[#e9f5e9]">
              <div className="flex items-center gap-2 text-[#c9e6c9] font-semibold">
                <Leaf className="w-4 h-4" /> Tu terapeuta
              </div>
              <p className="text-base font-semibold text-[#f2f9f1]">Dr. Héctor Manuel Uribe Neira</p>
              <p>Medicina Ayurveda · Terapias Anti-aging</p>
              <p>Coaching Nutricional · Bioneuroemoción</p>
              <p>Reiki · Aromaterapia</p>
              <button
                onClick={openTherapistWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3b7a57] to-[#7aa37d] text-white font-semibold shadow-md hover:shadow-lg transition"
              >
                <MessageCircle className="w-4 h-4" /> Agendar con el Dr. Héctor
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#e9f5e9]">
              <div className="p-3 rounded-2xl bg-white/10 border border-[#7aa37d]/35 shadow-sm">
                <p className="font-semibold text-[#c9e6c9] mb-1">Doshas</p>
                <p className="text-[#dfeee0]">Vata, Pitta y Kapha conviven en ti; equilibrarlos evita que el desequilibrio avance.</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 border border-[#7aa37d]/35 shadow-sm">
                <p className="font-semibold text-[#c9e6c9] mb-1">Ritmo amable</p>
                <p className="text-[#dfeee0]">Rutinas suaves, infusiones y respiración que calman nervios, mejoran sueño y digestión.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-[#e9f5e9]">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-[#9ab89c]/40">Prevención y energía estable</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-[#9ab89c]/40">Nutrición según tu dosha</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <motion.div
                aria-hidden
                className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#d4c7a3]/28 via-[#7aa37d]/22 to-transparent blur-3xl"
                animate={{ scale: [0.92, 1.08, 0.92], rotate: [0, 8, 0], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
              />
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-full border border-[#e9f5e9]/35"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
              />
              <motion.img
                src="/assets/logo_yurbeda-removebg-preview.png"
                alt="Logotipo Agbhata Ayurveda"
                className="relative w-40 md:w-48 drop-shadow-[0_12px_26px_rgba(0,0,0,0.28)]"
                loading="lazy"
                animate={{ y: [0, -6, 0, 5, 0], rotate: [0, 1.5, -1.5, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Beneficios clave */}
        <Section className="grid md:grid-cols-2 gap-6">
          {AYURVEDA_BENEFITS.map((b) => (
            <div key={b.title} className="p-5 rounded-2xl bg-white/10 border border-[#7aa37d]/35 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-2 text-[#c9e6c9] font-semibold mb-2">
                {b.icon}
                <span>{b.title}</span>
              </div>
              <p className="text-[#e9f5e9] text-sm leading-relaxed">{b.text}</p>
            </div>
          ))}
        </Section>

        {/* Videos */}
        <Section delay={0.05} className="grid md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col items-center gap-4">
            {AYURVEDA_VIDEOS.map((video) => (
              <div
                key={video.label}
                className="w-full max-w-[200px] md:max-w-[220px] min-w-[180px] mx-auto overflow-hidden rounded-xl shadow-md"
              >
                {video.url ? (
                  <iframe
                    src={video.url}
                    title={video.label}
                    className="w-full aspect-[9/16]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                ) : (
                  <div className="w-full aspect-[9/16] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#143522] to-[#0f291a] text-[#e9f5e9]">
                    <Play className="w-8 h-8 text-[#7aa37d]" />
                    <p className="text-sm font-semibold">{video.label}</p>
                    <p className="text-xs text-[#c9e6c9]">Placeholder listo para tu video (YouTube/Vimeo).</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative w-full h-full">
            <motion.div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#7aa37d]/25 via-[#d4c7a3]/18 to-transparent blur-3xl"
              animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.35, 0.6, 0.35], rotate: [0, 6, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative h-full rounded-3xl border border-[#7aa37d]/45 bg-gradient-to-br from-[#132c1f] via-[#0f2016] to-[#0b1710] p-6 shadow-xl overflow-hidden">
              <motion.div
                aria-hidden
                className="absolute left-4 top-4 text-[#d4c7a3]/70"
                animate={{ y: [0, 6, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <motion.div
                aria-hidden
                className="absolute right-6 bottom-6 text-[#7aa37d]/60"
                animate={{ y: [0, -6, 0], opacity: [0.35, 0.65, 0.35] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Leaf className="w-8 h-8" />
              </motion.div>

              <div className="relative space-y-4 text-[#e9f5e9]">
                <p className="text-sm uppercase tracking-[0.18em] text-[#c9e6c9]">Pulso sutil</p>
                <h3 className="text-2xl font-bold leading-tight text-[#f2f9f1]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                  "Cada respiración es un mantra y cada latido recuerda que el cuerpo sabe volver al equilibrio."
                </h3>
                <p className="text-sm text-[#dfeee0] leading-relaxed">
                  Haz una pausa: siente tu pulso en la muñeca y respira profundo. Ayurveda empieza cuando vuelves a escuchar lo que tu cuerpo lleva tiempo diciendo.
                </p>
                <div className="flex items-center gap-3 text-sm text-[#c9e6c9]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Respira 4-4-6</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    <span>Regresa al centro</span>
                  </div>
                </div>
                <button
                  onClick={openTherapistWhatsApp}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3b7a57] to-[#7aa37d] text-white font-semibold shadow-md hover:shadow-lg transition"
                >
                  <MessageCircle className="w-4 h-4" /> Escribir al Dr. Héctor
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Imágenes destacadas */}
        <Section delay={0.1} className="grid md:grid-cols-3 gap-4">
          {AYURVEDA_GALLERY.map((card) => (
            <div key={card.src} className="rounded-2xl bg-white/10 border border-[#7aa37d]/35 shadow-sm overflow-hidden flex flex-col">
              <img src={card.src} alt={card.title} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-4 space-y-2 text-sm text-[#e9f5e9]">
                <p className="font-semibold">{card.title}</p>
                <p className="text-[#c9e6c9]">{card.text}</p>
              </div>
            </div>
          ))}
        </Section>

        {/* Paquetes / Terapias (resumen corto con acción) */}
        <Section delay={0.15} className="relative overflow-hidden rounded-3xl border border-[#7aa37d]/45 bg-gradient-to-br from-[#123524] via-[#0f291a] to-[#0c1f15] shadow-xl p-6 md:p-8">
          <motion.div
            aria-hidden
            className="absolute -right-10 top-0 w-52 h-52 bg-[#7aa37d]/25 blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="absolute -left-12 bottom-0 w-56 h-56 bg-[#d4c7a3]/22 blur-3xl"
            animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.28, 0.5, 0.28] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative space-y-4">
            <div className="flex items-center gap-2 text-[#c9e6c9]">
              <Flower className="w-5 h-5" />
              <h2 className="text-xl md:text-2xl font-bold text-[#f2f9f1]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
                Paquetes / Terapias Ayurvédicas
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#dfeee0] max-w-3xl">
              Elige tu nivel de profundidad: evaluación rápida, planes de 7–14 días o programas integrales. Cada opción incluye guía personalizada según tu dosha.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {AYURVEDA_SERVICE_SUMMARY.map((group) => (
                <div
                  key={group.tier}
                  className="rounded-2xl border border-[#7aa37d]/40 bg-white/10 backdrop-blur-md p-4 space-y-3 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-2 text-[#c9e6c9] font-semibold">
                    <Waves className="w-4 h-4" /> {group.tier}
                  </div>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div key={item.title} className="rounded-xl bg-gradient-to-br from-[#1a3a27]/80 to-[#1c3f2b]/80 border border-[#7aa37d]/35 p-3 space-y-2 text-[#e9f5e9]">
                        <p className="font-semibold text-[#f2f9f1] text-sm md:text-base">{item.title}</p>
                        <p className="text-xs md:text-sm text-[#c9e6c9] leading-snug">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA final */}
        <Section delay={0.1} className="relative overflow-hidden rounded-3xl border border-[#7aa37d]/40 bg-gradient-to-br from-[#dfeade] via-white to-[#e9f2e7] shadow-xl p-8 md:p-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 top-6 w-32 h-32 bg-[#7aa37d]/20 blur-2xl" />
            <div className="absolute right-4 bottom-4 w-40 h-40 bg-[#d4c7a3]/18 blur-2xl" />
            <motion.div
              aria-hidden
              className="absolute left-8 bottom-6 text-[#6d8f6f]/60"
              animate={{ y: [0, -6, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Flower className="w-16 h-16" />
            </motion.div>
            <motion.div
              aria-hidden
              className="absolute right-8 top-6 text-[#6d8f6f]/50"
              animate={{ y: [0, 6, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Leaf className="w-14 h-14" />
            </motion.div>
          </div>
          <div className="relative space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-[#2f4a32] uppercase tracking-wide">Llamado a la acción</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1f2a1f]">Agenda tu guía ayurvédica personalizada</h3>
            <p className="text-base md:text-lg text-[#3f362c] leading-relaxed">
              Un solo paso para iniciar ajustes diarios a tu medida: alimentación, rutinas y manejo del estrés según tu dosha.
            </p>
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-sm font-semibold text-[#2f4a32]">WhatsApp Dr. Héctor: {THERAPIST_WHATSAPP}</p>
              <button
                onClick={openTherapistWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#3b7a57] text-[#2f4a32] font-semibold shadow-sm hover:shadow-md transition bg-white/80"
              >
                <MessageCircle className="w-5 h-5" /> Escribir al Dr. Héctor
              </button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
