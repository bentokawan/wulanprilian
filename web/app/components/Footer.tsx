"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      className="px-6 pb-6 pt-0"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Footer body */}
      <div className="container-page">
        {/* Grid utama */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-14"
          style={{ borderTop: "1px solid var(--color-hair)" }}
        >
          {/* Kol 1: Brand */}
          <div className="lg:col-span-1">
            <p className="font-bold text-base mb-3" style={{ color: "var(--color-ink)" }}>
              [Nama Konselor]
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Konseling psikologi & hipnoterapi, online dan tatap muka.
            </p>
          </div>

          {/* Kol 2: Layanan */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--color-ink)" }}
            >
              Layanan
            </p>
            <ul className="space-y-3">
              {[
                { label: "Konseling psikologi", href: "#layanan" },
                { label: "Hipnoterapi", href: "#layanan-hipnoterapi" },
                { label: "Event & workshop", href: "#event" },
                { label: "Cara kerja", href: "#cara-kerja" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm hover:opacity-70 transition-opacity flex items-center gap-1"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kol 3: Lainnya */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "var(--color-ink)" }}
            >
              Lainnya
            </p>
            <ul className="space-y-3">
              {[
                { label: "Kebijakan privasi", href: "/kebijakan-privasi" },
                { label: "Ketentuan layanan", href: "/ketentuan-layanan" },
                { label: "Kebijakan refund", href: "/kebijakan-refund" },
                { label: "FAQ", href: "#faq" },
                {
                  label: "Instagram ↗",
                  href: "https://instagram.com",
                  external: true,
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kol 4: Newsletter / CTA */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-ink)" }}
            >
              Dikabari event
            </p>
            <p className="text-sm mb-5" style={{ color: "var(--color-muted)" }}>
              Dapat info jadwal, event, dan tips kesehatan mental lebih dulu.
            </p>
            {/* Email input */}
            <div
              className="flex items-center rounded-full overflow-hidden pr-1"
              style={{ border: "1px solid var(--color-hair)", background: "var(--color-bg)" }}
            >
              <input
                type="email"
                placeholder="email@kamu.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 text-sm px-4 py-2.5 bg-transparent outline-none"
                style={{ color: "var(--color-ink)" }}
              />
              <button
                type="button"
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity hover:opacity-80"
                style={{ background: "var(--color-ink)" }}
                aria-label="Daftar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3 py-5 text-xs"
          style={{
            borderTop: "1px solid var(--color-hair)",
            color: "var(--color-muted)",
          }}
        >
          <span>© 2026 [Nama Konselor] · Hak cipta dilindungi</span>
          <span>Layanan kesehatan mental · Bukan untuk kondisi darurat</span>
        </div>
      </div>
    </footer>
  );
}
