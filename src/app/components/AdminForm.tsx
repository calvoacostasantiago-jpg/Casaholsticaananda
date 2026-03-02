import type { Dispatch, FormEvent, SetStateAction } from 'react';
import { Save, X, Pencil, Plus } from 'lucide-react';
import type { LandingContent, Module } from '../types';
import { defaultLanding } from '../defaults/landing';

interface AdminFormProps {
  formOpen: boolean;
  formModule: Module;
  editingId: string | null;
  heroFileName: string;
  secondaryFileName: string;
  useLanding: boolean;
  bulletText: string;
  onToggleForm: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChangeModule: Dispatch<SetStateAction<Module>>;
  onChangeUseLanding: (value: boolean) => void;
  onAreaImageFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeHeroFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSecondaryFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDropHero: (event: React.DragEvent<HTMLDivElement>) => void;
  onDropSecondary: (event: React.DragEvent<HTMLDivElement>) => void;
  onDropAreaImage: (event: React.DragEvent<HTMLDivElement>) => void;
  onChangeLandingField: <K extends keyof LandingContent>(key: K, value: LandingContent[K]) => void;
  onChangeBulletText: (value: string) => void;
  onStartCreate: () => void;
  onCancel: () => void;
}

export function AdminForm({
  formOpen,
  formModule,
  editingId,
  heroFileName,
  secondaryFileName,
  useLanding,
  bulletText,
  onToggleForm,
  onSubmit,
  onChangeModule,
  onChangeUseLanding,
  onAreaImageFile,
  onChangeHeroFile,
  onChangeSecondaryFile,
  onDropHero,
  onDropSecondary,
  onDropAreaImage,
  onChangeLandingField,
  onChangeBulletText,
  onStartCreate,
  onCancel,
}: AdminFormProps) {
  return (
    <section className="mb-8">
      <div className="bg-white/80 backdrop-blur-sm border border-[#d4669f]/20 rounded-2xl p-4 md:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 text-[#5a3d7d] font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <Pencil className="w-4 h-4" /> Editor de áreas
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onStartCreate}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4669f] to-[#87c4d4] text-white text-sm font-semibold shadow-sm"
            >
              <Plus className="w-4 h-4" /> Nueva área
            </button>
            <button
              type="button"
              onClick={onToggleForm}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4669f]/30 text-[#5a3d7d] text-sm font-semibold bg-white"
            >
              <X className="w-4 h-4" /> Cerrar editor
            </button>
          </div>
        </div>

        {formOpen && (
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Título del área</label>
              <input
                value={formModule.title}
                onChange={(event) => onChangeModule((prev) => ({ ...prev, title: event.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                placeholder="Ej. Terapia Holística"
              />
              <p className="text-xs text-[#5a3d7d]/70" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                ID: {editingId ?? (formModule.title ? formModule.id || formModule.title.toLowerCase().replace(/\s+/g, '-') : 'se genera automáticamente')}
              </p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Link de imagen</label>
              <div className="grid gap-2">
                <input
                  value={formModule.image}
                  onChange={(event) => onChangeModule((prev) => ({ ...prev, image: event.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                  placeholder="Pega un link o arrastra una imagen"
                />
                <div className="flex items-center gap-2">
                    <label className="px-3 py-2 rounded-full border border-[#d4669f]/30 text-[#5a3d7d] text-xs font-semibold bg-white cursor-pointer">
                      Subir imagen
                      <input type="file" accept="image/*" className="hidden" onChange={onAreaImageFile} />
                  </label>
                  <span className="text-[11px] text-[#5a3d7d]/70">Arrastra o sube para cambiar la imagen de la tarjeta.</span>
                </div>
                <div
                  onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  onDrop={onDropAreaImage}
                  className="w-full rounded-lg border border-dashed border-[#d4669f]/40 bg-white/70 text-[#5a3d7d] text-xs p-3"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  Arrastra aquí la nueva imagen de la tarjeta del área.
                </div>
                {formModule.image && (
                  <div className="relative overflow-hidden rounded-xl border border-[#d4669f]/30 bg-white/60">
                    <img src={formModule.image} alt="Previsualización tarjeta" className="w-full h-32 object-cover" />
                  </div>
                )}
              </div>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Descripción corta</label>
              <textarea
                value={formModule.description}
                onChange={(event) => onChangeModule((prev) => ({ ...prev, description: event.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-[#d4669f]/30 bg-white min-h-[80px]"
                placeholder="Texto que aparece en la tarjeta"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Mensaje de WhatsApp</label>
              <textarea
                value={formModule.whatsappMessage}
                onChange={(event) => onChangeModule((prev) => ({ ...prev, whatsappMessage: event.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-[#d4669f]/30 bg-white min-h-[80px]"
                placeholder="Mensaje precargado al abrir WhatsApp"
              />
            </div>

            <div className="md:col-span-2 border-t border-[#d4669f]/15 pt-4 mt-2 space-y-3">
              <div className="flex items-center gap-3">
                <input
                  id="landing-toggle"
                  type="checkbox"
                  checked={useLanding}
                  onChange={(event) => onChangeUseLanding(event.target.checked)}
                  className="w-4 h-4 text-[#d4669f] border-[#d4669f]/40 rounded"
                />
                <label htmlFor="landing-toggle" className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Usar landing prediseñada (editable)
                </label>
              </div>

              {useLanding && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="md:col-span-2 grid gap-3 lg:grid-cols-3">
                    <div className="p-3 rounded-2xl border border-[#d4669f]/25 bg-white/70 shadow-sm">
                      <p className="text-xs font-semibold text-[#5a3d7d] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Plantilla 1</p>
                      <div className="rounded-xl p-3 border border-[#d4669f]/20 bg-gradient-to-br from-white to-[#fef7f3]">
                        <div className="h-3 w-16 bg-[#d4669f]/50 rounded mb-2"></div>
                        <div className="h-3 w-24 bg-[#87c4d4]/40 rounded mb-4"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-16 rounded-lg bg-[#d4669f]/20"></div>
                          <div className="h-16 rounded-lg bg-[#87c4d4]/20"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 rounded-2xl border border-[#d4669f]/25 bg-white/70 shadow-sm">
                      <p className="text-xs font-semibold text-[#5a3d7d] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Plantilla 2</p>
                      <div className="rounded-xl p-3 border border-[#d4669f]/20 bg-gradient-to-br from-white to-[#fef7f3]">
                        <div className="h-4 w-24 bg-[#d4669f]/40 rounded mb-3"></div>
                        <div className="h-3 w-20 bg-[#87c4d4]/40 rounded mb-2"></div>
                        <div className="h-20 rounded-lg bg-[#d4669f]/15"></div>
                      </div>
                    </div>
                    <div className="p-3 rounded-2xl border border-[#d4669f]/25 bg-white/70 shadow-sm">
                      <p className="text-xs font-semibold text-[#5a3d7d] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Vista previa rápida</p>
                      <div
                        className="rounded-xl p-3 border border-[#d4669f]/20"
                        style={{
                          background: `linear-gradient(135deg, ${formModule.landing?.backgroundFrom || defaultLanding.backgroundFrom}, ${formModule.landing?.backgroundTo || defaultLanding.backgroundTo})`
                        }}
                      >
                        <p className="text-white text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{formModule.landing?.heroTitle || 'Título'}</p>
                        <p className="text-white/80 text-xs mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>{formModule.landing?.heroSubtitle || 'Subtítulo'}</p>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-white/85" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          <div className="rounded-lg bg-black/15 p-2 min-h-[50px]">
                            Img 1
                          </div>
                          <div className="rounded-lg bg-black/15 p-2 min-h-[50px]">
                            Img 2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Diseño de plantilla</label>
                    <select
                      value={formModule.landing?.templateType || 'plantilla1'}
                      onChange={(event) => onChangeLandingField('templateType', event.target.value as LandingContent['templateType'])}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                    >
                      <option value="plantilla1">Plantilla 1 · Terapeuta con 2 imágenes</option>
                      <option value="plantilla2">Plantilla 2 · Perfil inmersivo</option>
                    </select>
                    <p className="text-xs text-[#5a3d7d]/70" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                      Plantilla 1: título, subtítulo, terapeuta, servicio, beneficios, 2 imágenes, botones de WhatsApp/Instagram/Facebook. Plantilla 2: diseño narrativo con sección de confianza y CTA destacado.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Título grande</label>
                    <input
                      value={formModule.landing?.heroTitle || ''}
                      onChange={(event) => onChangeLandingField('heroTitle', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="Ej. Constelaciones Familiares"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Subtítulo</label>
                    <input
                      value={formModule.landing?.heroSubtitle || ''}
                      onChange={(event) => onChangeLandingField('heroSubtitle', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="Ej. Terapia Sistémica Profunda"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Nombre del terapeuta</label>
                    <input
                      value={formModule.landing?.therapistName || ''}
                      onChange={(event) => onChangeLandingField('therapistName', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="Ej. Angélica Montes"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Servicio</label>
                    <input
                      value={formModule.landing?.serviceName || ''}
                      onChange={(event) => onChangeLandingField('serviceName', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="Ej. Sesiones individuales"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Descripción héroe</label>
                    <textarea
                      value={formModule.landing?.heroDescription || ''}
                      onChange={(event) => onChangeLandingField('heroDescription', event.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-[#d4669f]/30 bg-white min-h-[80px]"
                      placeholder="Texto introductorio de la landing"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Imagen héroe</label>
                    <div className="grid gap-2">
                      <input
                        value={formModule.landing?.heroImage || ''}
                        onChange={(event) => onChangeLandingField('heroImage', event.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                        placeholder="Pega un link o arrastra una imagen"
                      />
                      <div className="flex items-center gap-2">
                        <label className="px-3 py-2 rounded-full border border-[#d4669f]/30 text-[#5a3d7d] text-xs font-semibold bg-white cursor-pointer">
                          Subir imagen
                          <input type="file" accept="image/*" className="hidden" onChange={onChangeHeroFile} />
                        </label>
                        <span className="text-[11px] text-[#5a3d7d]/70">{heroFileName || 'Imagen actual o link'}</span>
                      </div>
                      <div
                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onDrop={onDropHero}
                        className="w-full rounded-lg border border-dashed border-[#d4669f]/40 bg-white/70 text-[#5a3d7d] text-xs p-3"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        Arrastra una imagen aquí (desde tu PC o desde la web) y la veremos en la landing.
                      </div>
                      {formModule.landing?.heroImage && (
                        <div className="relative overflow-hidden rounded-xl border border-[#d4669f]/30 bg-white/60">
                          <img src={formModule.landing.heroImage} alt="Previsualización héroe" className="w-full h-36 object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Imagen secundaria</label>
                    <div className="grid gap-2">
                      <input
                        value={formModule.landing?.secondaryImage || ''}
                        onChange={(event) => onChangeLandingField('secondaryImage', event.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                        placeholder="Pega un link o arrastra una imagen"
                      />
                      <div className="flex items-center gap-2">
                        <label className="px-3 py-2 rounded-full border border-[#d4669f]/30 text-[#5a3d7d] text-xs font-semibold bg-white cursor-pointer">
                          Subir imagen
                          <input type="file" accept="image/*" className="hidden" onChange={onChangeSecondaryFile} />
                        </label>
                        <span className="text-[11px] text-[#5a3d7d]/70">{secondaryFileName || 'Imagen actual o link'}</span>
                      </div>
                      <div
                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        onDrop={onDropSecondary}
                        className="w-full rounded-lg border border-dashed border-[#d4669f]/40 bg-white/70 text-[#5a3d7d] text-xs p-3"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        Arrastra aquí la imagen secundaria.
                      </div>
                      {formModule.landing?.secondaryImage && (
                        <div className="relative overflow-hidden rounded-xl border border-[#d4669f]/30 bg-white/60">
                          <img src={formModule.landing.secondaryImage} alt="Previsualización secundaria" className="w-full h-28 object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Puntos clave (uno por línea)</label>
                    <textarea
                      value={bulletText}
                      onChange={(event) => onChangeBulletText(event.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-[#d4669f]/30 bg-white min-h-[80px]"
                      placeholder={`Beneficio 1\nBeneficio 2`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Color acento (hex)</label>
                    <input
                      value={formModule.landing?.accentColor || ''}
                      onChange={(event) => onChangeLandingField('accentColor', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="#e0c3fc"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Fondo desde (hex)</label>
                    <input
                      value={formModule.landing?.backgroundFrom || ''}
                      onChange={(event) => onChangeLandingField('backgroundFrom', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="#1a237e"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Fondo hasta (hex)</label>
                    <input
                      value={formModule.landing?.backgroundTo || ''}
                      onChange={(event) => onChangeLandingField('backgroundTo', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="#0d133d"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Texto CTA</label>
                    <input
                      value={formModule.landing?.ctaText || ''}
                      onChange={(event) => onChangeLandingField('ctaText', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="Agenda por WhatsApp"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>WhatsApp (solo números)</label>
                    <input
                      value={formModule.landing?.whatsappNumber || ''}
                      onChange={(event) => onChangeLandingField('whatsappNumber', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="573226639527"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Instagram (opcional)</label>
                    <input
                      value={formModule.landing?.instagramUrl || ''}
                      onChange={(event) => onChangeLandingField('instagramUrl', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="https://instagram.com/usuario"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#5a3d7d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Facebook (opcional)</label>
                    <input
                      value={formModule.landing?.facebookUrl || ''}
                      onChange={(event) => onChangeLandingField('facebookUrl', event.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white"
                      placeholder="https://facebook.com/usuario"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-3 justify-end">
              <button
                type="button"
                onClick={onCancel}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4669f]/30 text-[#5a3d7d] text-sm font-semibold bg-white"
              >
                <X className="w-4 h-4" /> Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4669f] to-[#87c4d4] text-white text-sm font-semibold shadow-sm"
              >
                <Save className="w-4 h-4" /> {editingId ? 'Guardar cambios' : 'Guardar área'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}