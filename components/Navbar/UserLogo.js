import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "styles/Navbar/UserLogo.module.css";

const UserLogo = () => {
  return (
    <div className={styles.logocontainer}>
      <FontAwesomeIcon icon={faUserCircle} />
    </div>
  );
};

export default UserLogo;
