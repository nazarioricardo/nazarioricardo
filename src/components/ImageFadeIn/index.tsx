"use client";

import { SyntheticEvent, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

type ImageFadeInProps = {
  src: string | StaticImageData;
  alt: string;
  height?: number;
  width?: number;
  quality?: number;
};

function ImageFadeIn({
  src,
  alt,
  height = 2000,
  width = 2000,
  quality = 75,
}: ImageFadeInProps) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <Image
      className={`${styles.image} ${imageIsLoaded && styles.loadedImage}`}
      src={src}
      width={width}
      height={height}
      alt={alt}
      quality={quality}
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

export default ImageFadeIn;
