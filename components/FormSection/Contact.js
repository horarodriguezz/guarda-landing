import {
  faArrowRight,
  faEnvelope,
  faMobileScreen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "styles/FormSection/Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__line}>
        <FontAwesomeIcon icon={faMobileScreen} />
        <span>(0351) 153 88 32 57</span>
      </div>
      <div className={styles.contact__line}>
        <FontAwesomeIcon icon={faPhone} />
        <span>(0351) 496 1326 Int. 1009</span>
      </div>
      <div className={styles.contact__line}>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>comercial@boxcustodia.com</span>
      </div>
      <a href='#' className={styles.contact__link}>
        Ponerse en contacto con comercial{" "}
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  );
};

export default Contact;
