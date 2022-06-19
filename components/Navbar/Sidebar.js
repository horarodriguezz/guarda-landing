import { motion } from "framer-motion";
import styles from "styles/Navbar/Sidebar.module.css";

const Sidebar = ({ setShowSidebar }) => {
  const variant = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      x: "-100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.aside
      variants={variant}
      initial='initial'
      animate='animate'
      exit='exit'
      className={styles.sidebar}
    >
      <nav className={styles.sidebar__nav}>
        <ul className={styles.nav__list}>
          <li
            onClick={() => setShowSidebar(false)}
            className={styles.nav__list_item}
          >
            <a
              href='#'
              onClick={() => {
                window.scroll({ y: 0, behavior: "smooth" });
              }}
            >
              Inicio
            </a>
          </li>
          <li
            onClick={() => setShowSidebar(false)}
            className={styles.nav__list_item}
          >
            <a href='#servicios'>Servicios</a>
          </li>
          <li
            onClick={() => setShowSidebar(false)}
            className={styles.nav__list_item}
          >
            <a href='#nosotros'>Nosotros</a>
          </li>
          <li
            onClick={() => setShowSidebar(false)}
            className={styles["nav__list_item--button"]}
          >
            <a href='#contacto'>Contacto</a>
          </li>
          <li
            onClick={() => setShowSidebar(false)}
            className={styles["nav__list_item--button"]}
          >
            <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>Log In</a>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
