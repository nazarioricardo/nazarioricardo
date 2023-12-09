import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

type ProjectProps = {
  src: StaticImageData;
  link: string;
  alt: string;
  title: string;
  description: string;
};

function Project({ src, link, alt, title, description }: ProjectProps) {
  return (
    <Link className={styles.project} href={link}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={src} alt={alt} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default Project;
