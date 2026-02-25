import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, DollarSign, User, Calendar } from 'lucide-react';
import TerapiaHolisticaDetail from './TerapiaHolisticaDetail';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LandingContent, Module } from '../types';
import { LandingDetail } from './LandingDetail';

interface ModuleDetailProps {
  moduleId: string;
  onClose: () => void;
  isAdmin?: boolean;
  onUpdateModule?: (updated: Module) => void;
  module?: Module | null;
  children?: React.ReactNode;
}

const moduleInfo = {
  'terapia': {
    title: 'Terapia Holística',
    description: 'Ofrecemos sesiones personalizadas de sanación integral diseñadas para equilibrar cuerpo, mente y espíritu, trabajando en todos los niveles de tu ser.',
    services: [
      'Sesiones de Reiki y sanación energética',
      'Lectura de aura y chakras',
      'Terapia con cristales y gemas',
      'Aromaterapia terapéutica',
      'Equilibrio energético',
      'Consultas personalizadas'
    ],
    whatsappMessage: 'Hola, quiero agendar una cita para Terapia Holística en Casa Holística Ananda.'
  },
  'constelaciones': {
    title: 'Constelaciones Familiares',
    description: 'Una terapia sistémica que ayuda a identificar y sanar patrones transgeneracionales, bloqueios emocionales y dinámicas familiares ocultas.',
    services: [
      'Sesiones individuales de constelaciones',
      'Talleres grupales',
      'Sanación de patrones familiares',
      'Resolución de conflictos ancestrales',
      'Liberación de cargas emocionales heredadas',
      'Encuentro con tu lugar en el sistema'
    ],
    whatsappMessage: 'Hola, quiero información sobre Constelaciones Familiares en Casa Holística Ananda.'
  },
  'hipnosis': {
    title: 'Hipnosis Terapéutica',
    description: 'Accede a tu subconsciente para transformar creencias limitantes, superar miedos y alcanzar tus objetivos personales con esta poderosa herramienta terapéutica.',
    services: [
      'Hipnosis clínica y regresiva',
      'Reprogramación de creencias',
      'Liberación de fobias y miedos',
      'Gestión del estrés y ansiedad',
      'Mejora de hábitos',
      'Desarrollo personal y autoestima'
    ],
    whatsappMessage: 'Hola, quiero información sobre Hipnosis Terapéutica en Casa Holística Ananda.'
  },
  'astrologia': {
    title: 'Astrología',
    description: 'Descubre los ciclos cósmicos que influyen en tu vida a través de tu carta natal, tránsitos planetarios y pronósticos astrológicos personalizados.',
    services: [
      'Lectura de carta natal completa',
      'Análisis de tránsitos planetarios',
      'Sinastría de parejas',
      'Revolución solar',
      'Astrología predictiva',
      'Consultas de orientación'
    ],
    whatsappMessage: 'Hola, quiero agendar una consulta de Astrología en Casa Holística Ananda.'
  },
  'ayurveda': {
    title: 'Medicina Ayurveda',
    subtitle: 'Ciencia de la Vida',
    description: 'Sistema tradicional de medicina originario de la India con más de 5.000 años de antigüedad. "Ayur" significa vida y "Veda" conocimiento.',
    highlight: 'Ayurveda = "Ciencia de la vida"',
    services: [
      'Diagnóstico de dosha (Vata, Pitta, Kapha)',
      'Consultas personalizadas',
      'Planes nutricionales ayurvédicos',
      'Tratamientos con hierbas medicinales',
      'Masajes y terapias corporales',
      'Rutinas de vida según tu constitución'
    ],
    whatsappMessage: 'Hola, quiero una consulta de Medicina Ayurveda en Casa Holística Ananda.'
  },
  'terapia-fisica': {
    title: 'Terapia Física',
    description: 'Tratamientos corporales especializados para aliviar tensiones musculares, dolores crónicos y recuperar el bienestar físico integral.',
    services: [
      'Masajes terapéuticos',
      'Tratamiento de contracturas',
      'Terapia de puntos gatillo',
      'Estiramientos asistidos',
      'Rehabilitación postural',
      'Drenaje linfático'
    ],
    whatsappMessage: 'Hola, quiero agendar una sesión de Terapia Física en Casa Holística Ananda.'
  },
  'barras-access': {
    title: 'Barras de Access',
    description: 'Liberá tu mente del estrés, la ansiedad y los pensamientos repetitivos. Abrí espacio para la claridad, la paz y nuevas posibilidades.',
    therapist: 'Lorena Echeverry',
    pricing: {
      regular: '$150.000',
      promo: '$80.000',
      label: 'Precio feria'
    },
    benefits: [
      'Reducción del estrés y ansiedad',
      'Liberación de pensamientos repetitivos',
      'Mayor claridad mental',
      'Mejora del sueño',
      'Sensación de paz profunda',
      'Apertura a nuevas posibilidades'
    ],
    whatsappMessage: 'Hola, quiero agendar una sesión de Barras de Access con Lorena Echeverry al precio de feria ($80.000).',
    phone: '322 663 9527'
  }
};

