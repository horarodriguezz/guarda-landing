import ProcessSection from "components/ProcessSection/ProcessSection";
import HomeSection from "components/Home/HomeSection";
import Navbar from "components/Navbar/Navbar";
import ServicesSection from "components/Services/ServicesSection";
import AboutUsSection from "components/AboutUs/AboutUsSection";
import BenefitsSection from "components/AboutUs/BenefitsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <ServicesSection />
        <ProcessSection />
        <AboutUsSection />
        <BenefitsSection />
      </main>
    </>
  );
}
