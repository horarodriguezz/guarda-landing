import BackgroundImage from "components/BackgroundImage";
import { useWindowSize } from "hooks/useWindowSize";
import Image from "next/image";
import styles from "styles/HowCanHelpYou/FinalSection.module.css";
const FinalSection = () => {
  const width = useWindowSize();

  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.section__container_image}>
          <Image
            src='/assets/icons/persons.png'
            alt=''
            layout='fill'
            sizes={width < 1280 ? "60vw" : "20vw"}
            objectFit='contain'
            objectPosition='center'
          />
        </div>
        <h2 className={styles.section__container_title}>
          ¿Cómo podemos ayudarlo?
        </h2>
        <p className={styles.section__container_description}>
          Llene el formulario ó contáctese con nuestro asistente comercial.
        </p>
      </div>
      <BackgroundImage src={"/assets/backgrounds/whitebg.jpg"} fit={"cover"} />
    </section>
  );
};

export default FinalSection;
