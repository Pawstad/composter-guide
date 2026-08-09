export default function CategorySampah() {
  return (
    <section className="mb-14">
      <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-woodland border-b-2 border-sushi/30 pb-3 mb-6">
        Bahan dan Kategori Sampah
      </h1>
      
      <div className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-woodland mb-2">
            Sampah Hijau (Kaya Nitrogen):
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-slate-700">
            <li>Sisa sayuran dapur dan sisa buah-buahan</li>
            <li>Potongan rumput segar dan dedaunan hijau</li>
            <li>Ampas kopi, ampas teh, dan kulit telur yang dihancurkan</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-bold text-woodland mb-2">
            Sampah Cokelat (Kaya Karbon):
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-slate-700">
            <li>Dedaunan kering dan ranting kecil</li>
            <li>Sekam padi, serbuk gergaji, atau serpihan kayu</li>
            <li>Potongan kardus/kertas polos non-glosir yang dicacah</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-bold text-red-700 mb-2">
            Bahan yang Wajib Dihindari:
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-slate-700">
            <li>Sisa daging, tulang besar, atau minyak/lemak berlebih (memicu bau busuk & hama)</li>
            <li>Kotoran hewan peliharaan (kucing/anjing)</li>
            <li>Plastik, mika, kaca, logam, dan bahan kimia sintetis</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
