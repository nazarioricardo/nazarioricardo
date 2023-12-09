import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

type ItemProps = {
  src: StaticImageData;
  link: string;
  alt: string;
};

function Item({ src, link, alt }: ItemProps) {
  return (
    <li className={styles.socialsItem}>
      <a href={link} target="_blank">
        <Image className={styles.image} src={src} alt={alt} />
      </a>
    </li>
  );
}

export default Item;
