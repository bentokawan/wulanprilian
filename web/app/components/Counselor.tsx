export default function Counselor() {
  return (
    <section className="container-page section-spacing" id="konselor">
      <h2 className="mb-12">Kenalan dulu dengan <span className="mark">[Nama Konselor]</span></h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="card-v4" style={{ background: "var(--color-lav-200)" }}>
          <div className="vertical-tab">TERVERIFIKASI</div>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-40 h-48 rounded-[20px] overflow-hidden" style={{ background: "var(--color-hair)" }}>
              <span className="text-center p-4 text-xs" style={{ color: "var(--color-ink)" }}>
                [Foto Konselor<br/>4:5 ratio]
              </span>
            </div>
          </div>
        </div>
        <div>
          <blockquote className="text-lg italic border-l-4 pl-4 mb-6" style={{ borderColor: "var(--color-sage-300)" }}>
            "[Satu kalimat jujur tentang mengapa kamu menekuni bidang ini.]"
          </blockquote>
          <p className="mb-6">[Dua kalimat: pengalaman, jenis klien tanpa identitas, gaya kerja yang tenang dan tidak menghakimi.]</p>
          <div className="mb-6">
            <p className="font-semibold mb-3">Di sesi pertama:</p>
            <ul className="space-y-2">
              {["Kamu didengarkan tanpa dihakimi", "Kamu yang menentukan seberapa banyak bercerita", "Kamu pulang dengan langkah berikutnya"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: "var(--color-sage-300)" }} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold border" style={{ border: "1px solid var(--color-sage-300)", background: "var(--color-sage-100)", color: "var(--color-sage-deep)" }}>
              ✓ Psikolog [bidang], STR/SIPP [nomor]
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold border" style={{ border: "1px solid var(--color-sage-300)", background: "var(--color-sage-100)", color: "var(--color-sage-deep)" }}>
              ✓ Hipnoterapis [lembaga], [tahun]
            </span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="font-semibold underline">Lihat CV</a>
            <a href="#" className="font-semibold underline">Portofolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}
