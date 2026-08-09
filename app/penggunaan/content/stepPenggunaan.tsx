export default function StepPenggunaan() {
  return (
    <section className="space-y-12">
      <div>
        <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-woodland border-b-2 border-sushi/30 pb-3 mb-4">
          Tahapan Penggunaan Composter
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Penggunaan composter dilakukan secara bertahap agar sampah organik dapat terurai secara
          optimal oleh mikroorganisme. Keberhasilan proses pengomposan sangat dipengaruhi oleh jenis
          bahan yang dimasukkan, ukuran sampah, keseimbangan bahan basah dan kering, kadar
          kelembapan, serta sirkulasi udara di dalam composter.
        </p>
      </div>

      {/* STEP 1 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 1 — Pilah Sampah Organik dari Sampah Anorganik
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Langkah pertama adalah{" "}
          <strong>
            memisahkan sampah yang dapat dikomposkan dari sampah yang tidak dapat terurai secara
            alami
          </strong>
          . Sampah organik yang dapat dimasukkan ke dalam composter antara lain sisa sayuran, kulit
          buah, ampas teh atau kopi, daun, rumput, serta sisa makanan nabati dalam jumlah wajar.
        </p>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Sementara itu, pisahkan sampah seperti plastik, kaca, logam, karet, popok, tisu basah,
          dan bahan lain yang sulit terurai. Untuk menjaga kualitas kompos dan mencegah munculnya
          bau menyengat,{" "}
          <strong>
            hindari memasukkan sisa daging, tulang, ikan, minyak, serta makanan yang mengandung
            banyak garam atau bumbu dalam jumlah besar
          </strong>
          .
        </p>

        {/* Callout: Yang perlu diperhatikan */}
        <div className="rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-4 sm:p-5 space-y-2">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide">
            Yang perlu diperhatikan:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 text-base sm:text-lg leading-relaxed">
            <li>Pastikan sampah sudah terbebas dari plastik atau kemasan.</li>
            <li>Tiriskan sampah yang terlalu banyak mengandung air.</li>
            <li>Potong atau pisahkan bahan yang terlalu besar.</li>
            <li>Jangan memasukkan sampah anorganik ke dalam composter.</li>
          </ul>
        </div>

        {/* Callout: Tanda pemilahan benar */}
        <div className="rounded-2xl bg-sushi/10 border border-sushi/30 p-4 sm:p-5">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide mb-1">
            Tanda pemilahan sudah benar:
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Isi yang akan dimasukkan ke composter didominasi oleh bahan organik yang mudah terurai,
            seperti sisa sayuran, buah, daun, dan bahan tanaman lainnya.
          </p>
        </div>
      </article>

      {/* STEP 2 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 2 — Cacah Sampah Organik Menjadi Potongan Kecil
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Sampah organik yang berukuran besar sebaiknya{" "}
          <strong>dicacah atau dipotong menjadi bagian yang lebih kecil</strong>, idealnya sekitar{" "}
          <strong>2–5 cm</strong>. Semakin kecil ukuran bahan, semakin luas permukaan yang dapat
          dijangkau oleh mikroorganisme pengurai.
        </p>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Tidak perlu mencacah bahan hingga menjadi sangat halus — potongan berukuran beberapa
          sentimeter sudah cukup untuk membantu mempercepat proses penguraian.
        </p>

        <div className="rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-4 sm:p-5 space-y-2">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide">
            Cara melakukannya:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-slate-700 text-base sm:text-lg leading-relaxed">
            <li>Kumpulkan sampah organik yang sudah dipilah.</li>
            <li>Gunakan pisau, gunting, atau alat pencacah untuk memperkecil ukurannya.</li>
            <li>
              Usahakan potongan relatif seragam agar proses penguraian berlangsung lebih merata.
            </li>
            <li>Masukkan hasil cacahan ke dalam wadah composter.</li>
          </ol>
        </div>

        <div className="rounded-2xl bg-sushi/10 border border-sushi/30 p-4 sm:p-5">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide mb-1">
            Mengapa harus dicacah?
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Potongan yang lebih kecil membuat mikroorganisme lebih mudah bekerja pada bahan organik.
            Pencacahan juga membantu mengurangi ruang kosong di dalam composter sehingga bahan dapat
            terurai lebih merata. Hindari memasukkan batang atau ranting berukuran sangat besar
            secara langsung karena membutuhkan waktu jauh lebih lama untuk terurai.
          </p>
        </div>
      </article>

      {/* STEP 3 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 3 — Susun Bahan Hijau dan Bahan Cokelat Secara Berselang-Seling
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Masukkan bahan organik ke dalam composter dengan prinsip{" "}
          <strong>keseimbangan antara bahan hijau dan bahan cokelat</strong>.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-4 space-y-2">
            <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide">
              🌿 Bahan Hijau (kaya nitrogen)
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-base leading-relaxed">
              <li>Sisa sayuran</li>
              <li>Sisa buah</li>
              <li>Rumput segar</li>
              <li>Daun hijau</li>
              <li>Ampas kopi atau teh</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-4 space-y-2">
            <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide">
              🍂 Bahan Cokelat (kaya karbon)
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-base leading-relaxed">
              <li>Daun kering</li>
              <li>Sekam atau jerami</li>
              <li>Potongan kardus (tanpa lapisan plastik)</li>
              <li>Serbuk gergaji (bebas bahan kimia)</li>
              <li>Tanah atau kompos matang</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-sushi/10 border border-sushi/30 p-4 sm:p-5 space-y-2">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide mb-1">
            Pola susunan yang dianjurkan:
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
            Cokelat → Hijau → Cokelat → Hijau → Cokelat
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Gunakan sekitar <strong>2 bagian bahan cokelat untuk 1 bagian bahan hijau</strong>. Jika
            terlalu banyak bahan hijau, composter bisa menjadi terlalu basah dan menimbulkan bau.
            Jika terlalu banyak bahan cokelat, proses penguraian menjadi lebih lambat.
          </p>
        </div>
      </article>

      {/* STEP 4 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 4 — Tambahkan Bioaktivator dan Atur Kelembapan
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Setelah bahan tersusun, tambahkan <strong>bioaktivator</strong> seperti EM4 atau larutan
          mikroorganisme lokal (MOL) sesuai petunjuk penggunaan. Bioaktivator berfungsi membantu
          mempercepat aktivitas mikroorganisme pengurai.
        </p>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          <strong>Percikkan atau semprotkan larutan secara merata</strong> pada permukaan bahan.
          Jangan menuangkan larutan dalam jumlah besar pada satu titik. Kelembapan ideal digambarkan
          seperti{" "}
          <strong>spons yang sudah dibasahi kemudian diperas</strong> — terasa lembap, tetapi tidak
          mengeluarkan banyak air saat ditekan.
        </p>

        <div className="rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-4 sm:p-5 space-y-3">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide">
            Cara mengecek kelembapan:
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
            Ambil sedikit bahan dari dalam composter kemudian genggam.
          </p>
          <ul className="space-y-2 text-slate-700 text-base sm:text-lg leading-relaxed">
            <li>
              <strong>Terlalu kering</strong> — bahan terasa kering dan mudah berdebu →{" "}
              tambahkan sedikit air atau bioaktivator.
            </li>
            <li>
              <strong>Lembap dan menggumpal ringan</strong> — kondisi sudah sesuai → lanjutkan
              proses.
            </li>
            <li>
              <strong>Terlalu basah</strong> — kurangi penambahan cairan dan tambahkan bahan
              cokelat kering seperti daun kering atau sekam.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 sm:p-5">
          <p className="font-bold text-amber-800 text-sm sm:text-base uppercase tracking-wide mb-1">
            ⚠️ Perhatian
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Jangan membuat isi composter tergenang. Mikroorganisme membutuhkan kelembapan, tetapi
            juga membutuhkan oksigen. Kondisi yang terlalu basah dapat mengurangi sirkulasi udara
            dan menyebabkan proses pembusukan anaerob yang menghasilkan bau tidak sedap.
          </p>
        </div>
      </article>

      {/* STEP 5 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 5 — Aduk Secara Berkala dan Pantau Proses Pengomposan
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Agar mikroorganisme mendapatkan oksigen yang cukup dan bahan terurai secara merata,{" "}
          <strong>aduk isi composter sekitar 1–2 kali dalam seminggu</strong>. Pengadukan dilakukan
          dengan cara membalik atau mencampurkan bahan dari bagian bawah ke bagian atas.
        </p>

        <div className="rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-4 sm:p-5 space-y-3">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide">
            Saat mengaduk, periksa tiga hal ini:
          </p>
          <div className="space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed">
            <div>
              <p className="font-semibold text-woodland">1. Kelembapan</p>
              <p>Pastikan bahan tetap lembap, tetapi tidak tergenang.</p>
            </div>
            <div>
              <p className="font-semibold text-woodland">2. Aroma</p>
              <p>
                Kompos yang berjalan baik umumnya beraroma seperti tanah. Bau busuk atau menyengat
                mengindikasikan terlalu banyak bahan basah, terlalu sedikit udara, atau kompos
                terlalu padat.
              </p>
            </div>
            <div>
              <p className="font-semibold text-woodland">3. Kondisi bahan</p>
              <p>
                Seiring waktu, bentuk asli sampah akan semakin sulit dikenali dan volume bahan
                biasanya berkurang karena mulai terurai.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-sushi/10 border border-sushi/30 p-4 sm:p-5">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide mb-1">
            Jika muncul bau tidak sedap:
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Jangan langsung membuang seluruh isi composter. Periksa kondisi tumpukan terlebih
            dahulu. Jika terlalu basah, tambahkan bahan cokelat kering seperti daun kering atau
            sekam, kemudian aduk perlahan agar udara kembali masuk. Jika terlalu padat, lakukan
            pengadukan untuk memperbaiki sirkulasi udara.
          </p>
        </div>
      </article>

      {/* STEP 6 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 6 — Kenali Ciri-Ciri Kompos yang Sudah Matang
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Setelah kurang lebih <strong>3–4 minggu</strong>, lakukan pemeriksaan untuk mengetahui
          apakah kompos sudah matang. Waktu ini merupakan perkiraan dan dapat berbeda tergantung
          jenis bahan, ukuran cacahan, kelembapan, suhu, dan aktivitas mikroorganisme.
        </p>

        <div className="rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-4 sm:p-5 space-y-2">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide">
            Kompos matang umumnya memiliki ciri:
          </p>
          <ul className="space-y-2 text-slate-700 text-base sm:text-lg leading-relaxed">
            <li>
              <strong>Warna:</strong> cokelat tua hingga cokelat kehitaman.
            </li>
            <li>
              <strong>Tekstur:</strong> gembur dan menyerupai tanah.
            </li>
            <li>
              <strong>Bentuk bahan:</strong> sebagian besar bahan awal sudah sulit dikenali.
            </li>
            <li>
              <strong>Aroma:</strong> tidak berbau busuk, melainkan menyerupai aroma tanah.
            </li>
            <li>
              <strong>Suhu:</strong> tidak lagi terasa panas seperti pada fase penguraian aktif.
            </li>
            <li>
              <strong>Kelembapan:</strong> tidak terlalu basah dan tidak terlalu kering.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 sm:p-5">
          <p className="font-bold text-amber-800 text-sm sm:text-base uppercase tracking-wide mb-1">
            ⚠️ Belum siap dipanen?
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Jika kompos masih berbau menyengat, terlihat sangat basah, atau masih banyak bahan
            organik yang bentuknya jelas, jangan terburu-buru memanennya. Lanjutkan proses dengan
            menjaga kelembapan dan aduk secara berkala.
          </p>
        </div>
      </article>

      {/* STEP 7 */}
      <article className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-woodland">
          STEP 7 — Panen dan Manfaatkan Kompos
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          Setelah kompos menunjukkan ciri kematangan, kompos dapat dikeluarkan dari composter untuk
          digunakan sebagai bahan penyubur tanah. Jika diperlukan,{" "}
          <strong>ayak untuk memisahkan bagian yang masih berukuran besar</strong>. Potongan organik
          yang belum terurai sempurna dapat dikembalikan ke dalam composter.
        </p>

        <div className="rounded-2xl bg-slate-50 border border-dashed border-battleship/40 p-4 sm:p-5 space-y-2">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide">
            Kompos matang dapat dimanfaatkan sebagai:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 text-base sm:text-lg leading-relaxed">
            <li>Campuran media tanam</li>
            <li>Penyubur tanah</li>
            <li>Bahan pembenah struktur tanah</li>
            <li>Pupuk organik untuk tanaman</li>
            <li>Bagian dari upaya mengurangi sampah organik yang dibuang ke tempat pembuangan akhir</li>
          </ul>
        </div>

        {/* Ringkasan alur */}
        <div className="rounded-2xl bg-sushi/10 border border-sushi/30 p-4 sm:p-5 space-y-3">
          <p className="font-bold text-woodland text-sm sm:text-base uppercase tracking-wide">
            Ringkasan Alur:
          </p>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
            Pilah → Cacah → Susun bahan cokelat &amp; hijau → Tambahkan bioaktivator → Jaga
            kelembapan → Aduk 1–2×/minggu → Pantau proses → Panen kompos matang
          </p>
          <hr className="border-sushi/20" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
            <strong>Kunci keberhasilan pengomposan:</strong> bahan yang tepat, ukuran yang cukup
            kecil, keseimbangan bahan cokelat dan hijau, kelembapan yang sesuai, serta ketersediaan
            udara yang cukup.
          </p>
        </div>
      </article>
    </section>
  );
}
