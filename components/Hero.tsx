import LogoBar from "./LogoBar";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-woodland min-h-[65vh] sm:min-h-[75vh] flex flex-col justify-center border-b border-sushi/30">
      {/* Ambient background glow & gradient using palette greens */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(178,201,83,0.18),rgba(0,0,0,0))]" />
      <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-celery/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-sushi/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-24 flex flex-col items-start text-left">
        {/* LogoBar placed at top-left */}
        <div className="mb-6 sm:mb-8">
          <LogoBar />
        </div>

        {/* Large Clean Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl text-left">
          Guide Pembuatan <br className="hidden sm:inline" />
          dan Penggunaan Composter.
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-6 sm:mt-8 text-base sm:text-xl text-white max-w-2xl leading-relaxed text-left font-normal">
          Buat dan kelola sampah rumah tangga menjadi pupuk berkualitas untuk Pelemrejo.
        </p>
      </div>
    </section>
  );
}


