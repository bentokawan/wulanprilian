"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  // Sumber: tabel banners tipe `info`. Kosong = tidak tampil.
  const announcement = {
    text: 'Workshop "Tidur lebih tenang" dibuka,',
    highlight: "8 kursi tersisa.",
    cta: "Lihat detail",
    href: "#event",
  };

  if (dismissed) return null;

  return (
    <div className="bg-[#4F7A6B] text-white text-sm px-4 py-2 flex items-center justify-center gap-2 relative">
      <p className="text-center">
        {announcement.text}{" "}
        <span className="font-semibold">{announcement.highlight}</span>{" "}
        <a href={announcement.href} className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">
          {announcement.cta}
        </a>
      </p>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Tutup pengumuman"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        ×
      </button>
    </div>
  );
}
