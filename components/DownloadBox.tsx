export default function DownloadBox() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 my-10">
      <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl bg-woodland text-white border border-sushi/30 shadow-xl">
        {/* Background Decorative Pattern */}
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-celery/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-sushi/30 backdrop-blur-md flex items-center justify-center shrink-0">
              <svg
                className="w-7 h-7 text-celery"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">Unduh Modul Panduan (PDF)</h3>
              <p className="text-sm text-celery/90 mt-1 max-w-md">
                Simpan file panduan lengkap secara offline di perangkat Anda untuk dibaca kapan saja tanpa koneksi internet.
              </p>
            </div>
          </div>

          <a
            href="/komposter-manualbook.pdf"
            download="Panduan-Composter-Pelemrejo.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-celery text-woodland font-extrabold text-sm hover:bg-[#c4dc5d] transition-all duration-300 shadow-md shrink-0 active:scale-95"
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Unduh PDF (Manual Guide)
          </a>
        </div>
      </div>
    </section>
  );
}
