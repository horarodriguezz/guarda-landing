import styles from "styles/Services/ServicesSection.module.css";
import Service from "./Service";
import JSON from "./Services.json";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section id='servicios' className={styles.services}>
      <div className={styles.services__container}>
        <h2 className={styles.services__container_title}>
          Gestión integral <br /> de Información & datos
        </h2>
        <p className={styles.services__container_description}>
          Organizamos tus archivos y te ayudamos en la definición de los
          criterios de clasificación, ordenación y descripción de tus
          expedientes y documentos.
        </p>
        <div className={styles.services__container_content}>
          <div className={styles.content__grid}>
            {JSON.services.map((servicio) => (
              <Service key={servicio.text} service={servicio} />
            ))}
          </div>
          <div className={styles.content__image}>
            <Image
              src='/assets/backgrounds/Laptop.png'
              layout='fill'
              alt='Laptop image'
              sizes='50vw'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
