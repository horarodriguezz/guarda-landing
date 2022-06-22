import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "styles/SubmitModal.module.css";

const SubmitModal = ({ status, setStatus }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlay__modal}>
        <p className={styles.overlay__modal_title}>{status.title}</p>
        <p className={styles.overlay__modal_message}>{status.message}</p>
        <FontAwesomeIcon
          onClick={() => setStatus(null)}
          icon={faTimes}
          className={styles.overlay__modal_close}
        />
      </div>
    </div>
  );
};

export default SubmitModal;
