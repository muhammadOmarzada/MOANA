/**
 * SUPABASE CLIENT SETUP (PHASE 2 - BACKEND & DATABASE)
 * 
 * Modul ini disiapkan untuk integrasi database Supabase di tahap lanjutan.
 * Ketika siap migrasi dari mock data (data/tours.ts):
 * 1. Install dependency: `npm install @supabase/supabase-js`
 * 2. Tambahkan NEXT_PUBLIC_SUPABASE_URL & NEXT_PUBLIC_SUPABASE_ANON_KEY di .env.local
 */

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
};
