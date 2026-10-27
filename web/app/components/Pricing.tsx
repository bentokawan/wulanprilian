export default function Pricing() {
  const rows = [
    { label: "Konseling psikologi", value: "[tarif] · [durasi] menit" },
    { label: "Hipnoterapi", value: "[tarif] · [durasi] menit" },
    { label: "Pembayaran", value: "QRIS, e-wallet, VA bank" },
    {
      label: "Ubah jadwal atau batal",
      value: "Gratis bila lebih dari 24 jam sebelum sesi",
    },
  ];

  return (
    <section className="py-20 px-4" style={{ background: "var(--color-paper)" }}>
      <div className="container-page">
        <h2
          className="font-bold leading-[1.1] mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--color-ink)" }}
        >
          Tarif dan kebijakan
        </h2>
        <div
          className="rounded-[24px] overflow-hidden border"
          style={{ borderColor: "var(--color-line)" }}
        >
          <table className="w-full text-sm">
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 === 0 ? "" : ""} style={{ background: i % 2 === 0 ? "var(--color-paper)" : "var(--color-line)" }}>
                  <td
                    className="px-6 py-4 font-bold w-1/3 align-top"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {r.label}
                  </td>
                  <td
                    className="px-6 py-4"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {r.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
