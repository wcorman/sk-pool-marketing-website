import HeroSection from "./components/HeroSection";
import HeroSectionAlt from "./components/HeroSectionAlt";
import AboutPoolSection from "./components/AboutPoolSection";
import ServicesSection from "./components/ServicesSection";
import ProfessionalInstallationSection from "./components/ProfessionalInstallationSection";
import DivingIntoDreamsSection from "./components/DivingIntoDreamsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <HeroSection /> */}
      <HeroSectionAlt />
      <AboutPoolSection />
      <ServicesSection />
      <ProfessionalInstallationSection />
      <DivingIntoDreamsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
