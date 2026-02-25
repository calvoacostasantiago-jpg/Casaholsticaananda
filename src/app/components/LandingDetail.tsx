import { motion } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { LandingContent } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingDetailProps {
  landing: LandingContent;
  onWhatsApp: (message?: string, phone?: string) => void;
}

export function LandingDetail({ landing, onWhatsApp }: LandingDetailProps) {
  const {
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroImage,
    secondaryImage,
    accentColor,
    backgroundFrom,
    backgroundTo,
    bulletPoints,
    ctaText,
    whatsappNumber,
    therapistName,
    serviceName,
    instagramUrl,
    facebookUrl,
    templateType,
  } = landing;

  const handleCTA = () => {
    onWhatsApp(landing.ctaText || undefined, whatsappNumber);
  };

  if (templateType === 'plantilla2') {
    return (
      <div className="relative overflow-hidden" style={{ background: `radial-gradient(circle at 20% 20%, ${accentColor}22, transparent 30%), radial-gradient(circle at 80% 10%, ${backgroundTo}22, transparent 30%), linear-gradient(135deg, ${backgroundFrom}, ${backgroundTo})` }}>
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(14)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: [0, 1, 0], scale: [0.7, 1.15, 0.7], rotate: [0, 120, 240, 360] }}
              transition={{ duration: 5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Sparkles className="w-3 h-3" style={{ color: accentColor }} />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-4 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${accentColor}33`, color: accentColor }}>
                <Sparkles className="w-3 h-3" /> Casa Holística Ananda
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]">{heroTitle}</h1>
              <p className="text-lg font-semibold" style={{ color: accentColor }}>{heroSubtitle}</p>
              {therapistName && (
                <p className="text-white/85 text-sm uppercase tracking-[0.2em]">Terapeuta: <span className="font-semibold" style={{ color: accentColor }}>{therapistName}</span></p>
              )}
              {serviceName && (
                <p className="text-white/80 text-sm">Servicio: <span className="font-semibold" style={{ color: accentColor }}>{serviceName}</span></p>
              )}
              <p className="text-white/85 leading-relaxed">{heroDescription}</p>

              <div className="space-y-3">
                <p className="text-white/75 text-sm">Beneficios principales</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {bulletPoints.filter(Boolean).map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm bg-white/5 rounded-xl px-3 py-2 border border-white/10">
                      <span className="mt-0.5" style={{ color: accentColor }}>•</span>
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={handleCTA}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white shadow-lg transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}, ${backgroundTo})`,
                    border: '1px solid rgba(255,255,255,0.18)'
                  }}
                >
                  <MessageCircle className="w-4 h-4" /> {ctaText || 'Hablar por WhatsApp'}
                </button>
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/90 border border-white/20 hover:border-white/40"
                  >
                    Instagram
                  </a>
                )}
                {facebookUrl && (
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/90 border border-white/20 hover:border-white/40"
                  >
                    Facebook
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="grid gap-4">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-white/10">
                <div className="relative h-64 md:h-80">
                  <ImageWithFallback src={heroImage} alt={heroTitle} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${backgroundFrom}80, transparent)` }} />
                </div>
              </div>
              {secondaryImage && (
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-white/10">
                  <div className="relative h-48 md:h-64">
                    <ImageWithFallback src={secondaryImage} alt={heroSubtitle || heroTitle} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${backgroundTo}66, transparent)` }} />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${backgroundFrom}, ${backgroundTo})` }}>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6], rotate: [0, 180, 360] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: accentColor }} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12 space-y-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-4 text-white">
            <p className="text-sm uppercase tracking-[0.2em]" style={{ color: accentColor }}>Casa Holística Ananda</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{heroTitle}</h1>
            <p className="text-xl font-semibold" style={{ color: accentColor }}>
              {heroSubtitle}
            </p>
            {therapistName && (
              <p className="text-white/85 text-sm uppercase tracking-[0.18em]">Terapeuta: <span className="font-semibold" style={{ color: accentColor }}>{therapistName}</span></p>
            )}
            {serviceName && (
              <p className="text-white/80 text-sm">Servicio: <span className="font-semibold" style={{ color: accentColor }}>{serviceName}</span></p>
            )}
            <p className="text-white/85 leading-relaxed">{heroDescription}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {bulletPoints.filter(Boolean).map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm bg-white/5 rounded-xl px-3 py-2 border border-white/10">
                  <span className="mt-0.5" style={{ color: accentColor }}>•</span>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={handleCTA}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white shadow-lg transition-all"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, ${backgroundTo})`,
                  border: '1px solid rgba(255,255,255,0.18)'
                }}
              >
                <MessageCircle className="w-4 h-4" /> {ctaText || 'Hablar por WhatsApp'}
              </button>
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/90 border border-white/20 hover:border-white/40"
                >
                  Instagram
                </a>
              )}
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/90 border border-white/20 hover:border-white/40"
                >
                  Facebook
                </a>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-white/10">
            <div className="relative h-64 md:h-96">
              <ImageWithFallback src={heroImage} alt={heroTitle} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${backgroundFrom}66, transparent)` }} />
            </div>
            {secondaryImage && (
              <div className="relative h-52 md:h-64 border-t border-white/10">
                <ImageWithFallback src={secondaryImage} alt={heroSubtitle || heroTitle} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${backgroundTo}55, transparent)` }} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
