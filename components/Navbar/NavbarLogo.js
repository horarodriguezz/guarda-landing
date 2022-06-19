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
        objectFit='contain'
        objectPosition='center'
        priority={true}
        alt='Logo de Guarda y Custodia'
      />
    </div>
  );
};

export default NavbarLogo;
