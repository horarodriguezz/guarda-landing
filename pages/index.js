import HomeSection from "components/Home/HomeSection";
import Navbar from "components/Navbar/Navbar";
import ServicesSection from "components/Services/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <ServicesSection />
      </main>
    </>
  );
}
