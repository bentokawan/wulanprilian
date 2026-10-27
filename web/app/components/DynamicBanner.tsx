"use client";

import { useState } from "react";

export default function DynamicBanner() {
  const [current, setCurrent] = useState(0);

  const banners = [
    {
      type: "event",
      title: "Workshop: tidur lebih tenang",
      text: "Sabtu, [tanggal], [jam] WIB. Online, 8 kursi.",
      cta: "Daftar workshop",
      href: "#event",
      color: "var(--color-mint)",
    },
    {
      type: "info",
      title: "Jadwal minggu ini sudah dibuka",
      text: "Pilih jam yang cocok dengan harimu.",
      cta: "Lihat jadwal",
      href: "#jadwal",
      color: "var(--color-purple)",
    },
  ];

  if (banners.length === 0) return null;

  const banner = banners[current];

  return (
    <section className="container-page section-spacing">
      <div className="card-white grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
        {/* Teks kiri */}
        <div>
          <h3 className="font-bold mb-2" style={{ color: "var(--color-ink)" }}>
            {banner.title}
          </h3>
          <p className="text-sm mb-4" style={{ color: "var(--color-muted)" }}>
            {banner.text}
          </p>
          <a href={banner.href} className="btn-secondary text-sm">
            {banner.cta}
          </a>
        </div>

        {/* Blok warna kanan */}
        <div
          className="w-32 h-32 rounded-[20px] flex items-center justify-center text-2xl font-bold"
          style={{ background: banner.color, color: "var(--color-bg)" }}
        >
          {banner.type === "event" ? "📅" : "ℹ️"}
        </div>
      </div>
    </section>
  );
}
