import Image from "next/image";
import styles from "styles/AboutUs/Benefit.module.css";

const Benefit = ({ icon, text }) => {
  return (
    <div className={styles.container__benefit}>
      <div className={styles.container__benefit_icon}>
        <div className={styles.icon__container}>
          <Image
            src={icon}
            alt='Beneficio de usar Box Custodia'
            layout='fill'
            sizes='10vw'
            objectFit='contain'
            objectPosition='center'
          />
        </div>
      </div>
      <p className={styles.container__benefit_text}>{text}</p>
    </div>
  );
};

export default Benefit;
