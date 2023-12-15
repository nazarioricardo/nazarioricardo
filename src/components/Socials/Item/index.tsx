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
        <ImageFadeIn src={src} alt={alt} />
      </a>
    </li>
  );
}

export default Item;
