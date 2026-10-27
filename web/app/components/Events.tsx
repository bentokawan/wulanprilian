export default function Events() {
  const events = [
    {
      title: "Workshop: tidur lebih tenang",
      date: "Sabtu, [tanggal]",
      time: "[jam] WIB",
      format: "Online",
      price: "Gratis",
      seats: 8,
    },
  ];

  return (
    <section className="container-page section-spacing" id="event">
      <h2 className="mb-12">Belajar bersama</h2>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.title} className="card-v4 relative">
              {/* Tab event */}
              <div className="vertical-tab" style={{ background: "var(--color-lav-100)" }}>
                EVENT
              </div>

              {/* Label tanggal amber */}
              <span
                className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-4"
                style={{ background: "var(--color-amber)", color: "var(--color-ink)" }}
              >
                {event.date} · {event.time}
              </span>

              <h3 className="mb-3">{event.title}</h3>

              <div className="flex gap-4 text-sm mb-6">
                <span>{event.format}</span>
                <span
                  className="px-2 py-0.5 rounded font-bold text-xs"
                  style={{ background: event.price === "Gratis" ? "var(--color-sage-100)" : "var(--color-lav-100)" }}
                >
                  {event.price}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                  {event.seats} kursi tersisa
                </span>
                <a href="#daftar" className="pill-outline border-ink text-sm">
                  Daftar
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-v4 text-center py-12 max-w-lg mx-auto">
          <p className="mb-6">Belum ada event. Mau dikabari?</p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="email@kamu.com"
              className="flex-1 px-4 py-2 rounded-full text-sm border"
              style={{ borderColor: "var(--color-hair)" }}
            />
            <button className="pill-black px-6 text-sm">
              Kabari aku
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
