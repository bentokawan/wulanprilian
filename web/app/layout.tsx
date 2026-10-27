import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Konseling psikologi & hipnoterapi online dan tatap muka | Wulan Prilian",
  description:
    "Pilih jadwal, bayar QRIS, e-wallet, atau VA, terima tautan sesi dalam beberapa menit. Konselor dengan kredensial jelas, privasi dijaga.",
  openGraph: {
    title: "Konseling psikologi & hipnoterapi online dan tatap muka | Wulan Prilian",
    description:
      "Pilih jadwal, bayar QRIS, e-wallet, atau VA, terima tautan sesi dalam beberapa menit. Konselor dengan kredensial jelas, privasi dijaga.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-plus-jakarta-sans), system-ui, sans-serif" }}>
        <Navbar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
