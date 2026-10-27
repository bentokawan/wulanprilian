"use client";

const faqs = [
  {
    q: "Apakah konseling dan hipnoterapi itu sama?",
    a: "Tidak. Konseling berfokus pada bicara dan memahami, hipnoterapi memakai relaksasi dan fokus perhatian. Keduanya tidak menggantikan perawatan medis.",
  },
  {
    q: 'Apakah aku akan "dikendalikan" saat hipnoterapi?',
    a: "Tidak. Kamu tetap sadar, bisa berbicara, dan bisa menghentikan sesi kapan saja.",
  },
  {
    q: "Apakah aku harus menceritakan semuanya?",
    a: "Tidak. Kamu yang menentukan seberapa banyak yang ingin dibagikan.",
  },
  {
    q: "Berapa sesi yang kubutuhkan?",
    a: "Setiap orang berbeda. Di sesi pertama, kita membahas tujuanmu dan memperkirakan langkah berikutnya bersama-sama.",
  },
  {
    q: "Bagaimana kalau aku tidak cocok?",
    a: "Itu wajar. Kamu boleh berhenti kapan saja, atau mencoba pendekatan lain.",
  },
  {
    q: "Bagaimana sesi online berlangsung?",
    a: "Kamu menerima tautan video lewat email. Cukup buka dari HP atau laptop, di tempat yang tenang dan privat.",
  },
  {
    q: "Bagaimana kalau aku harus membatalkan?",
    a: "Bila lebih dari 24 jam sebelum sesi, kamu bisa mengubah jadwal atau membatalkan lewat tautan di email konfirmasi.",
  },
  {
    q: "Apakah ini bisa dipakai saat darurat?",
    a: "Tidak. Layanan ini bukan untuk kondisi darurat. Lihat kontak bantuan di bagian paling bawah halaman.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#EEF2F4] py-20 px-4">
      <div className="max-w-[1120px] mx-auto max-w-[720px]">
        <h2
          className="text-[clamp(1.5rem,3.5vw,2rem)] font-semibold text-[#14263A] mb-10"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Pertanyaan yang sering muncul
        </h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-xl border border-[#14263A]/10 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-4 font-semibold text-[#14263A] cursor-pointer hover:bg-[#14263A]/5 transition-colors min-h-[44px] [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="text-[#4F7A6B] shrink-0 text-lg" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-[#14263A]/75 text-sm leading-relaxed bg-white">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
