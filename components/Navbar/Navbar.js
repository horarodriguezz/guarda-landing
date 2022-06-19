import { useScrollDirection } from "hooks/useScrollDirection";

import NavbarLogo from "./NavbarLogo";
import styles from "styles/Navbar/Navbar.module.css";
import ToggleButton from "./ToggleButton";
import UserLogo from "./UserLogo";
import NavigationList from "./NavigationList";

const Navbar = ({ showSidebar, setShowSidebar }) => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      id='#header'
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
    </header>
  );
};

export default Navbar;
