import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

type ProjectItemProps = {
  image: string;
  link: string;
  title: string;
  description: string;
};

function ProjectItem({ image, link, title, description }: ProjectItemProps) {
  const [didLoadImage, setDidLoadImage] = useState(false);
  const alt = `Image for ${title}`;
  return (
    <>
      <Link className={styles.project} href={link}>
        <div className={styles.imageContainer}>
          <Image
            className={`${styles.image} ${didLoadImage && styles.loadedImage}`}
            src={image}
            width={174}
            height={174}
            alt={alt}
            onLoad={(event: SyntheticEvent<HTMLImageElement, Event>) => {
              const { currentTarget } = event;

              // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
              if (currentTarget.src.indexOf("data:image/gif;base64") < 0) {
                setDidLoadImage(true);
              }
            }}
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
            className={`${styles.image} ${didLoadImage && styles.loadedImage}`}
            width={96}
            height={96}
            src={image}
            alt={alt}
            onLoad={(event: SyntheticEvent<HTMLImageElement, Event>) => {
              const { currentTarget } = event;

              // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
              if (currentTarget.src.indexOf("data:image/gif;base64") < 0) {
                setDidLoadImage(true);
              }
            }}
          />
          <h3>{title}</h3>
        </div>
        <p className={styles.description}>{description}</p>
      </Link>
    </>
  );
}

export default ProjectItem;
