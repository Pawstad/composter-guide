# PRD — Composter Guide Website

## 1. Deskripsi Proyek

Composter Guide Website adalah panduan digital berbasis web statis (Next.js, di-deploy ke Vercel) yang menampilkan tahapan pembuatan dan cara penggunaan composter. Website ini diakses warga melalui QR code yang ditempel langsung di badan composter fisik hasil proker multidisiplin "Optimalisasi Potensi Masyarakat melalui Kepedulian Lingkungan di Desa Pelemrejo". Proyek ini merupakan kontribusi monodisiplin mahasiswa Informatika yang mendukung keberlanjutan pemanfaatan composter oleh warga pasca-kegiatan KKN selesai.

## 2. Tujuan

- Menyediakan referensi panduan yang dapat diakses berulang kali kapan pun dibutuhkan, tidak terbatas pada sesi sosialisasi satu kali.
- Mendukung keberlanjutan pemakaian dan perawatan composter oleh warga setelah masa KKN berakhir.
- Memberikan panduan yang terstruktur dan mudah diikuti, baik untuk tahap pembuatan maupun penggunaan composter.
- Menyediakan dokumen cadangan berupa PDF manual guide yang dapat diunduh dan disimpan offline.

## 3. Target User

- Warga dan kelompok tani/peternak Desa Pelemrejo penerima manfaat composter.
- Kader/perangkat desa yang mendampingi keberlangsungan program.
- Tim KKN sebagai bagian dari dokumentasi dan arsip proker.

## 4. Functional Requirement

- Navbar dengan dua pilihan halaman — **Pembuatan** dan **Penggunaan** — diposisikan di tengah, berbentuk rounded/pill, berfungsi sekaligus sebagai CTA utama.
- Hero section menampilkan logo bar (Logo KKN, Logo UNDIP, teks "KKN UNDIP DESA PELEMREJO") secara horizontal, diikuti main headline dan subheadline.
- Steps section menampilkan tahapan secara berurutan dan dapat di-scroll hingga step terakhir; tiap step berisi nomor urut, judul, deskripsi, dan gambar pendukung.
- Konten steps berbeda antara halaman Pembuatan dan Penggunaan, namun menggunakan komponen yang sama (reusable, data terpisah).
- Download section tersedia di kedua halaman untuk mengunduh PDF manual guide.
- Navigasi antar halaman berjalan mulus tanpa reload penuh (client-side routing Next.js).
- Tampilan responsif dan dioptimalkan untuk akses dari perangkat mobile, karena entry point utama adalah scan QR code dari HP.

## 5. Non-Functional Requirement

mempertimbangkan kemungkinan koneksi internet desa yang terbatas.
- **Accessibility:** kontras warna dan ukuran teks cukup jelas terbaca oleh pengguna lintas usia, termasuk warga yang kurang terbiasa dengan teknologi.
- **Maintainability:** struktur komponen modular/reusable, dengan data konten terpisah dari komponen (`data/steps.ts`) agar mudah diperbarui tanpa mengubah kode komponen.
- **Hosting & Cost:** menggunakan platform hosting gratis tanpa kebutuhan perawatan server berkelanjutan (Vercel).
- **Scalability:** struktur memungkinkan penambahan halaman atau step baru di kemudian hari tanpa perombakan besar.
- **Compatibility:** berjalan baik di browser mobile umum (Chrome/Safari, Android & iOS).

## 6. Scope

**In Scope:**
- Website multi-page (Pembuatan & Penggunaan) dengan navbar sebagai navigasi utama.
- Komponen reusable: Hero, Navbar, StepsSection, StepCard, DownloadBox.
- Placeholder untuk aset yang belum tersedia (gambar step, logo, file PDF).
- Deployment ke Vercel.

**Out of Scope:**
- Backend atau CMS untuk pengelolaan konten secara dinamis.
- Fitur akun pengguna/login.
- Analitik atau pelacakan pengunjung (dapat dipertimbangkan di iterasi berikutnya).
- Dukungan multi-bahasa (hanya Bahasa Indonesia).
- Panduan cetak (fallback fisik) — sudah diputuskan untuk tidak disertakan.

## 7. Do's and Don't

**Do's:**
- Gunakan komponen reusable agar tampilan dan pengalaman pengguna konsisten di kedua halaman.
- Prioritaskan desain mobile-first, karena mayoritas akses berasal dari hasil scan QR code via HP.
- Sediakan placeholder yang jelas dan mudah diganti untuk aset yang belum tersedia (gambar, logo, PDF).
- Pastikan navbar dan alur navigasi mudah dipahami oleh warga dengan latar belakang teknologi yang beragam.

**Don't:**
- Jangan menambahkan animasi atau elemen visual berat yang dapat memperlambat loading, mengingat keterbatasan koneksi di desa.
- Jangan menyimpan data pribadi atau sensitif warga di dalam website ini.
- Jangan membangun sistem backend/database yang membutuhkan perawatan berkelanjutan pasca-KKN selesai.
- Jangan gunakan istilah teknis berlebihan dalam konten — bahasa harus tetap awam-friendly untuk warga umum.