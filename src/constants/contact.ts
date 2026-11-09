export const CONTACT_CONFIG = {
  // Luna: PIC Operasional Tur Reguler, Domestik, & Corporate
  adminLuna: {
    name: 'Luna',
    phone: '6282333918990',
    displayPhone: '+62 82-333-918-990',
    defaultMessage: 'Halo Tim Moana (Luna), saya tertarik memesan paket tur sepeda:',
  },

  // Anna: PIC Khusus Partnership, B2B, Media, & Hotel Collaboration
  adminAnna: {
    name: 'Anna',
    phone: '6282333918990', // nomor anna jika ada, sementara gunakan hotline moana
    displayPhone: '+62 82-333-918-990',
    defaultMessage: 'Halo Tim Moana (Anna), saya ingin mengajukan kerja sama / partnership:',
  },

  email: 'ask@moana.id',
  location: {
    nanggulan: 'MOANA Nanggulan Basecamp, Kulon Progo, D.I. Yogyakarta',
    prawirotaman: 'MOANA Prawirotaman, Kota Yogyakarta, D.I. Yogyakarta',
    gmapsUrl: 'https://maps.app.goo.gl/moana'
  },
  operatingHours: '07.00 - 17.30 WIB (Setiap Hari)',
  departureTimes: 'Pagi: 06.30 / 07.00 WIB | Sore: 14.30 / 15.00 WIB',

  socials: {
    instagram: 'https://instagram.com/moana.bike',
    tripAdvisor: 'https://www.tripadvisor.com/Attraction_Review-moana',
    youtube: 'https://youtube.com/@moanabiketour',
    facebook: 'https://facebook.com/moana.bike'
  }
};

export function getWhatsAppBookingUrl(tourTitle: string, admin: 'luna' | 'anna' = 'luna'): string {
  const target = admin === 'anna' ? CONTACT_CONFIG.adminAnna : CONTACT_CONFIG.adminLuna;
  const message = `${target.defaultMessage} "${tourTitle}". Bisa dibantu ketersediaan jadwalnya? Terima kasih!`;
  return `https://wa.me/${target.phone}?text=${encodeURIComponent(message)}`;
}
