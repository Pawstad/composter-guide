"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isPembuatanActive = pathname === "/pembuatan" || pathname === "/";
  const isPenggunaanActive = pathname === "/penggunaan";

  return (
    <nav className="my-6 flex justify-center px-4 sticky top-4 z-40">
      <div className="inline-flex p-1.5 rounded-full bg-white text-slate-200 backdrop-blur-md shadow-lg shadow-woodland/20 border border-sushi/30">
        <Link
          href="/pembuatan"
          scroll={false}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${isPembuatanActive
            ? "bg-celery text-woodland shadow-md shadow-celery/20"
            : "text-black hover:text-woodland hover:bg-celery/10"
            }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          Pembuatan
        </Link>

        <Link
          href="/penggunaan"
          scroll={false}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${isPenggunaanActive
            ? "bg-celery text-woodland shadow-md shadow-celery/20"
            : "text-black hover:text-woodland hover:bg-celery/10"
            }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Penggunaan
        </Link>
      </div>
    </nav>
  );
}
