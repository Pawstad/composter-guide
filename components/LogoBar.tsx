import Image from "next/image";

export default function LogoBar() {
  return (
    <div className="inline-flex items-center gap-3">
      {/* Logo KKN */}
      <div className="relative h-7 sm:h-8 w-auto flex items-center justify-center shrink-0">
        <Image
          src="/images/logo-kkn.png"
          alt="Logo KKN"
          width={36}
          height={36}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Logo UNDIP */}
      <div className="relative h-7 sm:h-8 w-auto flex items-center justify-center shrink-0">
        <Image
          src="/images/undip.png"
          alt="Logo UNDIP"
          width={36}
          height={36}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Brand Text */}
      <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white">
        KKN UNDIP DESA PELEMREJO
      </span>
    </div>
  );
}


