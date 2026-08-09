import AlatBahan from "./content/alat-bahan";
import StepPembuatan from "./content/stepPembuatan";
import DownloadBox from "@/components/DownloadBox";
import VideoBox from "@/components/video-box";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panduan Pembuatan Composter - KKN UNDIP Desa Pelemrejo",
  description: "Langkah-langkah dan alat bahan pembuatan composter sederhana untuk Desa Pelemrejo.",
};

export default function PembuatanPage() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-8 flex-1">
      <AlatBahan />
      <StepPembuatan />
      <DownloadBox />
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
        <VideoBox url="https://www.youtube.com/watch?v=jNQXAC9IVRw" />
      </section>
    </main>
  );
}
