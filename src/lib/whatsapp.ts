export function whatsappUrl(phone: string, message: string): string {
  const normalized = phone.replace(/[^\d]/g, "");
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${normalized}?${params.toString()}`;
}
