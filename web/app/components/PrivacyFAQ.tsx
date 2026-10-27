"use client";

const faqs = [
  {
    q: "Konseling dan hipnoterapi sama?",
    a: "Tidak. Konseling berfokus pada bicara dan memahami, hipnoterapi memakai relaksasi dan fokus. Keduanya bukan pengganti perawatan medis.",
  },
  {
    q: "Aku dikendalikan saat hipnoterapi?",
    a: "Tidak. Kamu tetap sadar dan bisa berhenti kapan saja.",
  },
  {
    q: "Kalau tidak cocok?",
    a: "Wajar. Kamu boleh berhenti atau mencoba pendekatan lain.",
  },
  {
    q: "Bisa untuk kondisi darurat?",
    a: "Tidak. Layanan ini bukan untuk kondisi darurat. Lihat kontak bantuan di footer.",
  },
];

export default function PrivacyFAQ() {
  return (
    <section className="container-page section-spacing" id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Privasi */}
        <div>
          <h2 className="mb-8">Ceritamu tetap milikmu</h2>
          <ul className="space-y-4">
            {[
              "Nama panggilan boleh",
              "Sesi tidak direkam",
              "Kami hanya meminta data yang dibutuhkan untuk menjadwalkan",
              "Hapus datamu kapan saja lewat [email kontak]",
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

        {/* FAQ */}
        <div>
          <h2 className="mb-8">FAQ</h2>
          <div className="space-y-0">
            {faqs.map((faq, idx) => (
              <details
                key={faq.q}
                className="py-4"
                style={{
                  borderTop: idx === 0 ? "1px solid var(--color-hair)" : undefined,
                  borderBottom: "1px solid var(--color-hair)",
                }}
              >
                <summary className="font-semibold flex justify-between items-center cursor-pointer list-none">
                  {faq.q}
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm ml-4"
                    style={{ borderColor: "var(--color-ink)" }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
