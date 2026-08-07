import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StepsSection from "@/components/StepsSection";
import DownloadBox from "@/components/DownloadBox";
import { pembuatanSteps } from "@/data/pembuatan-steps";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panduan Pembuatan Composter - KKN UNDIP Desa Pelemrejo",
  description: "Langkah-langkah pembuatan composter sederhana untuk pengelolaan sampah organik di Desa Pelemrejo.",
};

export default function PembuatanPage() {
  return (
    <div className="min-h-screen bg-white text-woodland flex flex-col pb-12">
      <Hero />
      <Navbar />
      <StepsSection
        steps={pembuatanSteps}
        title="Tahapan Pembuatan Wadah Composter"
        subtitle="Ikuti 4 langkah mudah pembuatan di bawah ini"
      />
      <DownloadBox />
    </div>
  );
}
