import styles from "styles/Navbar/NavigationList.module.css";

const NavigationList = () => {
  return (
    <nav className={styles.navlist}>
      <ul className={styles.navlist__list}>
        <li className={styles.navlist__list_item}>
          <a
            href='#'
            onClick={() => {
              window.scroll({ y: 0, behavior: "smooth" });
            }}
          >
            Inicio
          </a>
        </li>
        <li className={styles.navlist__list_item}>
          <a href='#servicios'>Servicios</a>
        </li>
        <li className={styles.navlist__list_item}>
          <a href='#nosotros'>Nosotros</a>
        </li>
        <li className={styles["navlist__list_item--button"]}>
          <a href='#contacto'>Contacto</a>
        </li>
        <li className={styles["navlist__list_item--button"]}>
          <a href={process.env.NEXT_PUBLIC_LOGIN_URL || "#"}>Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationList;
