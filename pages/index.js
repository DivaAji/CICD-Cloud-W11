export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-purple-600">Halo, Nama Saya Diva Aji Kurniawan</h1>
      <p className="mt-4 text-lg text-gray-700 text-center">
        Ini adalah web pribadi sederhana yang dibuat dengan Next.js dan Tailwind CSS.
      </p>
      <a
        href="#kontak"
        className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
      >
        Hubungi Saya
      </a>
    </main>
  );
}
