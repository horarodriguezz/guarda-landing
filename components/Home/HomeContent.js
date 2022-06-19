import styles from "styles/Home/HomeContent.module.css";

const HomeContent = () => {
  return (
    <div className={styles.container_content}>
      <h1 className={styles.content__title}>
        Administración y <br /> Guarda documental
      </h1>
      <p className={styles.content__description}>
        Ahorra espacio físico en tus oficinas y asegura el buen cuidado de tus
        archivos en nuestras instalaciones dedicadas y preparadas para la
        gestión de documentos.
      </p>
      <button role='button' className={styles.content__button}>
        <a href='#contacto'>Solicitar Cotización</a>
      </button>
    </div>
  );
};

export default HomeContent;
