import styles from "styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        Copyright © 2021 Guarda Documental. Desarrollado por Box Custodia de
        Archivos S.A
      </p>
    </footer>
  );
};

export default Footer;
