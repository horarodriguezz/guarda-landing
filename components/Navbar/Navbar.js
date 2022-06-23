import { useState, useEffect } from "react";
import { useScrollDirection } from "hooks/useScrollDirection";

import dynamic from "next/dynamic";
import NavbarLogo from "./NavbarLogo";
import styles from "styles/Navbar/Navbar.module.css";
import ToggleButton from "./ToggleButton";
import UserLogo from "./UserLogo";
import NavigationList from "./NavigationList";
import { AnimatePresence } from "framer-motion";
const Sidebar = dynamic(() => import("components/Navbar/Sidebar"));

const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (showSidebar) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [showSidebar]);

  return (
    <header
      id='header'
      className={scrollDirection ? styles.header : styles["header--hidden"]}
    >
      <div className={styles.header__container}>
        <ToggleButton
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <NavbarLogo />
        <UserLogo />
        <NavigationList />
      </div>
      <AnimatePresence>
        {showSidebar && (
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
