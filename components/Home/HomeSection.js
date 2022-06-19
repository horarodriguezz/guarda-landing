import styles from "styles/Home/HomeSection.module.css";
import HomeContent from "./HomeContent";
import HomeImage from "./HomeImage";

const HomeSection = () => {
  return (
    <section id='inicio' className={styles.homesection}>
      <div className={styles.homesection__container}>
        <HomeImage />
        <HomeContent />
      </div>
    </section>
  );
};

export default HomeSection;
