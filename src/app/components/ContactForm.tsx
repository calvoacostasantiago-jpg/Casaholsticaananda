import { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje para WhatsApp
    const message = `Hola, estoy interesado en un módulo futuro.\n\nNombre: ${formData.name}\nCorreo: ${formData.email}`;
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/573226639527?text=${encodeURIComponent(message)}`, '_blank');
    
    // Limpiar formulario
    setFormData({ name: '', email: '' });
  };

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2e0d4b] via-[#4a0d7a] to-[#2e0d4b]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37] rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Form card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-[#3d1860] border-2 border-[#d4af37]/50 rounded-3xl p-8 md:p-12">
            {/* Header */}
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl text-[#d4af37] text-center mb-6 uppercase"
              style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
            >
              ¿Te interesa algún módulo futuro?
            </h2>
            
            <p 
              className="text-base sm:text-lg text-white/90 text-center mb-8"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Déjanos tu información y te contactaremos cuando se habilite el módulo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nombre */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-[#2e0d4b]/80 border border-[#d4af37]/30 rounded-2xl text-white/90 placeholder-white/40 focus:outline-none focus:border-[#d4af37] transition-all duration-300"
                  placeholder="Nombre"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-[#2e0d4b]/80 border border-[#d4af37]/30 rounded-2xl text-white/90 placeholder-white/40 focus:outline-none focus:border-[#d4af37] transition-all duration-300"
                  placeholder="Correo electrónico"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#2e0d4b] rounded-full uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '16px' }}
              >
                NOTIFICARME
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
