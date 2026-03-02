import type { LandingContent } from '../types';
import { WHATSAPP_MAIN } from '../config/contact';

export const defaultLanding: LandingContent = {
  heroTitle: 'Nueva Área',
  heroSubtitle: 'Subtítulo inspirador',
  heroDescription: 'Describe brevemente la esencia de esta área o servicio.',
  heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  secondaryImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  accentColor: '#e0c3fc',
  backgroundFrom: '#1a237e',
  backgroundTo: '#0d133d',
  bulletPoints: [
    'Beneficio clave 1',
    'Beneficio clave 2',
    'Incluye CTA a WhatsApp',
    'Puedes personalizar colores'
  ],
  ctaText: 'Agenda por WhatsApp',
  whatsappNumber: WHATSAPP_MAIN,
  therapistName: 'Angélica Montes',
  serviceName: 'Terapia Radiónica y Radiestesia',
  instagramUrl: '',
  facebookUrl: '',
  templateType: 'plantilla1'
};
