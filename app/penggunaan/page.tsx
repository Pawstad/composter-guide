import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StepsSection from "@/components/StepsSection";
import DownloadBox from "@/components/DownloadBox";
import { penggunaanSteps } from "@/data/penggunaan-steps";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panduan Penggunaan Composter - KKN UNDIP Desa Pelemrejo",
  description: "Cara dan langkah penggunaan composter serta pemeliharaan pupuk organik di Desa Pelemrejo.",
};

export default function PenggunaanPage() {
  return (
    <div className="min-h-screen bg-white text-woodland flex flex-col pb-12">
      <Hero />
      <Navbar />
      <StepsSection
        steps={penggunaanSteps}
        title="Tahapan Penggunaan Composter"
        subtitle="Ikuti 5 langkah pengomposan harian hingga masa panen"
      />
      <DownloadBox />
    </div>
  );
}
