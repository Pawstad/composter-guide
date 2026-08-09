import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import DownloadBox from "@/components/DownloadBox";
import "./style/globals.css";

export const metadata: Metadata = {
  title: "Panduan Composter - KKN UNDIP Desa Pelemrejo",
  description: "Panduan digital pembuatan & penggunaan composter untuk Desa Pelemrejo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full bg-white text-woodland flex flex-col pb-12 font-sans">
        <Hero />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
