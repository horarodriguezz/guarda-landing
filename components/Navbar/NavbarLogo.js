import { useWindowSize } from "hooks/useWindowSize";

import Image from "next/image";
import styles from "styles/Navbar/NavbarLogo.module.css";

const NavbarLogo = () => {
  const width = useWindowSize();

  return (
    <div className={styles.logocontainer}>
      <Image
        src='/assets/logo.png'
        layout='fill'
        sizes={width < 1024 ? "40vw" : "20vw"}
        quality={100}
        objectFit='contain'
        objectPosition='center'
        priority
      />
    </div>
  );
};

export default NavbarLogo;
