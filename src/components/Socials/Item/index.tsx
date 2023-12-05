import { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import github from "github.png";
import styles from "./styles.module.css";

type ItemProps = {
  src: StaticImageData;
  link: string;
  alt: string;
};

function Item({ src, link, alt }: ItemProps) {
  return (
    <li className={styles.container}>
      <a href={link} target="_blank">
        <Image src={src} alt={alt} height={48} />
      </a>
    </li>
  );
}

export default Item;
