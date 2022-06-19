import { useState } from "react";

import dynamic from "next/dynamic";
import HomeSection from "components/Home/HomeSection";
import Navbar from "components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import ServicesSection from "components/Services/ServicesSection";
const Sidebar = dynamic(() => import("components/Navbar/Sidebar"));

export default function HomePage() {
  const [showSidebar, setShowSidebar] = useState(null);

  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main>
        <HomeSection />
        <ServicesSection />
        <AnimatePresence>
          {showSidebar && (
            <Sidebar
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
