import { useWindowSize } from "hooks/useWindowSize";

import dynamic from "next/dynamic";
import ProcessStep from "./ProcessStep";
import styles from "styles/AboutUs/ProcessSection/ProcessSection.module.css";
const BackgroundImage = dynamic(() => import("./BackgroundImage"));

const ProcessSection = () => {
  const width = useWindowSize();

  return (
    <section id='nosotros' className={styles.process}>
      <h2 className={styles.process__container_title}>
        Cómo funciona nuestro proceso
      </h2>
      <div className={styles.process__container}>
        <div className={styles.process__container_steps}>
          <ProcessStep
            icon={"/assets/icons/step1.svg"}
            text={"Relevamiento general de su documentación. "}
          />
          <ProcessStep
            icon={"/assets/icons/step2.svg"}
            text={`Coordinar la logística documental a nuestra planta Box.`}
          />
          <ProcessStep
            icon={"/assets/icons/step3.svg"}
            text={`Procesamiento y trasvasamiento documental.`}
          />
          <ProcessStep
            icon={"/assets/icons/step4.svg"}
            text={`Alta de Cajas en sistema Matrix.`}
          />
          <ProcessStep
            icon={"/assets/icons/step5.svg"}
            text={"Consulte su documentación."}
          />
        </div>
        {width > 1280 && <BackgroundImage />}
      </div>
    </section>
  );
};

export default ProcessSection;
