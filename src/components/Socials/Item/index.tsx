import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";
import { SyntheticEvent, useState } from "react";
import ImageFadeIn from "@nr/components/ImageFadeIn";

type ItemProps = {
  src: StaticImageData;
  link: string;
  alt: string;
};

function Item({ src, link, alt }: ItemProps) {
  const [didLoadImage, setDidLoadImage] = useState(false);
  return (
    <li className={styles.socialsItem}>
      <a href={link} target="_blank">
        <ImageFadeIn
          // className={`${styles.image} ${didLoadImage && styles.loadedImage}`}
          src={src}
          alt={alt}
          // onLoad={(event: SyntheticEvent<HTMLImageElement, Event>) => {
          //   const { currentTarget } = event;
          //   // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
          //   if (currentTarget.src.indexOf("data:image/gif;base64") < 0) {
          //     setDidLoadImage(true);
          //   }
          // }}
        />
      </a>
    </li>
  );
}

export default Item;
