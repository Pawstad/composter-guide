export default function StepPembuatan() {
  return (
    <section className="space-y-12">
      <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-woodland border-b-2 border-sushi/30 pb-3 mb-8">
        Tahapan Pembuatan
      </h1>

      {/* STEP 1 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 1: Mempersiapkan 2 Galon
        </h2>
        <div className="w-full rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-3 sm:p-4">
          <div className="flex flex-wrap justify-center items-center gap-4 p-4">
            <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-200">
              <img
                src="/images/steps/Galon1.svg"
                alt="Ilustrasi galon pertama"
                className="w-full h-56 sm:h-64 object-contain"
              />
            </div>
            <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-200">
              <img
                src="/images/steps/Galon2.svg"
                alt="Ilustrasi galon kedua"
                className="w-full h-56 sm:h-64 object-contain"
              />
            </div>
          </div>
        </div>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Siapkan 2 buah galon air bekas. Bersihkan bagian dalam galon secara menyeluruh dari sisa air dan kotoran, lalu buat pola atau garis petunjuk pemotongan pada permukaan galon menggunakan spidol.
        </p>
      </article>

      {/* STEP 2 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 2: Pemotongan Bagian Galon Pertama
        </h2>
        <div className="w-full rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-3 sm:p-4">
          <div className="flex flex-wrap justify-center items-center gap-4 p-4">
            <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-200 w-full sm:w-2/3">
              <img
                src="/images/steps/potongatas.png"
                alt="Ilustrasi galon potongan atas"
                className="w-full h-56 sm:h-64 object-contain"
              />
            </div>
          </div>
        </div>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Potong galon pertama sesuai dengan tanda garis petunjuk menggunakan gergaji besi. Potongan ini nantinya akan digunakan sebagai bagian dari struktur utama komposter.
        </p>
      </article>

      {/* STEP 3 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 3: Pemotongan Galon Kedua dan Pembuatan Engsel
        </h2>
        <div className="w-full rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-3 sm:p-4">
          <div className="flex flex-wrap justify-center items-center gap-4 p-4">
            <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-200 ">
              <img
                src="/images/steps/potongbawah.png"
                alt="Ilustrasi galon potongan bawah"
                className="w-full h-56 sm:h-64 object-contain"
              />
            </div>
            <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-200 ">
              <img
                src="/images/steps/galon-compos.svg"
                alt="Ilustrasi galon potongan bawah"
                className="w-full h-56 sm:h-64 object-contain"
              />
            </div>
          </div>
        </div>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Potong galon kedua menggunakan gergaji besi mengikuti garis petunjuk. Perhatian: Hindari memotong area garis kotak hitam, karena sisa potongan di area tersebut akan berfungsi sebagai engsel untuk tutup komposter.
        </p>
      </article>

      {/* STEP 4 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 4: Pembuatan Lubang Keran
        </h2>
        <div className="w-full rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-3 sm:p-4">
          <div className="flex flex-wrap justify-center items-center gap-4 p-4">
            <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-200 w-full sm:w-2/3">
              <img
                src="/images/steps/lubang-galon.png"
                alt="Ilustrasi galon potongan bawah"
                className="w-full h-56 sm:h-64 object-contain"
              />
            </div>
          </div>
        </div>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Buat lubang melingkar pada galon menggunakan mal bulat sebagai acuan. Masukkan joint pipa ke dalam lubang yang telah dibentuk, lalu rekatkan sekelilingnya secara merata menggunakan lem pipa agar tidak bocor.
        </p>
      </article>

      {/* STEP 5 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 5: Pemasangan Keran Output
        </h2>
        <div className="w-full rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-3 sm:p-4">
          <div className="flex flex-wrap justify-center items-center gap-4 p-4">
            <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-200">
              <img
                src="/images/steps/Galon-keran.svg"
                alt="Ilustrasi galon potongan bawah"
                className="w-full h-56 sm:h-64 object-contain"
              />
            </div>
          </div>
        </div>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Lilitkan seal tape pada ulir keran sebanyak beberapa putaran secara rapi dan searah dengan arah putaran pemasangan. Pasang dan kencangkan keran pada joint pipa secukupnya. Hindari mengencangkan terlalu kuat untuk mencegah kerusakan pada ulir maupun sambungan.
        </p>
      </article>

      {/* STEP 6 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 6: Pelubangan Tutup Galon (Output Cairan)
        </h2>
        <div className="w-full rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-3 sm:p-4">
          <div className="flex flex-wrap justify-center items-center gap-4 p-4">
            <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-200">
              <img
                src="/images/steps/detail-drain.svg"
                alt="Ilustrasi galon potongan bawah"
                className="w-full h-56 sm:h-64 object-contain"
              />
            </div>
          </div>
        </div>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Buat lubang-lubang kecil pada bagian tutup/kepala galon menggunakan gunting atau alat pemotong. Lubang ini berfungsi khusus sebagai saluran output atau pembuangan cairan hasil limbah organik (pupuk organik cair).
        </p>
      </article>

      {/* STEP 7 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 7: Penggabungan dan Finalisasi Galon
        </h2>
       <div className="w-full rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-3 sm:p-4">
          <div className="flex flex-wrap justify-center items-center gap-4 p-4">
            <div className="rounded-xl bg-white p-3 shadow-sm border border-slate-200">
              <img
                src="/images/steps/composter-assamble.svg"
                alt="Ilustrasi galon potongan bawah"
                className="w-full h-56 sm:h-64 object-contain"
              />
            </div>
          </div>
        </div>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Gabungkan galon pertama dan galon kedua menjadi satu kesatuan rangkaian sesuai dengan posisi desain panduan. Setelah seluruh bagian tersambung, periksa kembali posisi kedua galon untuk memastikan struktur berdiri kokoh, sejajar, dan siap digunakan.
        </p>
      </article>
    </section>
  );
}
