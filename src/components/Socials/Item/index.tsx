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
    <li className={styles.socials_item}>
      <a href={link} target="_blank">
        <Image src={src} alt={alt} height={75} width={75} />
      </a>
    </li>
  );
}

export default Item;
