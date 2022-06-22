import { useState } from "react";
import ProcessSection from "components/ProcessSection/ProcessSection";
import HomeSection from "components/Home/HomeSection";
import Navbar from "components/Navbar/Navbar";
import ServicesSection from "components/Services/ServicesSection";
import AboutUsSection from "components/AboutUs/AboutUsSection";
import BenefitsSection from "components/AboutUs/BenefitsSection";
import SolutionsSection from "components/Solutions/SolutionsSection";
import BoxSection from "components/BoxSection/BoxSection";
import FinalSection from "components/HowCanHelpYou/FinalSection";
import FormSection from "components/FormSection/FormSection";
import Footer from "components/Footer";
import SubmitModal from "components/SubmitModal";

export default function HomePage() {
  const [status, setStatus] = useState(null);

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
        <FinalSection />
        <FormSection setStatus={setStatus} />
      </main>
      <Footer />
      {status && <SubmitModal status={status} setStatus={setStatus} />}
    </>
  );
}
