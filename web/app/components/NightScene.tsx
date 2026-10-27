"use client";

import { useState } from "react";

interface MoodCard {
  id: string;
  icon: string;
  title: string;
  sign: string;
  insight: string;
  tag: string;
}

const MOOD_CARDS: MoodCard[] = [
  {
    id: "overthinking",
    icon: "💭",
    title: "Pikiran Berputar",
    sign: "Mengulang percakapan & mencemaskan hari esok yang belum tiba",
    insight: "Otakmu tidak rusak — ini reaksi alami saat pikiran kelelahan memproses stres tanpa jeda.",
    tag: "Bisa diurai di: Konseling Psikologi",
  },
  {
    id: "pretending",
    icon: "🎭",
    title: "Lelah Pura-pura Baik",
    sign: "Tersenyum di depan semua orang, tapi runtuh saat sendirian di kamar",
    insight: "Kamu tidak lemah. Kamu hanya terlalu lama memikul ekspektasi orang tanpa tempat bersandar.",
    tag: "Ruang aman: Konseling Bebas Penghakiman",
  },
  {
    id: "insomnia",
    icon: "🔋",
    title: "Energi Habis, Sulit Tidur",
    sign: "Tubuh letih luar biasa, tapi dada gelisah dan mata enggan terpejam",
    insight: "Sistem sarafmu masih dalam mode siaga tinggi karena tekanan yang terpendam.",
    tag: "Solusi relaksasi: Hipnoterapi Klinis",
  },
  {
    id: "hesitant",
    icon: "🌫️",
    title: "Takut Merepotkan",
    sign: "Ingin cerita, tapi takut dianggap berlebihan atau membebani orang lain",
    insight: "Psikolog profesional hadir secara netral dan objektif — tidak ada rasa berutang budi.",
    tag: "Privasi penuh: Sesi 1-on-1 Rahasia",
  },
];

