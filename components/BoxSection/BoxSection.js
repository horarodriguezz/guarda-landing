import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "hooks/useWindowSize";

import Image from "next/image";
import styles from "styles/BoxSection/BoxSection.module.css";

const BoxSection = () => {
  const width = useWindowSize();

  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.section__container_logo}>
          <Image
            src='/assets/icons/box_logo.png'
            alt='Logo de Box Custodia de Archivos S.A.'
            quality={100}
            sizes={width > 1280 ? "70vw" : "30vw"}
            layout='fill'
            objectFit='contain'
            objectPosition='center'
          />
        </div>
        <p className={styles.section__container_text}>
          ¡Somos una compañía argentina apasionada por la innovación! Con más de
          25 años de experiencia y trayectoria, nuestro servicio de &quot;Guarda
          y Gestión documental&quot; revoluciona y simplifica la gestión de tus
          procesos de negocio.
        </p>
        <a
          className={styles.section__container_link}
          target='_blank'
          rel='noreferrer'
          href='https://www.boxcustodia.com/cms/'
        >
          Conocé nuestra empresa Box custodia{" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </section>
  );
};

export default BoxSection;
