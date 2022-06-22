import { useWindowSize } from "hooks/useWindowSize";

import dynamic from "next/dynamic";
import ProcessStep from "./ProcessStep";
import styles from "styles/ProcessSection/ProcessSection.module.css";
const BackgroundImage = dynamic(() => import("../BackgroundImage"));

const ProcessSection = () => {
  const width = useWindowSize();

  return (
    <section className={styles.process}>
      <h2 className={styles.process__container_title}>
        Cómo funciona nuestro proceso
      </h2>
      <div className={styles.process__container}>
        <div className={styles.process__container_steps}>
          <ProcessStep
            icon={"/assets/icons/step1.png"}
            text={"Relevamiento general de su documentación. "}
          />
          <ProcessStep
            icon={"/assets/icons/step2.png"}
            text={`Coordinar la logística documental a nuestra planta Box.`}
          />
          <ProcessStep
            icon={"/assets/icons/step3.png"}
            text={`Procesamiento y trasvasamiento documental.`}
          />
          <ProcessStep
            icon={"/assets/icons/step4.png"}
            text={`Alta de Cajas en sistema Matrix.`}
          />
          <ProcessStep
            icon={"/assets/icons/step5.png"}
            text={"Consulte su documentación."}
          />
        </div>
        {width > 1280 && (
          <BackgroundImage
            src={"/assets/backgrounds/TrazadoSteps.svg"}
            fit={"contain"}
          />
        )}
      </div>
    </section>
  );
};

export default ProcessSection;
