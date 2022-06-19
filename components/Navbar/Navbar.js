import { useState } from "react";
import { useScrollDirection } from "hooks/useScrollDirection";

import NavbarLogo from "./NavbarLogo";
import styles from "styles/Navbar/Navbar.module.css";
import ToggleButton from "./ToggleButton";
import UserLogo from "./UserLogo";
import NavigationList from "./NavigationList";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(null);
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={scrollDirection ? styles["header--hidden"] : styles.header}
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
    </header>
  );
};

export default Navbar;
