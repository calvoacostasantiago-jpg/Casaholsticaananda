export const WHATSAPP_MAIN = '573226639527';
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola, quiero información sobre Casa Holística Ananda.';

export function buildWhatsAppUrl(message: string, phone: string = WHATSAPP_MAIN) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE)}`;
}

export function openWhatsApp(message: string = WHATSAPP_DEFAULT_MESSAGE, phone?: string) {
  const targetPhone = phone || WHATSAPP_MAIN;
  window.open(buildWhatsAppUrl(message, targetPhone), '_blank', 'noopener,noreferrer');
}
