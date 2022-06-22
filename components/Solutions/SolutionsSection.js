import BackgroundImage from "components/BackgroundImage";
import styles from "styles/Solutions/SolutionsSection.module.css";
import Industry from "./Industry";

const SolutionsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__container_title}>
          Una solución para cada{" "}
          <span className={styles.title__destacated}>Industria</span>
        </h2>
        <div className={styles.section__container_industries}>
          <Industry
            icon={"/assets/icons/person.png"}
            text={"Recursos Humanos"}
          />
          <Industry icon={"/assets/icons/dollar.png"} text={"Bancos Seguros"} />
          <Industry
            icon={"/assets/icons/academy.png"}
            text={"Sector público"}
          />
          <Industry
            icon={"/assets/icons/charity.png"}
            text={"Sistema de Salud"}
          />
          <Industry
            icon={"/assets/icons/university.png"}
            text={"Sistema educativo"}
          />
        </div>
      </div>
      <BackgroundImage src={"/assets/backgrounds/bluebg.jpg"} fit={"cover"} />
    </section>
  );
};

export default SolutionsSection;
