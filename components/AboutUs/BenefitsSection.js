import styles from "styles/AboutUs/BenefitsSection.module.css";
import Benefit from "./Benefit";

const BenefitsSection = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefits__container}>
        <Benefit
          icon={"/assets/icons/document.png"}
          text={"Genera tus reportes"}
        />
        <Benefit
          icon={"/assets/icons/verify.png"}
          text={"Realiza las consultas que necesites"}
        />
        <Benefit
          icon={"/assets/icons/shopping-list.png"}
          text={"Seguimiento de su estado documental"}
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
