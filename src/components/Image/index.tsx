import { SyntheticEvent, useState } from "react";
import NextImage, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

type ImageProps = {
  src: string | StaticImageData;
  alt: string;
  height?: number;
  width?: number;
};

function Image({ src, alt, height = 2000, width = 2000 }: ImageProps) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <NextImage
      className={`${styles.image} ${imageIsLoaded && styles.loadedImage}`}
      src={src}
      width={width}
      height={height}
      alt={alt}
      onLoad={(event: SyntheticEvent<HTMLImageElement, Event>) => {
        const { currentTarget } = event;
        event.preventDefault();

        // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
        if (currentTarget.src.indexOf("data:image/gif;base64") < 0) {
          setImageIsLoaded(true);
        }
      }}
    />
  );
}

export default Image;
