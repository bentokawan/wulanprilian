export default function ClosingCTA() {
  return (
    <section className="container-page section-spacing text-center">
      <h2 className="mb-6 max-w-[480px] mx-auto">
        Langkah pertama tidak harus <span className="mark">besar.</span>
      </h2>
      <p className="text-lg max-w-[480px] mx-auto mb-10">
        Pilih satu jam yang terasa mungkin minggu ini. Sisanya pelan-pelan.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#booking" className="pill-black">
          Pesan sesi ↗
        </a>
        <a href="#jadwal" className="pill-outline">
          Lihat jadwal
        </a>
      </div>
    </section>
  );
}
