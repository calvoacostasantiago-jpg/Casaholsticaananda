export interface Module {
  id: string;
  title: string;
  description: string;
  image: string;
  whatsappMessage: string;
  landing?: LandingContent;
}

export interface LandingContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  secondaryImage?: string;
  accentColor: string;
  backgroundFrom: string;
  backgroundTo: string;
  bulletPoints: string[];
  ctaText?: string;
  whatsappNumber?: string;
  therapistName?: string;
  serviceName?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  templateType?: 'plantilla1' | 'plantilla2';
}
