export default function PromiseStripe() {
  const promises = [
    {
      icon: "✓",
      title: "Kredensial jelas",
      desc: "Psikolog dan hipnoterapis terverifikasi.",
    },
    {
      icon: "→",
      title: "Mudah dipesan",
      desc: "Jadwal, bayar, tautan. Beberapa menit.",
    },
    {
      icon: "🔒",
      title: "Privasi dijaga",
      desc: "Nama panggilan boleh, tanpa rekaman.",
    },
  ];

  return (
    <section className="container-page section-spacing">
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {promises.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "var(--color-lav-100)" }}
            >
              <span className="font-bold" style={{ color: "var(--color-lav-deep)" }}>{item.icon}</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