export default function NightScene() {
  const [selectedMoodId, setSelectedMoodId] = useState<string>("overthinking");
  const activeMood = MOOD_CARDS.find((m) => m.id === selectedMoodId) || MOOD_CARDS[0];

  return (
    <section className="container-page section-spacing" id="adegan-malam">
      {/* Container: Light, Bright, Clean Aesthetic with 1px Ink Border & 32px Radius */}
      <div
        className="rounded-[32px] p-6 sm:p-10 lg:p-12 border"
        style={{
          background: "#F9FAF6",
          borderColor: "var(--color-ink)",
        }}
      >
        {/* Header Hook */}
        <div className="max-w-[700px] mx-auto text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-medium mb-4"
            style={{
              background: "var(--color-lav-100)",
              borderColor: "var(--color-lav-200)",
              color: "var(--color-lav-deep)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <span>Pukul 02.13 WIB · Saat lampu mati, tapi pikiran belum</span>
          </div>

          <h2
            className="font-medium text-[clamp(26px,3.4vw,38px)] leading-[1.22] tracking-tight mb-3"
            style={{ color: "var(--color-ink)" }}
          >
            Kamu tidak perlu menunggu sampai &ldquo;cukup{" "}
            <span className="mark font-semibold">parah</span>&rdquo;
          </h2>

          <p className="text-base sm:text-lg" style={{ color: "var(--color-muted)" }}>
            Bicara bukan tanda kamu lemah — kamu hanya sudah terlalu lama memikulnya sendirian.
          </p>
        </div>

        {/* BAGIAN 1: INTERACTIVE CARDS - "Apa yang sedang kamu rasakan?" */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
              style={{ color: "var(--color-sage-deep)" }}
            >
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--color-sage-deep)" }} />
              Pilih tanda yang paling sering kamu rasakan:
            </span>
            <span className="text-xs" style={{ color: "var(--color-muted)" }}>
              Klik kartu untuk detail
            </span>
          </div>

          {/* 4 Mood Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {MOOD_CARDS.map((card) => {
              const isSelected = card.id === selectedMoodId;
              return (
                <button
                  key={card.id}
                  onClick={() => setSelectedMoodId(card.id)}
                  type="button"
                  className="p-4 rounded-[20px] text-left transition-all border cursor-pointer flex flex-col justify-between"
                  style={{
                    background: isSelected ? "var(--color-sage-100)" : "#FFFFFF",
                    borderColor: isSelected ? "var(--color-ink)" : "var(--color-hair)",
                    transform: isSelected ? "translateY(-2px)" : "none",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{card.icon}</span>
                      {isSelected && (
                        <span
                          className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                          style={{
                            background: "var(--color-sage-300)",
                            color: "var(--color-ink)",
                          }}
                        >
                          Dipilih
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: "var(--color-ink)" }}>
                      {card.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      {card.sign}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Insight Box */}
          <div
            className="p-5 rounded-[20px] border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{
              background: "#FFFFFF",
              borderColor: "var(--color-hair)",
            }}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">{activeMood.icon}</span>
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--color-ink)" }}>
                  💡 {activeMood.insight}
                </p>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                  Satu sesi obrolan 50 menit cukup untuk mengurai benang kusut di kepalamu sebelum makin menumpuk.
                </p>
              </div>
            </div>

            <span
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold shrink-0"
              style={{
                background: "var(--color-lav-100)",
                color: "var(--color-lav-deep)",
                border: "1px solid var(--color-lav-200)",
              }}
            >
              ✓ {activeMood.tag}
            </span>
          </div>
        </div>

        {/* BAGIAN 2: PERBANDINGAN POINT CARD - "Mitos vs Kenyataan" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Card Kiri: Yang Sering Kita Tahan */}
          <div
            className="p-6 rounded-[24px] border"
            style={{
              background: "#FFFFFF",
              borderColor: "var(--color-hair)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-[#FDE8E8] text-[#9B1C1C]">
                ✕
              </span>
              <h3 className="text-base font-semibold" style={{ color: "var(--color-ink)" }}>
                Yang Sering Kita Pikirkan
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Harus menunggu sampai 'parah' atau tidak sanggup bangun dari kasur",
                "Takut dihakimi atau dipaksa membuka semua rahasia sekaligus",
                "Mengira konseling mengikat harus ambil paket berkali-kali",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                  <span className="text-[#9B1C1C] font-bold mt-0.5">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Kanan: Yang Sebenarnya Terjadi */}
          <div
            className="p-6 rounded-[24px] border"
            style={{
              background: "var(--color-sage-100)",
              borderColor: "var(--color-ink)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: "var(--color-sage-300)",
                  color: "var(--color-ink)",
                }}
              >
                ✓
              </span>
              <h3 className="text-base font-semibold" style={{ color: "var(--color-ink)" }}>
                Yang Sebenarnya di Sini
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Deteksi dini: Obrolan santai sebelum pikiranmu semakin kusut",
                "Kamu yang memegang kendali: Cerita sebatas apa yang kamu rasa nyaman",
                "Satu sesi tidak mengikat: Coba dulu satu kali, lalu putuskan sendiri",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                  <span className="text-[var(--color-sage-deep)] font-bold mt-0.5">•</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BAGIAN 3: 3 PILAR KEPASTIAN SESI (Point Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <div
            className="p-4 rounded-[18px] border text-center"
            style={{ background: "#FFFFFF", borderColor: "var(--color-hair)" }}
          >
            <span className="text-xl block mb-1">🔒</span>
            <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-ink)" }}>
              Privasi Dijaga Penuh
            </p>
            <p className="text-xs" style={{ color: "var(--color-muted)" }}>
              Boleh nama panggilan, sesi privat tidak direkam
            </p>
          </div>

          <div
            className="p-4 rounded-[18px] border text-center"
            style={{ background: "#FFFFFF", borderColor: "var(--color-hair)" }}
          >
            <span className="text-xl block mb-1">🌙</span>
            <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-ink)" }}>
              Tersedia Slot Malam
            </p>
            <p className="text-xs" style={{ color: "var(--color-muted)" }}>
              Pilihan jam malam online (Google Meet) & tatap muka
            </p>
          </div>

          <div
            className="p-4 rounded-[18px] border text-center"
            style={{ background: "#FFFFFF", borderColor: "var(--color-hair)" }}
          >
            <span className="text-xl block mb-1">🤝</span>
            <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-ink)" }}>
              Tanpa Ikatan Paket
            </p>
            <p className="text-xs" style={{ color: "var(--color-muted)" }}>
              Coba 1 sesi, bebas tentukan kelanjutan sendiri
            </p>
          </div>
        </div>

        {/* BAGIAN 4: ACTION CTA & FOOTNOTE */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a
              href="#jadwal"
              className="pill-primary"
              style={{
                background: "var(--color-sage-300)",
                color: "var(--color-ink)",
                border: "1px solid var(--color-ink)",
              }}
            >
              <span>Lihat jadwal terdekat</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            <a
              href="#cara-kerja"
              className="pill-outline"
              style={{
                color: "var(--color-ink)",
                borderColor: "var(--color-ink)",
              }}
            >
              Cara kerja sesi
            </a>
          </div>

          <p className="text-xs italic" style={{ color: "var(--color-muted)" }}>
            Bukan diagnosis klinis, hanya tanda bahwa apa yang kamu rasakan itu nyata.
          </p>
        </div>
      </div>
    </section>
  );
}
