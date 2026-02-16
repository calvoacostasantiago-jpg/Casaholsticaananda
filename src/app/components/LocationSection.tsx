import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Building2, Check, MessageCircle } from 'lucide-react';

export default function LocationSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Calle 22 Norte #11-80, Barrio Coinca, Armenia, Quindío',
      link: 'https://google.com/maps/place/Casa+Holística+Ananda/@4.5590566,-75.6587428,16z/data=!4m7!3m6!1s0x8e38f57125a6bbbf:0x98e6ec3328045bc2!8m2!3d4.5590552!4d-75.6540593!15sCgtjYXNh+YW5hbmRhYZIBHmhvbGlzdGljX21lZGljaW5lX3ByYWN0aXRpb25lcuABAA!16s%2Fg%2F11yyy1h3sp?entry=tts&g_ep=EgoyMDI2MDEyNi4wIPu8ASoASAFQAw%3D%3D&skid=a6295d0e-602b-4fe0-b7f8-4d8dbef5a3c4'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '322 663 9527',
      link: 'tel:+573226639527'
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lunes a Sábado: 9:00 AM - 7:00 PM',
      link: null
    }
  ];

  const spaceFeatures = [
    'Espacios amplios y luminosos',
    'Ambiente tranquilo y profesional',
    'Ubicación céntrica en Armenia',
    'Servicios públicos incluidos',
    'Acceso a zonas comunes',
    'Ideal para terapeutas y profesionales'
  ];

  const handleInstagram = () => {
    window.open('https://instagram.com/casaholisticaananda', '_blank');
  };

  const handleRentWhatsApp = () => {
    const message = encodeURIComponent('Hola Angélica, me interesa conocer más sobre la renta de espacios en Casa Holística Ananda. ¿Podrías darme más información?');
    window.open(`https://wa.me/573226639527?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#87c4d4]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#d4669f]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl text-[#5a3d7d] mb-4"
            style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
          >
            Encuéntranos
          </h2>
          <p 
            className="text-base md:text-lg text-[#5a3d7d]/80 max-w-2xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Te esperamos en nuestro espacio holístico en Armenia, Quindío
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Contact Cards - Left Column */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#d4669f]/20 hover:border-[#d4669f]/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-[#d4669f] to-[#87c4d4] rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-base text-[#5a3d7d] mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                      >
                        {info.title}
                      </h3>
                      <p 
                        className="text-sm text-[#5a3d7d]/80"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        {info.content}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#d4669f]/20">
                    <div className="p-3 bg-gradient-to-br from-[#d4669f] to-[#87c4d4] rounded-xl">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-base text-[#5a3d7d] mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                      >
                        {info.title}
                      </h3>
                      <p 
                        className="text-sm text-[#5a3d7d]/80"
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        {info.content}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Instagram Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-[#d4669f]/20 to-[#87c4d4]/20 rounded-2xl p-6 border border-[#d4669f]/30 text-center"
            >
              <Instagram className="w-10 h-10 text-[#d4669f] mx-auto mb-3" />
              <h3 
                className="text-lg text-[#5a3d7d] mb-2"
                style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
              >
                Síguenos
              </h3>
              <button
                onClick={handleInstagram}
                className="px-6 py-2.5 bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white rounded-full text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,48,108,0.5)] hover:scale-105 inline-flex items-center gap-2"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                <Instagram className="w-4 h-4" />
                @casaholisticaananda
              </button>
            </motion.div>
          </div>

          {/* Map & Rental Section - Right Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-80 rounded-3xl overflow-hidden border-2 border-[#d4669f]/30 shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5765447254705!2d-75.6587428!3d4.5590566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f57125a6bbbf%3A0x98e6ec3328045bc2!2sCasa%20Hol%C3%ADstica%20Ananda!5e0!3m2!1ses!2sco!4v1234567890!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Casa Holística Ananda"
              />
            </motion.div>

            {/* Rental CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-white/90 to-[#f0e8f5]/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#d4669f]/30 shadow-xl relative overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#d4669f]/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#87c4d4]/20 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#d4669f] to-[#87c4d4] rounded-2xl">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 
                  className="text-2xl md:text-3xl text-[#5a3d7d] text-center mb-3"
                  style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
                >
                  Renta de Espacios
                </h3>

                <p 
                  className="text-base text-[#5a3d7d]/80 text-center mb-6 max-w-xl mx-auto"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  ¿Eres terapeuta o profesional del bienestar? Tenemos espacios y oficinas disponibles en un ambiente acogedor y profesional.
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {spaceFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-2 text-sm text-[#5a3d7d]/90"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#d4669f] to-[#87c4d4] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button
                    onClick={handleRentWhatsApp}
                    className="px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full text-base uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-105 inline-flex items-center gap-3 group"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                  >
                    <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Consultar con Angélica
                  </button>
                  <p 
                    className="text-xs text-[#5a3d7d]/60 mt-3"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    WhatsApp: 322 663 9527
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
