import Image, { StaticImageData } from "next/image";
import Copper from "./new-copper.png";
import styles from "./styles.module.css";
import Link from "next/link";

type ProjectProps = {
  src: StaticImageData;
  link: string;
  alt: string;
};

function Project() {
  return (
    <Link className={styles.project} href="https://www.copper.com/">
      <div className={styles.imageContainer}>
        <Image
          style={{ borderRadius: "50%", width: 174, height: 174 }}
          objectFit="cover"
          src={Copper}
          alt={"test"}
          height={174}
          width={174}
        />
      </div>
      <div className={styles.content}>
        <h3>Project</h3>
        <p>
          I've worked as a full stack and mobile developer for the past 6 years,
          making products in the music, medical, and energy industries.
        </p>
      </div>
    </Link>
  );
}

export default Project;
