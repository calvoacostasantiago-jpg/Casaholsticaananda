import { CheckCircle, Sparkles, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
import { openWhatsApp } from "../config/contact";

interface ModuleProps {
  number: number;
  title: string;
  description: string;
  features: string[];
  price?: string;
  available: boolean;
  highlighted?: boolean;
  image: string;
}

function ModuleCard({
  number,
  title,
  description,
  features,
  price,
  available,
  highlighted,
  image,
}: ModuleProps) {
  const handleEnroll = () => {
    if (available) {
      openWhatsApp(`Hola, quiero inscribirme al Módulo ${number}: ${title}`);
    }
  };

  return (
    <motion.div
      className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 flex flex-col h-full ${
        highlighted
          ? "bg-gradient-to-br from-[#4a0d7a]/40 to-[#2e0d4b]/40 border-2 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.3)] scale-105 z-10"
          : "bg-gradient-to-br from-[#4a0d7a]/20 to-[#2e0d4b]/20 border border-[#d4af37]/30 hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
      } ${!available && "opacity-75"}`}
      whileHover={available ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: number * 0.1 }}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#d4af37] to-[#f0d9a8] rounded-full z-20 w-max max-w-[90%]">
          <p
            className="text-sm text-[#2e0d4b] uppercase tracking-wide flex items-center justify-center gap-2"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
            }}
          >
            <Star className="w-4 h-4" />
            ¡Disponible Ahora!
          </p>
        </div>
      )}

      {/* Image Container */}
      <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-[#2e0d4b] via-transparent to-transparent z-10 opacity-60" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Lock overlay removed here */}
      </div>

      <div className="flex items-center justify-between mb-4">
        <p
          className="text-sm text-[#f0d9a8] uppercase tracking-widest"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
          }}
        >
          Módulo {number}
        </p>
        {!available && (
          <span className="text-xs px-2 py-1 bg-[#2e0d4b]/50 rounded border border-[#d4af37]/20 text-white/50">
            Próximamente
          </span>
        )}
      </div>

      <h3
        className="text-2xl md:text-3xl text-[#d4af37] mb-4"
        style={{ fontFamily: "Cinzel, serif", fontWeight: 700 }}
      >
        {title}
      </h3>

      <p
        className="text-white/80 mb-6 leading-relaxed flex-grow"
        style={{ fontFamily: "Open Sans, sans-serif" }}
      >
        {description}
      </p>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <p
              className="text-white/90 text-sm"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        {price && available && (
          <div className="mb-6 flex flex-col items-center">
            <p
              className="text-xs text-[#f0d9a8]/80 uppercase tracking-widest mb-1"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Valor del Módulo
            </p>
            <p
              className="text-xl text-[#d4af37] tracking-widest"
              style={{
                fontFamily: "Cinzel, serif",
                fontWeight: 600,
              }}
            >
              {price}
            </p>
          </div>
        )}
        {available ? (
          <button
            onClick={handleEnroll}
            className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#f0d9a8] text-[#2e0d4b] rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-105 transform"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
            }}
          >
            Inscribirme Ahora
          </button>
        ) : (
          <div className="py-4 px-6 bg-[#2e0d4b]/50 rounded-full text-center border border-[#d4af37]/10">
            <p
              className="text-[#f0d9a8] uppercase tracking-wide text-sm"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
              }}
            >
              Próximamente
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ModulesSection() {
  const modules: ModuleProps[] = [
    {
      number: 1,
      title: "Manual de Limpieza y Protección Energética",
      description:
        "Transforma tu realidad dominando el poder de la Radiónica y la Radiestesia. Aprende a limpiar, proteger y elevar la vibración de tu aura y tus espacios mediante técnicas prácticas y herramientas exclusivas. Este módulo te guiará en el uso del péndulo para conectar con tu Yo Superior, realizar lecturas profundas de Chakras y Aura, y utilizar gráficos radiónicos para armonizar, limpiar y transmutar cualquier energía discordante.",
      features: [
        "🗓️ Fecha: Sabado 28 de febrero de 2026",
        "⏰ Horario: 9:00 AM a 5:00 PM (jornada completa)",
        "📍 Clase presencial en Casa Holística Ananda",
        "📚 Manual digital descargable",
        "💻 2 clases virtuales de acompañamiento y práctica",
        "Herramientas radiónicas listas para usar desde el primer día",
        "Cómo diagnosticar tu aura y detectar bloqueos energéticos",
        "Técnicas para armonizar la energía de tu hogar y espacios",
        "Uso de mandalas y gráficos radiónicos exclusivos",
      ],
      price: "$215.000 COP",
      available: true,
      highlighted: true,
      image: '/assets/cf1164c52b3a1752e556056d05f3d01138b7b823.png',
    },
    {
      number: 2,
      title: "Mesa de Sanación Holística Arcángel Rafael",
      description:
        "¿Qué es la Mesa Radiónica para la Sanación Holística? Es una herramienta terapéutica cuántica que combina principios de radiestesia, radiónica, geometría sagrada, fitoenergética, musicoterapia, reiki, feng shui, cromoterapia, física cuántica, hipnoterapia, PNL, arquetipos de sanación, leyes universales y angelología. Está vinculada a la Gran Fraternidad Blanca y las Mónadas Cósmicas, buscando la armonización y sanación integral para atraer salud y plenitud.",
      features: [
        "Radiestesia y Radiónica",
        "Psiónica y Geometría Sagrada",
        "Fitoenergética, Musicoterapia y Reiki",
        "Feng Shui y Cromoterapia",
        "Física cuántica, Hipnoterapia y PNL",
        "Arquetipos de sanación y leyes universales",
        "Angelología y conexión espiritual",
        "Herramienta para armonización y sanación integral",
      ],
      available: false,
      image: '/assets/fe3f087c02b2873d08bbe9a1fbbaea47e615411b.png',
    },
    {
      number: 3,
      title: "Mesa Radiónica de Saint Germain",
      description:
        "¿Qué es la Tabla Radiónica? Es una poderosa herramienta energética que utiliza principios de radiónica, radiestesia y geometría sagrada para armonizar y transformar tu vida. Activa frecuencias que llegan al inconsciente, ayudando a borrar registros del pasado, liberar bloqueos emocionales y abrir el camino hacia una vida más plena y equilibrada.",
      features: [
        "Armoniza tus relaciones familiares, de pareja, sociales y laborales",
        "Transmuta patrones limitantes, traumas, miedos y bloqueos",
        "Atrae nuevas oportunidades: empleo, negocios, compra o venta de propiedades",
        "Impulsa procesos legales o personales que necesitan avanzar",
        "Restaura tu equilibrio físico, mental, emocional y espiritual",
      ],
      available: false,
      image: '/assets/b15529c5b757ce9e07d05bdbef5e4f2bcdcc8196.png',
    },
  ];

  return (
    <section
      id="modules"
      className="relative py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a0d7a] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-[#4a0d7a]/30 backdrop-blur-sm border border-[#d4af37]/30 rounded-full">
            <Zap className="w-5 h-5 text-[#d4af37]" />
            <p
              className="text-sm md:text-base text-[#f0d9a8] uppercase tracking-widest"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
              }}
            >
              Programa de Formación
            </p>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-[#d4af37]"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 900,
            }}
          >
            Módulos de Aprendizaje
          </h2>

          <p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 300,
            }}
          >
            Un viaje transformador de tres niveles diseñado para
            llevarte desde los fundamentos hasta la maestría en{" "}
            <span className="text-[#d4af37]">
              radiónica y radiestesia
            </span>
            , habilitándote para sanar a otros y crear una{" "}
            <span className="text-[#d4af37] font-semibold">
              fuente de ingresos
            </span>{" "}
            alineada con tu propósito.
          </p>
        </motion.div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {modules.map((module) => (
            <ModuleCard key={module.number} {...module} />
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4a0d7a]/30 to-[#2e0d4b]/30 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl max-w-4xl">
            <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
            <p
              className="text-white/90 text-left"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Todos los módulos incluyen{" "}
              <span className="text-[#d4af37] font-semibold">
                material descargable
              </span>{" "}
              y{" "}
              <span className="text-[#d4af37] font-semibold">
                acceso vitalicio
              </span>
              . Al completar el programa recibirás tu{" "}
              <span className="text-[#d4af37] font-semibold">
                certificación de asistencia
              </span>{" "}
              de Casa Holística Ananda.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}