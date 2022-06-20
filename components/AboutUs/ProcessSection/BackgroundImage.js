import Image from "next/image";

const BackgroundImage = () => {
  return (
    <Image
      src='/assets/backgrounds/TrazadoSteps.svg'
      sizes='100vw'
      layout='fill'
      objectFit='contain'
      objectPosition='center'
      alt=''
    />
  );
};

export default BackgroundImage;
