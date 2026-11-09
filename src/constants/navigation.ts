export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Our Tour',
    href: '/tour',
    children: [
      {
        label: 'English Tour (Mancanegara)',
        href: '/tour',
        description: 'Guided village cycling for international travelers'
      },
      {
        label: 'Indonesian Tour (Domestik)',
        href: '/tourina',
        description: 'Paket gowes asri Menoreh & rute ramah keluarga'
      },
      {
        label: 'Corporate Tour (Outing Kantor)',
        href: '/corporate',
        description: 'Program gathering, team building, & CSR berdampak'
      }
    ]
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      {
        label: 'Our Story & Concept',
        href: '/about',
        description: 'Cerita di balik lahirnya Moana & misi keberlanjutan'
      },
      {
        label: 'FAQ (Tanya Jawab)',
        href: '/faq',
        description: 'Pertanyaan seputar rute, anak-anak, & cuaca'
      },
      {
        label: 'Terms & Conditions',
        href: '/terms',
        description: 'Ketentuan pemesanan & kebijakan pembatalan'
      },
      {
        label: 'Sustainable Tourism Policy',
        href: '/policy',
        description: 'Komitmen ramah lingkungan & dampak sosial warga'
      }
    ]
  },
  {
    label: 'Gallery',
    href: '/gallery',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  }
];
