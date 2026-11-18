import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-[#FBFEFF]">
      <h2 className="text-3xl font-black mb-4 text-[#05272E]">404 - Halaman Tidak Ditemukan</h2>
      <p className="text-gray-600 mb-6">Halaman yang Anda tuju tidak tersedia.</p>
      <Link href="/" className="px-6 py-3 bg-[#2EACAD] text-white rounded-xl font-bold hover:bg-[#259798] transition-colors">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
