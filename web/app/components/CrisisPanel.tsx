export default function CrisisPanel() {
  return (
    <aside
      className="bg-[#14263A] border-t border-white/10 px-4 py-6"
      role="complementary"
      aria-label="Bantuan darurat"
    >
      <div className="max-w-[1120px] mx-auto">
        <p className="text-[#EEF2F4]/80 text-sm leading-relaxed">
          <span className="font-semibold text-[#EEF2F4]">
            Layanan ini bukan untuk kondisi darurat.
          </span>{" "}
          Bila kamu atau seseorang di dekatmu dalam bahaya, atau berpikir untuk
          menyakiti diri, segera hubungi IGD rumah sakit terdekat atau layanan
          krisis resmi:{" "}
          <a
            href="tel:[nomor-layanan-krisis]"
            className="font-semibold text-[#E3A93B] underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            [nomor layanan krisis — verifikasi sebelum tayang]
          </a>
          . Kamu tidak harus menghadapinya sendirian.
        </p>
      </div>
    </aside>
  );
}
