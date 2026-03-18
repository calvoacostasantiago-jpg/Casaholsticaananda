import type { ReactNode } from 'react';
import { HeartPulse, Droplets, SunMedium, Apple } from 'lucide-react';

export interface AyurvedaBenefit {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface AyurvedaVideoItem {
  url: string;
  label: string;
}

export interface AyurvedaGalleryCard {
  src: string;
  title: string;
  text: string;
}

export const AYURVEDA_BENEFITS: AyurvedaBenefit[] = [
  { icon: <HeartPulse className="w-5 h-5" />, title: 'Escuchar al cuerpo', text: 'Ayurveda devuelve la escucha a tus señales: cansancio, digestión, ansiedad o insomnio no son “normales”.' },
  { icon: <Droplets className="w-5 h-5" />, title: 'Detox amable', text: 'Pequeños ajustes diarios (alimentación, infusiones, aceites) reducen toxinas (Ama) sin forzar al cuerpo.' },
  { icon: <SunMedium className="w-5 h-5" />, title: 'Energía y descanso', text: 'Ritmos día/noche, respiración y rutinas suaves calman el sistema nervioso y mejoran el sueño.' },
  { icon: <Apple className="w-5 h-5" />, title: 'Digestión y mente clara', text: 'Agni fuerte = menos inflamación, mejor ánimo, sistema inmune estable y claridad mental.' },
];

export const AYURVEDA_VIDEOS: AyurvedaVideoItem[] = [
  { url: 'https://www.instagram.com/reel/DRc-tG5kgNV/embed', label: 'Video 2' },
];

export const AYURVEDA_GALLERY: AyurvedaGalleryCard[] = [
  { src: '/assets/hector3.png', title: 'Terapia ayurvédica en consulta', text: 'Escucha activa y ajustes personalizados según dosha.' },
  { src: '/assets/hector4.png', title: 'Práctica y cuidado integral', text: 'Rituales que equilibran energía y sistema nervioso.' },
  { src: '/assets/hector-1.png', title: 'Sesión y plan ayurvédico', text: 'Evaluación cercana para trazar tu ruta personalizada.' },
];
