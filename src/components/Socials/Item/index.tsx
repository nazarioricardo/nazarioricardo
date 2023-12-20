import { StaticImageData } from "next/image";
import styles from "./styles.module.css";
import ImageFadeIn from "@nr/components/ImageFadeIn";

type ItemProps = {
  src: StaticImageData | string;
  link: string;
  alt: string;
};

function Item({ src, link, alt }: ItemProps) {
  return (
    <li className={styles.socialsItem}>
      <a href={link} target="_blank">
        <ImageFadeIn src={src} alt={alt} />
      </a>
    </li>
  );
}

export default Item;