export default function ModuleDetail({ moduleId, onClose, module, children, isAdmin = false, onUpdateModule }: ModuleDetailProps) {
  const info = moduleInfo[moduleId as keyof typeof moduleInfo];
  const [isEditing, setIsEditing] = useState(false);
  const [landingDraft, setLandingDraft] = useState<LandingContent | undefined>(module?.landing);

  useEffect(() => {
    setLandingDraft(module?.landing);
    setIsEditing(false);
  }, [module?.id, module?.landing]);

  const handleWhatsApp = (messageOverride?: string, phoneOverride?: string) => {
    const phone = phoneOverride || (info as any)?.phone || '573226639527';
    const message = messageOverride || info?.whatsappMessage || module?.whatsappMessage || 'Hola, quiero más información sobre esta área.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const landingToRender = landingDraft || module?.landing;

  const updateLandingField = <K extends keyof LandingContent>(key: K, value: LandingContent[K]) => {
    setLandingDraft((prev) => ({
      ...(prev || module?.landing || {}),
      [key]: value,
    } as LandingContent));
  };

  const colorSwatches = ['#e0c3fc', '#d4669f', '#87c4d4', '#1a237e', '#0d133d', '#d4af37', '#25D366', '#ff8a65'];

  const applyHeroImage = (src: string) => {
    updateLandingField('heroImage', src);
  };

  const applySecondaryImage = (src: string) => {
    updateLandingField('secondaryImage', src);
  };

  const handleDropImage = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    const urlFromDrag = event.dataTransfer.getData('text/uri-list') || event.dataTransfer.getData('text');

    if (files && files.length > 0) {
      const file = files[0];
      if (!file.type.startsWith('image/')) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          applyHeroImage(result);
        }
      };
      reader.readAsDataURL(file);
      return;
    }

    if (urlFromDrag && (urlFromDrag.startsWith('http') || urlFromDrag.startsWith('data:'))) {
      applyHeroImage(urlFromDrag.trim());
    }
  };

  const handleDropSecondaryImage = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    const urlFromDrag = event.dataTransfer.getData('text/uri-list') || event.dataTransfer.getData('text');

    if (files && files.length > 0) {
      const file = files[0];
      if (!file.type.startsWith('image/')) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          applySecondaryImage(result);
        }
      };
      reader.readAsDataURL(file);
      return;
    }

    if (urlFromDrag && (urlFromDrag.startsWith('http') || urlFromDrag.startsWith('data:'))) {
      applySecondaryImage(urlFromDrag.trim());
    }
  };

  const handleSave = () => {
    if (!module || !landingDraft || !onUpdateModule) return;

    const updated: Module = {
      ...module,
      landing: landingDraft,
      image: landingDraft.heroImage || module.image,
      description: module.description || landingDraft.heroDescription,
    };

    onUpdateModule(updated);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setLandingDraft(module?.landing);
    setIsEditing(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-6xl bg-gradient-to-br from-white via-[#fef7f3] to-white rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6 text-[#5a3d7d]" />
          </button>

          {/* Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            {children && React.Children.count(children) > 0 ? (
              <div>
                {children}
              </div>
            ) : moduleId === 'terapia' ? (
              <TerapiaHolisticaDetail onWhatsApp={() => handleWhatsApp()} />
            ) : info ? (
              <div className="p-8 md:p-12">{/* ...existing code... */}</div>
            ) : module?.landing ? (
              <div className="relative">
                {isAdmin && (
                  <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-[#d4669f]/20 p-4 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                      <div className="flex items-center gap-2 text-[#5a3d7d] font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <MessageCircle className="w-4 h-4" /> Modo edición de landing
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setIsEditing((v) => !v)}
                          className="px-3 py-2 rounded-full border border-[#d4669f]/30 text-[#5a3d7d] text-sm font-semibold bg-white"
                        >
                          {isEditing ? 'Cerrar editor' : 'Editar contenido'}
                        </button>
                        {isEditing && (
                          <>
                            <button
                              onClick={handleSave}
                              className="px-3 py-2 rounded-full bg-gradient-to-r from-[#d4669f] to-[#87c4d4] text-white text-sm font-semibold"
                            >
                              Guardar cambios
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="px-3 py-2 rounded-full border border-[#d4669f]/30 text-[#d4669f] text-sm font-semibold bg-white"
                            >
                              Cancelar
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {isEditing && landingToRender && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Diseño de plantilla</label>
                          <select
                            value={landingToRender.templateType || 'plantilla1'}
                            onChange={(e) => updateLandingField('templateType', e.target.value as LandingContent['templateType'])}
                            className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30"
                          >
                            <option value="plantilla1">Plantilla 1 · Terapeuta con 2 imágenes</option>
                            <option value="plantilla2">Plantilla 2 · Perfil inmersivo</option>
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Título</label>
                          <input value={landingToRender.heroTitle} onChange={(e) => updateLandingField('heroTitle', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Subtítulo</label>
                          <input value={landingToRender.heroSubtitle} onChange={(e) => updateLandingField('heroSubtitle', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Nombre del terapeuta</label>
                          <input value={landingToRender.therapistName || ''} onChange={(e) => updateLandingField('therapistName', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Servicio</label>
                          <input value={landingToRender.serviceName || ''} onChange={(e) => updateLandingField('serviceName', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                        </div>
                        <div className="md:col-span-2 space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Descripción</label>
                          <textarea value={landingToRender.heroDescription} onChange={(e) => updateLandingField('heroDescription', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30 min-h-[70px]" />
                        </div>
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <label className="font-semibold text-[#5a3d7d]">Imagen</label>
                            <input value={landingToRender.heroImage} onChange={(e) => updateLandingField('heroImage', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                            <button onClick={() => updateLandingField('heroImage', '')} className="text-xs text-[#d4669f] underline">Quitar imagen</button>
                          </div>
                          <div
                            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            onDrop={handleDropImage}
                            className="w-full rounded-lg border border-dashed border-[#d4669f]/40 bg-white/60 text-[#5a3d7d] text-xs p-3"
                            style={{ fontFamily: 'Open Sans, sans-serif' }}
                          >
                            Arrastra una imagen desde tu PC o desde Google aquí. Si arrastras desde la web, se usará la URL; si arrastras un archivo local, se guardará como imagen incrustada.
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Imagen secundaria</label>
                          <input value={landingToRender.secondaryImage || ''} onChange={(e) => updateLandingField('secondaryImage', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                            <button onClick={() => updateLandingField('secondaryImage', '')} className="text-xs text-[#d4669f] underline">Quitar imagen</button>
                            <div
                              onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                              onDrop={handleDropSecondaryImage}
                              className="w-full rounded-lg border border-dashed border-[#d4669f]/40 bg-white/60 text-[#5a3d7d] text-xs p-3"
                              style={{ fontFamily: 'Open Sans, sans-serif' }}
                            >
                              Arrastra una imagen secundaria aquí. URLs desde la web o archivos locales funcionarán.
                            </div>
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Instagram (opcional)</label>
                          <input value={landingToRender.instagramUrl || ''} onChange={(e) => updateLandingField('instagramUrl', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Facebook (opcional)</label>
                          <input value={landingToRender.facebookUrl || ''} onChange={(e) => updateLandingField('facebookUrl', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Bullets (uno por línea)</label>
                          <textarea
                            value={(landingToRender.bulletPoints || []).join('\n')}
                            onChange={(e) => updateLandingField('bulletPoints', e.target.value.split('\n'))}
                            className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30 min-h-[70px]"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-semibold text-[#5a3d7d]">Color acento</label>
                          <input value={landingToRender.accentColor} onChange={(e) => updateLandingField('accentColor', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                          <div className="flex flex-wrap gap-2">
                            {colorSwatches.map((c) => (
                              <button
                                key={c}
                                type="button"
                                onClick={() => updateLandingField('accentColor', c)}
                                className="w-8 h-8 rounded-full border border-white/50 shadow"
                                style={{ background: c }}
                                aria-label={`Elegir color ${c}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="font-semibold text-[#5a3d7d]">Fondo desde</label>
                          <input value={landingToRender.backgroundFrom} onChange={(e) => updateLandingField('backgroundFrom', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                          <div className="flex flex-wrap gap-2">
                            {colorSwatches.map((c) => (
                              <button
                                key={`from-${c}`}
                                type="button"
                                onClick={() => updateLandingField('backgroundFrom', c)}
                                className="w-8 h-8 rounded-full border border-white/50 shadow"
                                style={{ background: c }}
                                aria-label={`Elegir color ${c}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="font-semibold text-[#5a3d7d]">Fondo hasta</label>
                          <input value={landingToRender.backgroundTo} onChange={(e) => updateLandingField('backgroundTo', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                          <div className="flex flex-wrap gap-2">
                            {colorSwatches.map((c) => (
                              <button
                                key={`to-${c}`}
                                type="button"
                                onClick={() => updateLandingField('backgroundTo', c)}
                                className="w-8 h-8 rounded-full border border-white/50 shadow"
                                style={{ background: c }}
                                aria-label={`Elegir color ${c}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">Texto CTA</label>
                          <input value={landingToRender.ctaText || ''} onChange={(e) => updateLandingField('ctaText', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-[#5a3d7d]">WhatsApp (solo números)</label>
                          <input value={landingToRender.whatsappNumber || ''} onChange={(e) => updateLandingField('whatsappNumber', e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#d4669f]/30" />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {landingToRender && <LandingDetail landing={landingToRender} onWhatsApp={handleWhatsApp} />}
              </div>
            ) : module ? (
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                <div className="relative h-72 md:h-full min-h-[280px] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#5a3d7d]/40" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl text-[#d4669f] font-bold">{module.title}</h2>
                  <p className="text-[#5a3d7d]/80 leading-relaxed">{module.description}</p>
                  <button
                    onClick={() => handleWhatsApp()}
                    className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#d4669f] to-[#87c4d4] text-white rounded-full font-semibold text-sm"
                  >
                    <MessageCircle className="w-5 h-5" /> Hablar por WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-12">
                <h2 className="text-2xl text-[#d4669f] mb-4 font-bold">Área no encontrada</h2>
                <p className="text-[#5a3d7d]/80 text-center">No se encontró información para este módulo. Por favor, selecciona otra opción.</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}