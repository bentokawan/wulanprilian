export default function Privacy() {
  return (
    <section className="bg-[#EEF2F4] py-20 px-4">
      <div className="max-w-[1120px] mx-auto max-w-[68ch]">
        <h2
          className="text-[clamp(1.5rem,3.5vw,2rem)] font-semibold text-[#14263A] mb-8"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Cerita kamu tetap milikmu
        </h2>
        <ul className="space-y-3 mb-8">
          {[
            "Kamu boleh memakai nama panggilan saat memesan.",
            "Sesi tidak direkam.",
            "Kami hanya meminta data yang dibutuhkan untuk menjadwalkan sesi.",
            "Pesan konfirmasi tidak menyebut keluhan kamu.",
            "Kamu bisa meminta datamu dihapus lewat [email kontak].",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#14263A]/80">
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4F7A6B] shrink-0"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="/kebijakan-privasi"
            className="text-[#4F7A6B] font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity"
          >
            Kebijakan privasi
          </a>
          <a
            href="/ketentuan-layanan"
            className="text-[#4F7A6B] font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity"
          >
            Ketentuan layanan
          </a>
        </div>
      </div>
    </section>
  );
}
