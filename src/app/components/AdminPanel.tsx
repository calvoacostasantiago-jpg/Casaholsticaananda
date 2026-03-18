import type { FormEvent } from 'react';
import { Lock, ShieldCheck, Plus, Pencil, LogOut, X } from 'lucide-react';

interface AdminPanelProps {
  isAdmin: boolean;
  showLogin: boolean;
  formOpen: boolean;
  adminCode: string;
  feedback: string | null;
  hasCustomContent: boolean;
  onToggleLogin: () => void;
  onCloseLogin: () => void;
  onSubmitCode: (event: FormEvent<HTMLFormElement>) => void;
  onChangeCode: (value: string) => void;
  onLogout: () => void;
  onStartCreate: () => void;
  onToggleForm: () => void;
}

export function AdminPanel({
  isAdmin,
  showLogin,
  formOpen,
  adminCode,
  feedback,
  hasCustomContent,
  onToggleLogin,
  onCloseLogin,
  onSubmitCode,
  onChangeCode,
  onLogout,
  onStartCreate,
  onToggleForm,
}: AdminPanelProps) {
  return (
    <>
      {!isAdmin && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={onToggleLogin}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#d4669f]/40 text-[#5a3d7d] shadow-sm hover:shadow-md"
          >
            <Lock className="w-4 h-4" /> Ingresar como administrador
          </button>
        </div>
      )}

      {showLogin && !isAdmin && (
        <div className="fixed top-16 right-4 z-50 w-[300px] max-w-[90vw]">
          <div className="bg-white/95 backdrop-blur-sm border border-[#d4669f]/30 rounded-2xl shadow-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-[#5a3d7d] font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <ShieldCheck className="w-4 h-4" /> Acceso admin
              </div>
              <button onClick={onCloseLogin} className="text-[#5a3d7d]/70 hover:text-[#5a3d7d]">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={onSubmitCode} className="space-y-3">
              <input
                type="password"
                value={adminCode}
                onChange={(event) => onChangeCode(event.target.value)}
                placeholder="Contraseña"
                className="w-full px-4 py-2 rounded-lg border border-[#d4669f]/30 bg-white text-[#5a3d7d]"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4669f] to-[#87c4d4] text-white text-sm font-semibold shadow-sm"
              >
                <Lock className="w-4 h-4" /> Entrar
              </button>
            </form>
          </div>
        </div>
      )}

      {isAdmin && (
        <section id="admin" className="mb-8">
          <div className="bg-white/80 backdrop-blur-sm border border-[#d4669f]/20 rounded-2xl p-4 md:p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3 text-[#5a3d7d]">
                <ShieldCheck className="w-5 h-5" />
                <div>
                  <p className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Modo administrador activo</p>
                  <p className="text-sm text-[#5a3d7d]/70" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Edita o agrega áreas. Los cambios se guardan en este dispositivo.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={onStartCreate}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4669f] to-[#87c4d4] text-white text-sm font-semibold shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Nueva área
                </button>
                <button
                  onClick={onToggleForm}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4669f]/30 text-[#5a3d7d] text-sm font-semibold bg-white"
                >
                  {formOpen ? <X className="w-4 h-4" /> : <Pencil className="w-4 h-4" />} {formOpen ? 'Cerrar editor' : 'Abrir editor'}
                </button>
                <button
                  onClick={onLogout}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4669f]/30 text-[#d4669f] text-sm font-semibold bg-white"
                >
                  <LogOut className="w-4 h-4" /> Salir
                </button>
              </div>
            </div>

            {feedback && (
              <p className="mt-3 text-sm text-[#5a3d7d]/80" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                {feedback}
                {hasCustomContent && ' · Contenido guardado en este navegador.'}
              </p>
            )}
          </div>
        </section>
      )}
    </>
  );
}