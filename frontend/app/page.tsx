import LandingNav from "@/components/landing/LandingNav";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary-container/20 flex flex-col font-sans">
      <LandingNav />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}


