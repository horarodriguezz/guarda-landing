import { useWindowSize } from "hooks/useWindowSize";
import Image from "next/image";
import styles from "styles/Solutions/Industry.module.css";

const Industry = ({ icon, text }) => {
  const width = useWindowSize();

  return (
    <article className={styles.industry}>
      <div className={styles.industry__icon}>
        <Image
          src={icon}
          alt={text}
          layout='fill'
          sizes={width < 1280 ? "20vw" : "10vw"}
          objectFit='contain'
          objectPosition='center'
        />
      </div>
      <p className={styles.industry__text}>{text}</p>
    </article>
  );
};

export default Industry;
