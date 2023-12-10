import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

type ProjectItemProps = {
  image: string;
  link: string;
  title: string;
  description: string;
};

function ProjectItem({ image, link, title, description }: ProjectItemProps) {
  const alt = `Image for ${title}`;
  return (
    <>
      <Link className={styles.project} href={link}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={image}
            width={174}
            height={174}
            alt={alt}
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
      <Link className={styles.mobileProject} href={link}>
        <div className={styles.mobileHeader}>
          <Image
            className={styles.image}
            width={96}
            height={96}
            src={image}
            alt={alt}
          />
          <h3>{title}</h3>
        </div>
        <p className={styles.description}>{description}</p>
      </Link>
    </>
  );
}

export default ProjectItem;
