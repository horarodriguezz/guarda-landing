import styles from "styles/Navbar/NavigationList.module.css";

const NavigationList = () => {
  return (
    <nav className={styles.navlist}>
      <ul className={styles.navlist__list}>
        <li className={styles.navlist__list_item}>
          <a href='#'>Inicio</a>
        </li>
        <li className={styles.navlist__list_item}>
          <a href='#'>Servicios</a>
        </li>
        <li className={styles.navlist__list_item}>
          <a href='#'>Nosotros</a>
        </li>
        <li className={styles["navlist__list_item--button"]}>
          <a href='#'>Contacto</a>
        </li>
        <li className={styles["navlist__list_item--button"]}>
          <a href='#'>Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationList;
