import { useWindowSize } from "hooks/useWindowSize";

import Image from "next/image";
import styles from "styles/Services/Service.module.css";

const Service = ({ service }) => {
  const width = useWindowSize();

  return (
    <article className={styles.grid__service}>
      <div className={styles.grid__service_iconcontainer}>
        <Image
          src={service.icon}
          alt={`Icono del servicio: ${service.text}`}
          layout='fill'
          objectFit='contain'
          objectPosition='center'
          sizes={width < 1024 ? "40vw" : "10vw"}
        />
      </div>
      <h3 className={styles.grid__service_name}>{service.text}</h3>
    </article>
  );
};

export default Service;
