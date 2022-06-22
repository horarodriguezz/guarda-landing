import Image from "next/image";

const BackgroundImage = ({ src, fit }) => {
  return (
    <Image
      src={src}
      sizes='100vw'
      layout='fill'
      objectFit={fit}
      objectPosition='center'
      alt=''
    />
  );
};

export default BackgroundImage;
