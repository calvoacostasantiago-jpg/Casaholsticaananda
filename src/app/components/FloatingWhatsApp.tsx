import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      title: "Inscripción Módulo 1",
      message: "Hola, quiero inscribirme al Módulo 1 de Radiónica y Radiestesia"
    },
    {
      title: "Información General",
      message: "Hola, me gustaría recibir más información sobre los cursos"
    },
    {
      title: "Consulta Personalizada",
      message: "Hola Angélica, me gustaría agendar una consulta personalizada"
    }
  ];

  const handleQuickMessage = (message: string) => {
    window.open(`https://wa.me/573226639527?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  const handleDirectWhatsApp = () => {
    window.open('https://wa.me/573226639527', '_blank');
  };

  return (
    <>
      {/* Main floating button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-4 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="WhatsApp"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-7 h-7" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulse animation */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          )}
        </motion.button>
      </motion.div>

      {/* Quick message menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="bg-gradient-to-br from-[#2e0d4b] to-[#4a0d7a] backdrop-blur-md border-2 border-[#d4af37]/40 rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.3)] overflow-hidden">
              {/* Header */}
              <div className="p-4 bg-gradient-to-r from-[#d4af37]/20 to-[#f0d9a8]/20 border-b border-[#d4af37]/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#25D366] rounded-full">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-[#d4af37] font-bold"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      ¡Conectemos!
                    </h3>
                    <p 
                      className="text-xs text-white/70"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      Elige una opción o envía un mensaje
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick messages */}
              <div className="p-3 space-y-2">
                {quickMessages.map((msg, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleQuickMessage(msg.message)}
                    className="w-full p-3 bg-gradient-to-r from-[#4a0d7a]/40 to-[#2e0d4b]/40 hover:from-[#4a0d7a]/60 hover:to-[#2e0d4b]/60 border border-[#d4af37]/20 hover:border-[#d4af37]/40 rounded-xl text-left transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p 
                      className="text-sm text-[#d4af37] mb-1 group-hover:text-[#f0d9a8]"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                    >
                      {msg.title}
                    </p>
                    <p 
                      className="text-xs text-white/60"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {msg.message}
                    </p>
                  </motion.button>
                ))}

                {/* Direct WhatsApp button */}
                <motion.button
                  onClick={handleDirectWhatsApp}
                  className="w-full p-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Abrir WhatsApp
                </motion.button>
              </div>

              {/* Footer */}
              <div className="px-4 py-3 bg-gradient-to-r from-[#d4af37]/10 to-[#f0d9a8]/10 border-t border-[#d4af37]/30">
                <p 
                  className="text-xs text-center text-white/60"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  Respuesta en minutos ✨
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}