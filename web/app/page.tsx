import Hero from "./components/Hero";
import PromiseStripe from "./components/PromiseStripe";
import NightScene from "./components/NightScene";
import Services from "./components/Services";
import Counselor from "./components/Counselor";
import HowItWorks from "./components/HowItWorks";
import FirstSession from "./components/FirstSession";
import Events from "./components/Events";
import PrivacyFAQ from "./components/PrivacyFAQ";
import ClosingCTA from "./components/ClosingCTA";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <>
      <main className="pt-[72px]">
        {/* 1. Hero: headline + 4 kartu */}
        <Hero />

        <SectionDivider variant="fade" />

        {/* 2. Janji: 3 item */}
        <PromiseStripe />

        <SectionDivider variant="fade" />

        {/* 3. Adegan Malam */}
        <NightScene />

        <SectionDivider variant="fade" />

        {/* 4. Layanan */}
        <Services />

        <SectionDivider variant="dotted" />

        {/* 5. Konselor */}
        <Counselor />

        <SectionDivider variant="fade" />

        {/* 6. Cara Kerja */}
        <HowItWorks />

        <SectionDivider variant="dotted" />

        {/* 7. Sesi Pertama & Tarif */}
        <FirstSession />

        <SectionDivider variant="fade" />

        {/* 8. Event */}
        <Events />

        <SectionDivider variant="fade" />

        {/* 9. Privasi + FAQ */}
        <PrivacyFAQ />

        <SectionDivider variant="fade" />

        {/* 10. Penutup */}
        <ClosingCTA />
      </main>

      {/* 11. Footer */}
      <Footer />
    </>
  );
}
