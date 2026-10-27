"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#layanan", label: "Layanan" },
    { href: "#konselor", label: "Konselor" },
    { href: "#cara-kerja", label: "Cara kerja" },
    { href: "#event", label: "Event" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg">
      <div className="container-page h-[72px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#" className="text-sm tracking-widest flex items-center">
            Wulan Prilian
          </a>
        </div>

        {/* Menu Tengah */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {link.label}
              {link.label === "Event" && (
                <span className="ml-1.5 inline-block w-2 h-2 rounded-full bg-sage-300" />
              )}
            </a>
          ))}
        </div>

        {/* Aksi Kanan */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#jadwal" className="text-[15px] font-medium flex items-center gap-1 hover:opacity-70 transition-opacity">
            Lihat jadwal <span className="text-xs">↗</span>
          </a>
          <a href="#booking" className="pill-black">
            Pesan sesi
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Tiga Segmen Garis Halus (v4 Signature) */}
      <div className="flex w-full px-4 gap-4 opacity-50">
        <div className="h-[1px] bg-hair w-1/4" />
        <div className="h-[1px] bg-hair flex-1" />
        <div className="h-[1px] bg-hair w-1/4" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-bg border-b border-hair py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a href="#booking" className="pill-black w-full text-center">Pesan sesi</a>
            <a href="#jadwal" className="pill-outline w-full text-center">Lihat jadwal</a>
          </div>
        </div>
      )}
    </nav>
  );
}
