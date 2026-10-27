export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Pilih", desc: "Layanan, format, dan jam (WIB)" },
    { num: "02", title: "Bayar", desc: "QRIS, e-wallet, atau VA. Slot ditahan selama kamu membayar." },
    { num: "03", title: "Datang", desc: "Tautan di email, plus pengingat." },
  ];

  return (
    <section className="container-page section-spacing" id="cara-kerja">
      <h2 className="text-center mb-16">Tiga langkah sampai sesi</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, i) => (
          <div key={step.num} className="flex flex-col items-start gap-4">
            {/* Titik langkah */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base"
              style={{
                background: i === 0 ? "var(--color-ink)" : "transparent",
                color: i === 0 ? "var(--color-bg)" : "var(--color-ink)",
                border: "1px solid var(--color-ink)",
              }}
            >
              {step.num}
            </div>
            <div>
              <h3 className="mb-2">{step.title}</h3>
              <p className="text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a href="#booking" className="pill-black">
          Mulai pesan sesi ↗
        </a>
      </div>
    </section>
  );
}
