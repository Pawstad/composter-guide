import { Step } from "./pembuatan-steps";

export const penggunaanSteps: Step[] = [
  {
    number: 1,
    title: "Pemilahan Sampah Organik",
    description: "Pisahkan sampah organik (sisa sayur, buah, dedaunan) dari sampah anorganik (plastik, kaca, logam). Hindari sisa daging atau minyak berlebih.",
    image: "/images/steps/penggunaan-1.svg",
    badge: "Tahap Awal",
  },
  {
    number: 2,
    title: "Pencacahan Sampah Berukuran Besar",
    description: "Cacah sisa sayur atau sampah organik menjadi ukuran lebih kecil (2-5 cm) agar proses pengomposan oleh mikroorganisme berjalan lebih cepat.",
    image: "/images/steps/penggunaan-2.svg",
    badge: "Persiapan",
  },
  {
    number: 3,
    title: "Memasukkan Bahan Cokelat & Hijau (Metode Selang-Seling)",
    description: "Masukkan lapisan sampah hijau (kaya nitrogen) dan tutupi dengan lapisan sampah cokelat (daun kering/sekam/tanah) secara bergantian.",
    image: "/images/steps/penggunaan-3.svg",
    badge: "Pengolahan",
  },
  {
    number: 4,
    title: "Penyiraman Bioaktivator / Mol",
    description: "Semprotkan larutan EM4 atau bioaktivator secukupnya hingga lembab (tidak terlalu basah) untuk mempercepat fermentasi.",
    image: "/images/steps/penggunaan-4.svg",
    badge: "Pemeliharaan",
  },
  {
    number: 5,
    title: "Pengadukan & Pemanenan Kompos",
    description: "Aduk kompos 1-2 minggu sekali. Kompos siap panen setelah 3-4 minggu dengan ciri berwarna cokelat kehitaman, gembur, dan beraroma tanah.",
    image: "/images/steps/penggunaan-5.svg",
    badge: "Pemanenan",
  },
];
