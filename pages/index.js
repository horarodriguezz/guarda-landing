import ProcessSection from "components/ProcessSection/ProcessSection";
import HomeSection from "components/Home/HomeSection";
import Navbar from "components/Navbar/Navbar";
import ServicesSection from "components/Services/ServicesSection";
import AboutUsSection from "components/AboutUs/AboutUsSection";
import BenefitsSection from "components/AboutUs/BenefitsSection";
import SolutionsSection from "components/Solutions/SolutionsSection";
import BoxSection from "components/BoxSection/BoxSection";

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
        <SolutionsSection />
        <BoxSection />
      </main>
    </>
  );
}
