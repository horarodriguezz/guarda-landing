import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "styles/Navbar/ToggleButton.module.css";

const ToggleButton = ({ setShowSidebar, showSidebar }) => {
  return (
    <div
      role='button'
      onClick={() => setShowSidebar(!showSidebar)}
      className={styles.toggleButton}
    >
      <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
    </div>
  );
};

export default ToggleButton;
