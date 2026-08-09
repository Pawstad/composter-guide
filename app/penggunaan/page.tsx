import CategorySampah from "./content/category-sampah";
import StepPenggunaan from "./content/stepPenggunaan";
import VideoBox from "@/components/video-box";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panduan Penggunaan Composter - KKN UNDIP Desa Pelemrejo",
  description: "Cara dan langkah penggunaan composter serta pemeliharaan pupuk organik di Desa Pelemrejo.",
};

export default function PenggunaanPage() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-8 flex-1">
      <CategorySampah />
      <StepPenggunaan />
      <section className="mt-16 space-y-6">
        <hr className="border-sushi/30" />
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-woodland">
            Filosofi mottainai
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Filosofi mottainai adalah sebuah ungkapan dalam bahasa Jepang yang menekankan
            pentingnya tidak menyia-nyiakan sumber daya dan menghargai setiap hal.
          </p>
        </div>
        <VideoBox url="https://youtu.be/uogMPonLxwI" />
      </section>
    </main>
  );
}
