export default function TurningPoint() {
  return (
    <section className="bg-[#EEF2F4] py-20 px-4">
      <div className="max-w-[1120px] mx-auto max-w-[68ch]">
        <h2
          className="text-[clamp(1.5rem,3.5vw,2rem)] font-semibold text-[#14263A] mb-6"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Kamu tidak harus menunggu sampai "cukup parah".
        </h2>
        <p className="text-lg text-[#14263A]/80 leading-relaxed mb-4">
          Banyak orang baru mencari bantuan setelah berbulan-bulan menahan.
          Padahal bicara dengan orang yang terlatih bisa dimulai kapan saja:
          saat bingung, saat lelah, atau saat kamu hanya ingin didengarkan tanpa
          dihakimi.
        </p>
        <p className="text-lg text-[#14263A]/80 leading-relaxed mb-8">
          Satu sesi tidak mengikatmu pada apa pun. Kamu boleh mencoba, lalu
          memutuskan.
        </p>
        <a
          href="#jadwal"
          className="inline-flex items-center justify-center h-12 px-7 rounded-full border-2 border-[#14263A]/20 text-[#14263A] font-semibold text-base hover:border-[#14263A]/40 transition-colors"
        >
          Lihat jadwal terdekat
        </a>
      </div>
    </section>
  );
}
