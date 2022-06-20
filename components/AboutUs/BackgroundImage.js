import Image from "next/image";
import styles from "styles/AboutUs/BackgroundImage.module.css";

const BackgroundImage = () => {
  return (
    <div className={styles.section__imagecontainer}>
      <div className={styles.section__image}>
        <Image
          src='/assets/backgrounds/Tablet.png'
          alt=''
          layout='fill'
          sizes='50vw'
          objectFit='cover'
          objectPosition='center'
          quality={100}
        />
      </div>
    </div>
  );
};

export default BackgroundImage;
