export type TourCategory = 'english' | 'indonesia' | 'corporate';

export type BookingType = 'whatsapp' | 'globaltix';

export interface Tour {
  id: string;
  slug: string;
  title: string;
  category: TourCategory;
  isFeatured?: boolean;       // Paket Rekomendasi/Unggulan
  isKidsFriendly?: boolean;   // Khusus kategori anak-anak (2 paket untuk Indonesia)
  tagline?: string;
  description: string;
  distance: string;           // contoh: "11-17 km"
  duration: string;           // contoh: "3-4 Jam"
  meetingPoint: string;       // contoh: "MOANA Nanggulan Basecamp"
  startOptions: string[];     // contoh: ["06.30", "15.00"]
  priceFrom: number;          // IDR
  priceFormatted: string;     // contoh: "IDR 450,000"
  image: string;
  bookingType: BookingType;
  globalTixUrl?: string;      // URL untuk market mancanegara
  inclusions?: string[];
  highlights?: string[];
}
