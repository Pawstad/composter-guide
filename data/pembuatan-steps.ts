export interface Step {
  number: number;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

export const pembuatanSteps: Step[] = [
  {
    number: 1,
    title: "Menyiapkan Wadah Ember / Tong Plastik",
    description: "Gunakan ember bekas berukuran 20-50 liter yang memiliki tutup rapat. Bersihkan wadah secara menyeluruh sebelum dilubangi.",
    image: "/images/steps/pembuatan-1.svg",
    badge: "Persiapan",
  },
  {
    number: 2,
    title: "Membuat Lubang Aerasi & Drainase",
    description: "Buat lubang-lubang kecil berdiameter 0.5 cm pada bagian bawah wadah untuk drainase cairan (lindi) dan pada dinding wadah untuk sirkulasi udara.",
    image: "/images/steps/pembuatan-2.svg",
    badge: "Pengerjaan",
  },
  {
    number: 3,
    title: "Memasang Keran Cairan Lindi (Opsional)",
    description: "Pasang keran di bagian paling bawah wadah untuk mempermudah pemanenan pupuk organik cair (POC) hasil pengendapan lindi.",
    image: "/images/steps/pembuatan-3.svg",
    badge: "Pengerjaan",
  },
  {
    number: 4,
    title: "Melapisi Dasar Composter",
    description: "Isi dasar wadah dengan sekam padi, tanah, atau ranting kering setebal 5-10 cm sebagai penyerap kelembaban awal.",
    image: "/images/steps/pembuatan-4.svg",
    badge: "Finishing",
  },
];
