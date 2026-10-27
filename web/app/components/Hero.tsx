export default function Hero() {
  return (
    <section className="container-page section-spacing flex flex-col items-center text-center">
      {/* Badge & Headline */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-lav-100 rounded-full mb-6">
        <span className="w-2 h-2 rounded-full bg-lav-deep animate-pulse" />
        <span className="text-xs font-semibold uppercase tracking-wider text-lav-deep">Konseling & Hipnoterapi</span>
      </div>

      <h1 className="max-w-[700px] mb-6">
        Bicara <span className="inline-block px-2">💬</span> dengan seseorang yang paham,{" "}
        <span className="mark">tanpa ribet.</span>
      </h1>

      <p className="text-lg max-w-[600px] mb-10 text-muted">
        Konseling psikologi dan hipnoterapi, online atau tatap muka. Pilih jadwal, bayar, terima tautan dalam beberapa menit.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        <a href="#booking" className="pill-black">
          Pesan sesi
        </a>
        <a href="#jadwal" className="pill-outline">
          Lihat jadwal →
        </a>
      </div>

      {/* Grid 4 Kartu Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* Kartu Konseling */}
        <div className="card-v4 flex flex-col justify-between" style={{ background: "var(--color-sage-300)" }}>
          <div className="vertical-tab">LAYANAN</div>
          <h3 className="mb-2">Konseling Psikologi</h3>
          <p className="text-sm opacity-80 mb-6">Bicara, pahami, temukan langkah kecil.</p>
          <a href="#booking" className="pill-outline border-ink text-sm">PESAN KONSELING ↗</a>
        </div>

        {/* Kartu Hipnoterapi */}
        <div className="card-v4" style={{ background: "var(--color-sage-100)" }}>
          <h3 className="mb-2">Hipnoterapi</h3>
          <p className="text-sm opacity-80 mb-6">Ubah kebiasaan & respons cemas. Tetap sadar.</p>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wide">Pesan dalam 3 langkah</span>
            <div className="flex gap-2">
              <span className="w-6 h-6 rounded-full border border-ink flex items-center justify-center text-xs">1</span>
              <span className="w-6 h-6 rounded-full border border-ink flex items-center justify-center text-xs">2</span>
              <span className="w-6 h-6 rounded-full border border-ink flex items-center justify-center text-xs">3</span>
            </div>
          </div>
        </div>

        {/* Kartu Konselor */}
        <div className="card-v4 flex flex-col justify-between" style={{ background: "var(--color-lav-200)" }}>
          <div className="vertical-tab">TERVERIFIKASI</div>
          <h3 className="mb-2">Wulan Prilian</h3>
          <p className="text-sm opacity-80 mb-6">Psikolog & Hipnoterapis bersertifikat.</p>
          <a href="#konselor" className="pill-outline border-ink text-sm">LIHAT PROFILE ↗</a>
        </div>

        {/* Kartu Event */}
        <div className="card-v4">
          <div className="vertical-tab">EVENT</div>
          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber mb-2">12 OKT</span>
          <h3 className="mb-4">Workshop: Tidur lebih tenang</h3>
          <a href="#event" className="pill-outline border-ink text-sm">DAFTAR</a>
        </div>
      </div>
    </section>
  );
}
