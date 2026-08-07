# Composter Guide Website — Project Spec (v2, Multi-Page)

Panduan digital pembuatan & penggunaan composter untuk Desa Pelemrejo. Diakses warga via QR code yang ditempel di badan composter fisik. Frontend-only, di-deploy ke Vercel.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Backend:** tidak ada — murni frontend, semua konten statis (hardcoded/local data)

## Struktur Halaman (Multi-Page)

Dipecah jadi 2 halaman terpisah, dipilih lewat navbar:

1. **`/pembuatan`** — Panduan pembuatan composter
2. **`/penggunaan`** — Panduan cara penggunaan composter

Kedua halaman memakai layout dan komponen yang sama persis (reusable), hanya beda di data konten step-nya. Jadi pindah dari satu halaman ke halaman lain terasa seperti "transform" konten tutorial, bukan pindah ke desain yang berbeda.

## Layout per Halaman (urutan dari atas ke bawah)

### 1. Hero Section
- **Logo bar** (baris horizontal, linear, di atas headline): Logo KKN — Logo UNDIP — teks "KKN UNDIP DESA PELEMREJO", ketiganya sejajar dalam satu baris.
- **Main headline:** Judul utama, ex. "Panduan Pembuatan & Penggunaan Composter"
- **Subheadline:** kalimat penjelasan tambahan (bisa beda tipis tiap halaman untuk kontekstualisasi, atau tetap sama).

### 2. Navbar (posisi tengah, berperan sebagai CTA)
- Diletakkan di **tengah** section (bukan fixed top biasa) — jadi bagian dari flow hero, bukan menempel di ujung atas layar.
- Berbentuk **pill/rounded di kedua sisi**.
- Berisi 2 link: **Pembuatan** dan **Penggunaan** — sekaligus berfungsi sebagai CTA utama untuk masuk ke konten (tidak ada tombol CTA terpisah).

### 3. Steps Section (endless scroll)
- Daftar step ditampilkan berurutan, di-scroll terus ke bawah sampai step terakhir (state "selesai") untuk halaman yang sedang aktif.
- Tiap step: nomor, judul, deskripsi, gambar (placeholder dulu).
- Komponen ini **sama untuk kedua halaman** — cuma datanya beda (data pembuatan vs data penggunaan).

### 4. Download Section
- Muncul di **kedua halaman** (`/pembuatan` dan `/penggunaan`) — bukan cuma di satu halaman.
- Box CTA download PDF manual guide. Untuk saat ini **hanya di-inisialisasi** (link/tombol belum terhubung ke file PDF asli).

## Status Konten Saat Ini

| Item | Status |
|---|---|
| Teks step pembuatan | Belum disusun |
| Teks step penggunaan | Belum disusun |
| Gambar tiap step | Belum ada — pakai placeholder |
| Logo KKN & UNDIP | Belum ada asetnya — pakai placeholder |
| File PDF manual guide | Belum ada — tombol download baru di-init |

## Struktur Folder (usulan)

```
composter-guide/
├── app/
│   ├── layout.tsx              # Layout global (font, metadata)
│   ├── globals.css
│   ├── pembuatan/
│   │   └── page.tsx            # Merender Hero + Navbar + StepsSection(data pembuatan) + DownloadBox
│   └── penggunaan/
│       └── page.tsx            # Merender Hero + Navbar + StepsSection(data penggunaan) + DownloadBox
├── components/
│   ├── LogoBar.tsx              # Logo KKN + Logo UNDIP + teks, horizontal
│   ├── Hero.tsx                 # LogoBar + headline + subheadline
│   ├── Navbar.tsx                # Pill nav, posisi tengah, isi link Pembuatan/Penggunaan
│   ├── StepsSection.tsx          # Wrapper daftar step, menerima data via props
│   ├── StepCard.tsx              # Satu unit step (nomor, judul, deskripsi, gambar)
│   └── DownloadBox.tsx           # Box CTA download PDF, dipakai di kedua halaman
├── data/
│   ├── pembuatan-steps.ts        # Data step pembuatan composter
│   └── penggunaan-steps.ts       # Data step cara penggunaan composter
├── public/
│   ├── images/
│   │   ├── logo-kkn.png          # Placeholder dulu
│   │   ├── logo-undip.png        # Placeholder dulu
│   │   └── steps/                 # Gambar tiap step, taruh di sini nanti
│   └── guide.pdf                  # File PDF manual guide, taruh di sini nanti
├── package.json
└── next.config.js
```

## Next Steps (urutan pengerjaan)

1. Scaffold project (`npx create-next-app@latest`) dengan Tailwind CSS
2. Build komponen dasar: `LogoBar`, `Hero`, `Navbar`, `StepsSection`, `StepCard`, `DownloadBox`
3. Buat 2 route (`/pembuatan`, `/penggunaan`), susun page masing-masing dari komponen yang sama
4. Isi `data/pembuatan-steps.ts` dan `data/penggunaan-steps.ts` (teks dulu, gambar placeholder)
5. Deploy awal ke Vercel — supaya link/QR code bisa disiapkan lebih dulu meski konten belum 100% lengkap
6. Susulkan logo, gambar step asli, dan file PDF setelah tersedia