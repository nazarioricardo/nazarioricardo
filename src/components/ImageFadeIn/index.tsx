"use client";

import { SyntheticEvent, useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

type ImageFadeInProps = {
  src: string | StaticImageData;
  alt: string;
  quality?: number;
  fill?: boolean;
  priority?: boolean;
};

function ImageFadeIn({
  src,
  alt,
  quality = 75,
  fill = true,
  priority = false,
}: ImageFadeInProps) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  return (
    <Image
      className={`${styles.image} ${imageIsLoaded && styles.loadedImage}`}
      src={src}
      fill={fill}
      alt={alt}
      quality={quality}
      priority={priority}
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
