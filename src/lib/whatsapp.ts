import { PHONE_E164, WHATSAPP_E164 } from "@/lib/config";

/**
 * Mesaj Whatsapp precompletat. Clientul șterge sau completează liniile
 * goale direct în WhatsApp, înainte să apese trimite.
 */
export function buildWhatsAppMessage(presetJobType?: string): string {
  const tip = presetJobType ?? "laminat / vinil / linoleum / OSB / lucrări mici";
  return [
    "Bună! Vreau o ofertă pentru montaj pardoseală.",
    "Localitate: ",
    `Tip lucrare: ${tip}`,
    "Suprafață (mp) sau nr. prize/întrerupătoare: ",
    "Adresă: ",
  ].join("\n");
}

export function buildWhatsAppLink(presetJobType?: string): string {
  const text = encodeURIComponent(buildWhatsAppMessage(presetJobType));
  return `https://wa.me/${WHATSAPP_E164}?text=${text}`;
}

export function buildTelLink(): string {
  return `tel:${PHONE_E164}`;
}
