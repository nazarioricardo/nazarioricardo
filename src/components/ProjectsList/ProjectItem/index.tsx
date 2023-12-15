// "use client";

// import { SyntheticEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import ImageFadeIn from "@nr/components/ImageFadeIn";

type ProjectItemProps = {
  image: string;
  link: string;
  title: string;
  description: string;
};

function ProjectItem({ image, link, title, description }: ProjectItemProps) {
  // const [didLoadImage, setDidLoadImage] = useState(false);
  const alt = `Image for ${title}`;
  return (
    <Link className={styles.project} href={link}>
      <div className={styles.imageContainer}>
        <ImageFadeIn src={image} alt={alt} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default ProjectItem;
