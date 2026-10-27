export default function Services() {
  return (
    <section className="container-page section-spacing" id="layanan">
      <h2 className="text-center mb-12">Dua cara untuk dibantu</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Konseling */}
        <div className="card-v4" style={{ background: "var(--color-sage-300)" }}>
          <div className="vertical-tab">LAYANAN</div>
          <h3 className="mb-3">Konseling psikologi</h3>
          <p className="mb-4">Bicara, pahami, temukan langkah kecil. Cocok untuk tekanan kerja, hubungan, dan perasaan yang membingungkan.</p>
          <ul className="text-sm mb-4 space-y-2">
            <li>• Cocok untuk: tekanan kerja, hubungan, perasaan yang membingungkan</li>
            <li>• [durasi] menit · [tarif] · online atau tatap muka</li>
          </ul>
          <a href="#booking" className="pill-outline border-ink">Pesan konseling ↗</a>
        </div>
        {/* Hipnoterapi */}
        <div className="card-v4" style={{ background: "var(--color-sage-100)" }}>
          <h3 className="mb-3">Hipnoterapi</h3>
          <p className="mb-4">Relaksasi dan fokus untuk mengubah kebiasaan dan respons cemas. Kamu tetap sadar dan memegang kendali.</p>
          <ul className="text-sm mb-4 space-y-2">
            <li>• Cocok untuk: kebiasaan, tidur, ketenangan</li>
            <li>• [durasi] menit · [tarif] · online atau tatap muka</li>
          </ul>
          <a href="#booking" className="pill-outline border-ink">Pesan hipnoterapi ↗</a>
        </div>
      </div>
      <details className="card-v4 mt-6">
        <summary className="cursor-pointer font-semibold flex justify-between items-center">
          Bingung pilih? <span className="text-xl">+</span>
        </summary>
        <div className="mt-4">
          <p>Pilih satu untuk sesi pertama, pendekatannya kita tentukan bersama. Keduanya bukan pengganti perawatan medis.</p>
        </div>
      </details>
    </section>
  );
}
