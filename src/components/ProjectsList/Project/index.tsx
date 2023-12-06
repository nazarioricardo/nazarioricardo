import Image, { StaticImageData } from "next/image";
import Copper from "./new-copper.png";
import styles from "./styles.module.css";

type ProjectProps = {
  src: StaticImageData;
  link: string;
  alt: string;
};

function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        <Image src={Copper} alt={"test"} height={175} width={175} />
      </div>
      <h3>Project</h3>
    </div>
  );
}

export default Project;
