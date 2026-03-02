import { FormEvent, useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Trash2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import GallerySection from './GallerySection';
import LocationSection from './LocationSection';
import DecorativeElements from './DecorativeElements';
import { LandingContent, Module } from '../types';
import { defaultLanding } from '../defaults/landing';
import ModuleDetail from './ModuleDetail';
import EscuelaEspiritualContent from './EscuelaEspiritualContent';
import ConstelacionesFamiliaresDetail from './ConstelacionesFamiliaresDetail';
import HipnosisDetail from './HipnosisDetail';
import AstrologiaDetail from './AstrologiaDetail';
import { WHATSAPP_MAIN } from '../config/contact';
import Footer from './Footer';
import { AdminPanel } from './AdminPanel';
import { AdminForm } from './AdminForm';

const DEFAULT_MODULES: Module[] = [
  {
    id: 'terapia',
    title: 'Terapia Radiónica y Radiestesia',
    description: 'Sesiones personalizadas con enfoque radiónico y radiestesia para equilibrar cuerpo, mente y espíritu.',
    image: 'https://images.unsplash.com/photo-1740748776786-74365e440be4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpc3RpYyUyMHRoZXJhcHklMjBtYXNzYWdlfGVufDF8fHx8MTc3MDk0MzcwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    whatsappMessage: 'Hola, quiero información sobre Terapia Radiónica y Radiestesia en Casa Holística Ananda.'
  },
  {
    id: 'escuela-espiritual',
    title: 'Escuela Radiónica y Radiestesia',
    description: 'Entra al mundo de la radiónica, radiestesia y sanación holística con nuestros módulos transformadores.',
    image: 'https://images.unsplash.com/photo-1760691313751-98262affa4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBoZWFsaW5nJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NzA5ODk5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whatsappMessage: 'Hola, quiero saber más sobre la Escuela Espiritual de Casa Holística Ananda.'
  },
  {
    id: 'constelaciones',
    title: 'Constelaciones Familiares',
    description: 'Sana patrones transgeneracionales y encuentra tu lugar en el sistema familiar.',
    image: 'https://images.unsplash.com/photo-1674671261547-fa4a80a52a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjb25zdGVsbGF0aW9uJTIwdGhlcmFweXxlbnwxfHx8fDE3NzA5OTM2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whatsappMessage: 'Hola, quiero información sobre Constelaciones Familiares en Casa Holística Ananda.'
  },
  {
    id: 'hipnosis',
    title: 'Hipnosis',
    description: 'Accede a tu subconsciente para transformar creencias limitantes y alcanzar tus objetivos.',
    image: 'https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXBub3NpcyUyMG1lZGl0YXRpb24lMjB0aGVyYXB5fGVufDF8fHx8MTc3MDk5MzY5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    whatsappMessage: 'Hola, quiero información sobre Hipnosis en Casa Holística Ananda.'
  },
  {
    id: 'astrologia',
    title: 'Astrología',
    description: 'Descubre tu carta natal y comprende los ciclos cósmicos que influyen en tu vida.',
    image: 'https://images.unsplash.com/photo-1614089254151-676cc373b01e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb2xvZ3klMjB6b2RpYWMlMjBzdGFyc3xlbnwxfHx8fDE3NzA5NDQzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whatsappMessage: 'Hola, quiero información sobre Astrología en Casa Holística Ananda.'
  },
  {
    id: 'ayurveda',
    title: 'Medicina Ayurveda',
    description: 'Ciencia de la vida con más de 5.000 años de antigüedad para equilibrar tu dosha.',
    image: 'https://images.unsplash.com/photo-1759141936083-d10203b4d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMGhlcmJzJTIwc3BpY2VzfGVufDF8fHx8MTc3MDk5MTIxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    whatsappMessage: 'Hola, quiero información sobre Medicina Ayurveda en Casa Holística Ananda.'
  },
  {
    id: 'terapia-fisica',
    title: 'Terapia Física',
    description: 'Tratamientos corporales para aliviar tensiones, dolores y recuperar el bienestar físico.',
    image: 'https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzA5OTM2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whatsappMessage: 'Hola, quiero información sobre Terapia Física en Casa Holística Ananda.'
  },
  {
    id: 'barras-access',
    title: 'Barras de Access',
    description: 'Liberá tu mente del estrés, ansiedad y pensamientos repetitivos con esta terapia innovadora.',
    image: 'https://images.unsplash.com/photo-1591630060069-7cb1f16261b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsaW5nJTIwaGFuZHMlMjBlbmVyZ3l8ZW58MXx8fHwxNzcwOTkzNjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    whatsappMessage: 'Hola, quiero agendar una sesión de Barras de Access con Lorena Echeverry.'
  }
];

const STORAGE_KEY = 'ananda:modules';
const ADMIN_FLAG_KEY = 'ananda:isAdmin';
const ADMIN_CODE = '123456';

const emptyModule: Module = {
  id: '',
  title: '',
  description: '',
  image: '',
  whatsappMessage: '',
  landing: undefined
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const buildId = (title: string, list: Module[]) => {
  const base = slugify(title) || 'area';
  let candidate = base;
  let counter = 1;

  while (list.some((module) => module.id === candidate)) {
    candidate = `${base}-${counter}`;
    counter += 1;
  }

  return candidate;
};

export default function HomePage() {
  const [modules, setModules] = useState<Module[]>(DEFAULT_MODULES);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCode, setAdminCode] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formModule, setFormModule] = useState<Module>(emptyModule);
  const [useLanding, setUseLanding] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [heroFileName, setHeroFileName] = useState('');
  const [secondaryFileName, setSecondaryFileName] = useState('');
  const [migrationApplied, setMigrationApplied] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem(STORAGE_KEY);
    const storedAdmin = localStorage.getItem(ADMIN_FLAG_KEY);

    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Module[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setModules(parsed);
        }
      } catch (error) {
        console.warn('No se pudo leer el contenido guardado. Se usará el contenido por defecto.', error);
      }
    }

    if (storedAdmin === '1') {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    if (migrationApplied) return;
    let updatedList = modules;

    const hasOldTerapia = modules.some((m) => m.id === 'terapia' && m.title === 'Terapia Holística');
    if (hasOldTerapia) {
      updatedList = updatedList.map((m) =>
        m.id === 'terapia'
          ? {
              ...m,
              title: 'Terapia Radiónica y Radiestesia',
              description: 'Sesiones personalizadas con enfoque radiónico y radiestesia para equilibrar cuerpo, mente y espíritu.',
              whatsappMessage: 'Hola, quiero información sobre Terapia Radiónica y Radiestesia en Casa Holística Ananda.'
            }
          : m
      );
    }

    const hasOldEscuela = modules.some((m) => m.id === 'escuela-espiritual' && m.title === 'Escuela Espiritual');
    if (hasOldEscuela) {
      updatedList = updatedList.map((m) =>
        m.id === 'escuela-espiritual'
          ? {
              ...m,
              title: 'Escuela Radiónica y Radiestesia',
              description: 'Entra al mundo de la radiónica, radiestesia y sanación holística con nuestros módulos transformadores.'
            }
          : m
      );
    }

    if (hasOldTerapia || hasOldEscuela) {
      setModules(updatedList);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    }
    setMigrationApplied(true);
  }, [modules, migrationApplied]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(modules));
  }, [modules]);

  const handleAdminSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (adminCode.trim() === ADMIN_CODE) {
      setIsAdmin(true);
      localStorage.setItem(ADMIN_FLAG_KEY, '1');
      setFeedback('Modo administrador activo.');
      setAdminCode('');
      setShowLogin(false);
    } else {
      setFeedback('Clave incorrecta.');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setFormOpen(false);
    setEditingId(null);
    localStorage.removeItem(ADMIN_FLAG_KEY);
    setFeedback('Sesión de administrador cerrada.');
    setShowLogin(false);
  };

  const startCreate = () => {
    setFormModule(emptyModule);
    setUseLanding(true);
    setEditingId(null);
    setHeroFileName('');
    setSecondaryFileName('');
    setFormOpen(true);
    setFeedback(null);
  };

  const startEdit = (module: Module) => {
    setFormModule(module);
    setUseLanding(Boolean(module.landing));
    setEditingId(module.id);
    setHeroFileName('');
    setSecondaryFileName('');
    setFormOpen(true);
    setFeedback(null);
  };

  const handleDelete = (id: string) => {
    if (!isAdmin) return;

    const confirmed = window.confirm('¿Eliminar esta área? Esta acción no se puede deshacer.');
    if (!confirmed) return;

    setModules((prev) => prev.filter((module) => module.id !== id));

    if (editingId === id) {
      setFormOpen(false);
      setEditingId(null);
      setFormModule(emptyModule);
    }

    if (selectedModule?.id === id) {
      setSelectedModule(null);
    }

    setFeedback('Área eliminada.');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formModule.title.trim() || !formModule.description.trim() || !formModule.image.trim() || !formModule.whatsappMessage.trim()) {
      setFeedback('Completa todos los campos para guardar.');
      return;
    }

    const finalId = editingId ?? buildId(formModule.title, modules);
    const landingFromForm = useLanding
      ? {
          heroTitle: formModule.landing?.heroTitle || defaultLanding.heroTitle,
          heroSubtitle: formModule.landing?.heroSubtitle || defaultLanding.heroSubtitle,
          heroDescription: formModule.landing?.heroDescription || defaultLanding.heroDescription,
          heroImage: formModule.landing?.heroImage || formModule.image || defaultLanding.heroImage,
          accentColor: formModule.landing?.accentColor || defaultLanding.accentColor,
          backgroundFrom: formModule.landing?.backgroundFrom || defaultLanding.backgroundFrom,
          backgroundTo: formModule.landing?.backgroundTo || defaultLanding.backgroundTo,
          bulletPoints: formModule.landing?.bulletPoints?.filter(Boolean) || defaultLanding.bulletPoints,
          ctaText: formModule.landing?.ctaText || defaultLanding.ctaText,
          whatsappNumber: formModule.landing?.whatsappNumber || defaultLanding.whatsappNumber
        }
      : undefined;

    const updatedModule: Module = { ...formModule, id: finalId, landing: landingFromForm };

    setModules((prev) => {
      const exists = prev.some((module) => module.id === finalId);
      return exists ? prev.map((module) => (module.id === finalId ? updatedModule : module)) : [...prev, updatedModule];
    });

    setFeedback(editingId ? 'Área actualizada.' : 'Área creada.');
    setFormOpen(false);
    setEditingId(null);
    setFormModule(emptyModule);
  };

  const hasCustomContent = useMemo(() => JSON.stringify(modules) !== JSON.stringify(DEFAULT_MODULES), [modules]);

  const updateLandingField = <K extends keyof LandingContent>(key: K, value: LandingContent[K]) => {
    setFormModule((prev) => ({
      ...prev,
      landing: {
        ...defaultLanding,
        ...(prev.landing || {}),
        [key]: value
      }
    }));
  };

  const bulletText = (formModule.landing?.bulletPoints || []).join('\n');

  const readFileAsDataUrl = (file: File, onLoad: (url: string) => void) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === 'string') onLoad(result);
    };
    reader.readAsDataURL(file);
  };

  const handleHeroFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setHeroFileName(file.name);
    readFileAsDataUrl(file, (url) => updateLandingField('heroImage', url));
  };

  const handleSecondaryFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSecondaryFileName(file.name);
    readFileAsDataUrl(file, (url) => updateLandingField('secondaryImage', url));
  };

  const handleDropHero = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    const urlFromDrag = event.dataTransfer.getData('text/uri-list') || event.dataTransfer.getData('text');
    if (file) {
      setHeroFileName(file.name);
      readFileAsDataUrl(file, (url) => updateLandingField('heroImage', url));
      return;
    }
    if (urlFromDrag && (urlFromDrag.startsWith('http') || urlFromDrag.startsWith('data:'))) {
      updateLandingField('heroImage', urlFromDrag.trim());
    }
  };

  const handleDropSecondary = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    const urlFromDrag = event.dataTransfer.getData('text/uri-list') || event.dataTransfer.getData('text');
    if (file) {
      setSecondaryFileName(file.name);
      readFileAsDataUrl(file, (url) => updateLandingField('secondaryImage', url));
      return;
    }
    if (urlFromDrag && (urlFromDrag.startsWith('http') || urlFromDrag.startsWith('data:'))) {
      updateLandingField('secondaryImage', urlFromDrag.trim());
    }
  };

  const handleAreaImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    readFileAsDataUrl(file, (url) => setFormModule((prev) => ({ ...prev, image: url })));
  };

  const handleDropAreaImage = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    const urlFromDrag = event.dataTransfer.getData('text/uri-list') || event.dataTransfer.getData('text');

    if (file) {
      readFileAsDataUrl(file, (url) => setFormModule((prev) => ({ ...prev, image: url })));
      return;
    }

    if (urlFromDrag && (urlFromDrag.startsWith('http') || urlFromDrag.startsWith('data:'))) {
      setFormModule((prev) => ({ ...prev, image: urlFromDrag.trim() }));
    }
  };

  const handleUpdateModule = (updated: Module) => {
    setModules((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));
    setSelectedModule(updated);
    setFeedback('Cambios guardados en esta landing.');
  };

  const handleCardClick = (module: Module) => {
    setSelectedModule(module);
  };

  const handleCloseModule = () => setSelectedModule(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f3f0] via-[#fef7f3] to-[#f0e8f5] relative overflow-hidden">
      <DecorativeElements />

      <div className="relative z-10 min-h-screen flex flex-col">
        <motion.header 
          className="py-6 px-4 sm:px-6 md:px-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <motion.div
              className="relative"
              animate={{ 
                filter: [
                  'drop-shadow(0 0 10px rgba(212, 102, 159, 0.3))',
                  'drop-shadow(0 0 20px rgba(135, 196, 212, 0.5))',
                  'drop-shadow(0 0 10px rgba(212, 102, 159, 0.3))'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={"/assets/be3b38b6a14b010a2707c08a3984632410545a20.png"} 
                alt="Casa Holística Ananda" 
                className="w-24 h-24 md:w-32 md:h-32 mb-3"
              />
            </motion.div>
            <h1 
              className="text-2xl md:text-4xl text-[#5a3d7d] text-center"
              style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
            >
              Casa Holística Ananda
            </h1>
            <p 
              className="text-base md:text-lg text-[#5a3d7d]/70 text-center mt-1"
              style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300 }}
            >
              Angélica Montes · Terapeuta
            </p>
          </div>
        </motion.header>

        <main className="flex-1 py-8 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <AdminPanel
              isAdmin={isAdmin}
              showLogin={showLogin}
              formOpen={formOpen}
              adminCode={adminCode}
              feedback={feedback}
              hasCustomContent={hasCustomContent}
              onToggleLogin={() => setShowLogin((open) => !open)}
              onCloseLogin={() => setShowLogin(false)}
              onSubmitCode={handleAdminSubmit}
              onChangeCode={setAdminCode}
              onLogout={handleLogout}
              onStartCreate={startCreate}
              onToggleForm={() => setFormOpen((open) => !open)}
            />

            {isAdmin && formOpen && (
              <AdminForm
                formOpen={formOpen}
                formModule={formModule}
                editingId={editingId}
                heroFileName={heroFileName}
                secondaryFileName={secondaryFileName}
                useLanding={useLanding}
                bulletText={bulletText}
                onToggleForm={() => setFormOpen((open) => !open)}
                onSubmit={handleSubmit}
                onChangeModule={setFormModule}
                onChangeUseLanding={setUseLanding}
                onAreaImageFile={handleAreaImageFile}
                onChangeHeroFile={handleHeroFileInput}
                onChangeSecondaryFile={handleSecondaryFileInput}
                onDropHero={handleDropHero}
                onDropSecondary={handleDropSecondary}
                onDropAreaImage={handleDropAreaImage}
                onChangeBulletText={(value) => updateLandingField('bulletPoints', value.split('\n'))}
                onChangeLandingField={updateLandingField}
                onCancel={() => {
                  setFormOpen(false);
                  setFormModule(emptyModule);
                  setEditingId(null);
                }}
                onStartCreate={startCreate}
              />
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 
                className="text-xl md:text-2xl text-[#5a3d7d] mb-3"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
              >
                Explora Nuestros Servicios
              </h2>
              <p 
                className="text-sm md:text-base text-[#5a3d7d]/80 max-w-2xl mx-auto"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Descubre un camino hacia el bienestar integral a través de nuestras áreas especializadas
              </p>
            </motion.div>

            <div id="modules" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {modules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#d4669f]/20 hover:border-[#d4669f]/50"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#5a3d7d]/60 z-10" />
                    <ImageWithFallback
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-4 space-y-3">
                    <h3 
                      className="text-lg md:text-xl text-[#5a3d7d] line-clamp-1"
                      style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
                    >
                      {module.title}
                    </h3>
                    <p 
                      className="text-sm text-[#5a3d7d]/80 leading-relaxed line-clamp-2"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {module.description}
                    </p>

                    <button
                      onClick={() => handleCardClick(module)}
                      className="w-full py-2 px-4 bg-gradient-to-r from-[#d4669f] to-[#87c4d4] text-white rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,102,159,0.5)] flex items-center justify-center gap-2 group/btn text-xs"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                    >
                      Ver más
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {isAdmin && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(module)}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full border border-[#d4669f]/30 text-[#5a3d7d] text-xs font-semibold bg-white"
                        >
                          <Pencil className="w-4 h-4" /> Editar
                        </button>
                        <button
                          onClick={() => handleDelete(module.id)}
                          className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full border border-[#d4669f]/30 text-[#d4669f] text-xs font-semibold bg-white"
                        >
                          <Trash2 className="w-4 h-4" /> Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <GallerySection />
        <LocationSection />
        <Footer />
      </div>

      {selectedModule && (
        selectedModule.landing ? (
          <ModuleDetail
            moduleId={selectedModule.id}
            module={selectedModule}
            onClose={handleCloseModule}
            isAdmin={isAdmin}
            onUpdateModule={handleUpdateModule}
          />
        ) : (
          <>
            {selectedModule.id === 'escuela-espiritual' && (
              <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule} isAdmin={isAdmin} onUpdateModule={handleUpdateModule}>
                <EscuelaEspiritualContent />
              </ModuleDetail>
            )}
            {selectedModule.id === 'constelaciones' && (
              <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule} isAdmin={isAdmin} onUpdateModule={handleUpdateModule}>
                <ConstelacionesFamiliaresDetail />
              </ModuleDetail>
            )}
            {selectedModule.id === 'hipnosis' && (
              <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule} isAdmin={isAdmin} onUpdateModule={handleUpdateModule}>
                <HipnosisDetail />
              </ModuleDetail>
            )}
            {selectedModule.id === 'astrologia' && (
              <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule} isAdmin={isAdmin} onUpdateModule={handleUpdateModule}>
                <AstrologiaDetail />
              </ModuleDetail>
            )}
            {selectedModule.id !== 'escuela-espiritual' && selectedModule.id !== 'constelaciones' && selectedModule.id !== 'hipnosis' && selectedModule.id !== 'astrologia' && (
              <ModuleDetail moduleId={selectedModule.id} module={selectedModule} onClose={handleCloseModule} isAdmin={isAdmin} onUpdateModule={handleUpdateModule} />
            )}
          </>
        )
      )}
    </div>
  );
}