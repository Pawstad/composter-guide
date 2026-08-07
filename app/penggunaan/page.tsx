import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import DownloadBox from "@/components/DownloadBox";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panduan Penggunaan Composter - KKN UNDIP Desa Pelemrejo",
  description: "Cara dan langkah penggunaan composter serta pemeliharaan pupuk organik di Desa Pelemrejo.",
};

export default function PenggunaanPage() {
  return (
    <div className="min-h-screen bg-white text-woodland flex flex-col pb-12">
      <Hero />
      <Navbar />

      <main className="w-full max-w-4xl mx-auto px-6 py-8">
        {/* SECTION 1: KATEGORI SAMPAH & ALAT PENGGUNAAN */}
        <section className="mb-14">
          <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-woodland border-b-2 border-sushi/30 pb-3 mb-6">
            Bahan dan Kategori Sampah
          </h1>
          
          <div className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-woodland mb-2">
                • Sampah Hijau (Kaya Nitrogen):
              </h2>
              <ul className="list-disc list-inside pl-4 space-y-1 text-slate-700">
                <li>Sisa sayuran dapur dan sisa buah-buahan</li>
                <li>Potongan rumput segar dan dedaunan hijau</li>
                <li>Ampas kopi, ampas teh, dan kulit telur yang dihancurkan</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-woodland mb-2">
                • Sampah Cokelat (Kaya Karbon):
              </h2>
              <ul className="list-disc list-inside pl-4 space-y-1 text-slate-700">
                <li>Dedaunan kering dan ranting kecil</li>
                <li>Sekam padi, serbuk gergaji, atau serpihan kayu</li>
                <li>Potongan kardus/kertas polos non-glosir yang dicacah</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-red-700 mb-2">
                • Bahan yang Wajib Dihindari:
              </h2>
              <ul className="list-disc list-inside pl-4 space-y-1 text-slate-700">
                <li>Sisa daging, tulang besar, atau minyak/lemak berlebih (memicu bau busuk & hama)</li>
                <li>Kotoran hewan peliharaan (kucing/anjing)</li>
                <li>Plastik, mika, kaca, logam, dan bahan kimia sintetis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2: TAHAPAN PENGGUNAAN */}
        <section className="space-y-12">
          <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-woodland border-b-2 border-sushi/30 pb-3 mb-8">
            Tahapan Penggunaan
          </h1>

          {/* STEP 1 */}
          <article className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
              STEP 1: Pemilahan Sampah Organik
            </h2>
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-slate-50 border border-dashed border-battleship/40 flex flex-col items-center justify-center text-battleship overflow-hidden relative">
              <svg
                className="w-12 h-12 mb-2 text-battleship/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wide text-woodland/80">
                Placeholder Gambar Step 1
              </span>
              <span className="text-[11px] text-battleship mt-0.5">
                (/images/steps/penggunaan-1.svg)
              </span>
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Pisahkan sampah organik (sisa sayur, buah, dedaunan) dari sampah anorganik (plastik, kaca, logam). Hindari memasukkan sisa daging berlebih agar wadah tidak berbau menyengat.
            </p>
          </article>

          {/* STEP 2 */}
          <article className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
              STEP 2: Pencacahan Sampah Berukuran Besar
            </h2>
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-slate-50 border border-dashed border-battleship/40 flex flex-col items-center justify-center text-battleship overflow-hidden relative">
              <svg
                className="w-12 h-12 mb-2 text-battleship/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wide text-woodland/80">
                Placeholder Gambar Step 2
              </span>
              <span className="text-[11px] text-battleship mt-0.5">
                (/images/steps/penggunaan-2.svg)
              </span>
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Cacah sisa sayur atau sampah organik menjadi potongan kecil berukuran 2–5 cm. Ukuran yang lebih kecil memperluas area kerja mikroorganisme sehingga pengomposan jauh lebih cepat.
            </p>
          </article>

          {/* STEP 3 */}
          <article className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
              STEP 3: Memasukkan Bahan Cokelat & Hijau (Metode Selang-Seling)
            </h2>
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-slate-50 border border-dashed border-battleship/40 flex flex-col items-center justify-center text-battleship overflow-hidden relative">
              <svg
                className="w-12 h-12 mb-2 text-battleship/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wide text-woodland/80">
                Placeholder Gambar Step 3
              </span>
              <span className="text-[11px] text-battleship mt-0.5">
                (/images/steps/penggunaan-3.svg)
              </span>
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Masukkan lapisan sampah hijau (kaya nitrogen) lalu tutupi dengan selapis sampah cokelat (daun kering/sekam/tanah) secara bergantian. Rasio ideal adalah 2 bagian cokelat : 1 bagian hijau.
            </p>
          </article>

          {/* STEP 4 */}
          <article className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
              STEP 4: Penyiraman Bioaktivator / MOL
            </h2>
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-slate-50 border border-dashed border-battleship/40 flex flex-col items-center justify-center text-battleship overflow-hidden relative">
              <svg
                className="w-12 h-12 mb-2 text-battleship/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wide text-woodland/80">
                Placeholder Gambar Step 4
              </span>
              <span className="text-[11px] text-battleship mt-0.5">
                (/images/steps/penggunaan-4.svg)
              </span>
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Percikkan atau semprotkan larutan EM4 / bioaktivator secukupnya hingga kondisi tumpukan sampah lembab (seperti spon basah yang diperas), namun tidak becek tergenang air.
            </p>
          </article>

          {/* STEP 5 */}
          <article className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
              STEP 5: Pengadukan & Pemanenan Kompos
            </h2>
            <div className="w-full h-56 sm:h-72 rounded-2xl bg-slate-50 border border-dashed border-battleship/40 flex flex-col items-center justify-center text-battleship overflow-hidden relative">
              <svg
                className="w-12 h-12 mb-2 text-battleship/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wide text-woodland/80">
                Placeholder Gambar Step 5
              </span>
              <span className="text-[11px] text-battleship mt-0.5">
                (/images/steps/penggunaan-5.svg)
              </span>
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Aduk isi composter 1–2 kali seminggu untuk menjaga ketersediaan udara. Setelah 3–4 minggu, kompos matang ditandai dengan warna cokelat kehitaman, tekstur gembur, dan beraroma segar seperti tanah hujan.
            </p>
          </article>
        </section>
      </main>

      <DownloadBox />
    </div>
  );
}
