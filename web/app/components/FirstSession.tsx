export default function FirstSession() {
  return (
    <section className="container-page section-spacing" id="sesi-tarif">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Kiri */}
        <div className="pr-0 lg:pr-12">
          <h2 className="mb-6">
            Sesi pertamamu,{" "}
            <span className="mark">tanpa kejutan</span>
          </h2>
          <ul className="space-y-3 mb-6">
            {[
              "Perkenalan singkat dan kesepakatan kerahasiaan",
              "Bercerita sebanyak yang kamu mau, berhenti kapan saja",
              "Tidak ada tekanan untuk lanjut",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ background: "var(--color-sage-300)" }}
                />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Garis vertikal */}
        <div
          className="hidden lg:block absolute left-1/2 h-full w-[1px]"
          style={{ background: "var(--color-hair)", transform: "translateX(-50%)" }}
        />

        {/* Kanan */}
        <div className="pt-8 lg:pt-0 lg:pl-12 border-t lg:border-t-0 lg:border-l" style={{ borderColor: "var(--color-hair)" }}>
          <h3 className="font-bold mb-6">Tarif dan aturan</h3>
          <ul className="space-y-4 mb-6">
            <li className="flex justify-between">
              <span>Konseling psikologi</span>
              <span className="font-bold">[tarif]</span>
            </li>
            <li
              className="w-full h-[1px]"
              style={{ background: "var(--color-hair)" }}
            />
            <li className="flex justify-between">
              <span>Hipnoterapi</span>
              <span className="font-bold">[tarif]</span>
            </li>
            <li
              className="w-full h-[1px]"
              style={{ background: "var(--color-hair)" }}
            />
            <li className="text-sm">
              Batal atau ubah jadwal gratis bila lebih dari 24 jam sebelum sesi.
            </li>
          </ul>
          <a
            href="/kebijakan"
            className="text-sm font-semibold underline"
            style={{ color: "var(--color-sage-deep)" }}
          >
            Lihat kebijakan →
          </a>
        </div>
      </div>
    </section>
  );
}
