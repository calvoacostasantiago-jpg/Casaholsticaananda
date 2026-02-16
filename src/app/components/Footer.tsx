import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+57 322 663 9527",
      link: "https://wa.me/573226639527"
    },
    {
      icon: Mail,
      label: "Email",
      value: "casaanandayosoy@gmail.com",
      link: "mailto:casaanandayosoy@gmail.com"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Calle 22 Norte #11-80, Barrio Coinca, Armenia, Quindío",
      link: "https://maps.app.goo.gl/A4abd7A7Qky3cXCr6"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/casaholisticaananda?igsh=OHplcXN2dmRqNm9w"
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://facebook.com/entralmundo"
    },
    {
      icon: Youtube,
      label: "YouTube",
      link: "https://youtube.com/@entralmundo"
    }
  ];

  const quickLinks = [
    { label: "Inicio", href: "#" },
    { label: "Módulos", href: "#modules" },
    { label: "Sobre Angélica", href: "#about" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#2e0d4b] to-[#1a0829] pt-20 pb-8 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a0d7a] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="text-2xl md:text-3xl text-[#d4af37] mb-4 uppercase tracking-wider"
              style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
            >
              ENTRA AL MUNDO
            </h3>
            <p 
              className="text-sm text-[#f0d9a8] uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Radiónica y Radiestesia Vibra Alto
            </p>
            <p 
              className="text-white/70 leading-relaxed mb-6 max-w-md"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Transformamos vidas a través de la enseñanza consciente de la radiónica y la radiestesia. 
              Únete a nuestra comunidad de seres de luz en constante evolución.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-[#4a0d7a]/40 to-[#2e0d4b]/40 border border-[#d4af37]/30 rounded-full hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#d4af37]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 
              className="text-lg text-[#d4af37] mb-6 uppercase tracking-wide"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-2 group"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    <span className="w-0 h-0.5 bg-[#d4af37] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 
              className="text-lg text-[#d4af37] mb-6 uppercase tracking-wide"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-3 text-white/70 hover:text-[#d4af37] transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-[#4a0d7a]/30 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                        <item.icon className="w-4 h-4 text-[#d4af37]" />
                      </div>
                      <div>
                        <p 
                          className="text-xs text-[#f0d9a8]/60 uppercase tracking-wide mb-1"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                        >
                          {item.label}
                        </p>
                        <p style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-white/70">
                      <div className="p-2 bg-[#4a0d7a]/30 rounded-lg">
                        <item.icon className="w-4 h-4 text-[#d4af37]" />
                      </div>
                      <div>
                        <p 
                          className="text-xs text-[#f0d9a8]/60 uppercase tracking-wide mb-1"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                        >
                          {item.label}
                        </p>
                        <p style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-8" />

        {/* Bottom footer */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p 
            className="text-white/50 text-sm text-center md:text-left"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            © {currentYear} Entra al Mundo. Todos los derechos reservados.
          </p>
        </motion.div>

        {/* Spiritual message */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p 
            className="text-[#d4af37]/60 text-sm italic"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            ✨ Que la luz y el amor guíen tu camino ✨
          </p>
        </motion.div>
      </div>
    </footer>
  );
}