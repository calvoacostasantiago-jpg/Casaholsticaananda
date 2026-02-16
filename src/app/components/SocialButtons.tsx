import { motion } from 'motion/react';
import { Instagram, MessageCircle } from 'lucide-react';

export default function SocialButtons() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/573226639527?text=Hola,%20quiero%20información%20sobre%20Casa%20Holística%20Ananda', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/casaholisticaananda', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        className="p-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Instagram Button */}
      <motion.button
        onClick={handleInstagram}
        className="p-4 bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(225,48,108,0.6)] transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Instagram className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
