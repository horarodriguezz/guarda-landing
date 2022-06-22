import styles from "styles/FormSection/FormSection.module.css";
import Contact from "./Contact";
import Form from "./Form";
const FormSection = ({ setStatus }) => {
  return (
    <section id='contacto' className={styles.section}>
      <div className={styles.section__container}>
        <Form setStatus={setStatus} />
        <Contact />
      </div>
    </section>
  );
};

export default FormSection;
