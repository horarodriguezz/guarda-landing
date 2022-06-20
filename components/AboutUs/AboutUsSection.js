import { useWindowSize } from "hooks/useWindowSize";
import BackgroundImage from "./BackgroundImage";
import styles from "styles/AboutUs/AboutUsSection.module.css";

const AboutUsSection = () => {
  const width = useWindowSize();

  return (
    <section id='nosotros' className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__container_title}>
          Un sistema de Box Custodia
        </h2>
        <p className={styles.section__container_description}>
          Luego de procesar y organizar tus cajas, subimos la base de datos
          resultante a una plataforma donde podrás consultar digitalmente tus
          documentos.
        </p>
      </div>
      {width > 1280 && <BackgroundImage />}
    </section>
  );
};

export default AboutUsSection;
