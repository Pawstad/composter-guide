import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import DownloadBox from "@/components/DownloadBox";
import AlatBahan from "./content/alat-bahan";
import StepPembuatan from "./content/stepPembuatan";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panduan Pembuatan Composter - KKN UNDIP Desa Pelemrejo",
  description: "Langkah-langkah dan alat bahan pembuatan composter sederhana untuk Desa Pelemrejo.",
};

export default function PembuatanPage() {
  return (
    <div className="min-h-screen bg-white text-woodland flex flex-col pb-12">
      <Hero />
      <Navbar />

      <main className="w-full max-w-4xl mx-auto px-6 py-8">
        <AlatBahan />
        <StepPembuatan />
      </main>

      <DownloadBox />
    </div>
  );
}
