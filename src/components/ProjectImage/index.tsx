import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import client from "@nr/sanity/client";
import styles from "./styles.module.css";
import { SyntheticEvent, useState } from "react";
// https://www.sanity.io/answers/adding-images-to-post-content-using-portable-text-and-sanity-image-url-builder-

type ProjectImageProps = {
  value: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

function ProjectImage({ value }: ProjectImageProps) {
  const [didLoadImage, setDidLoadImage] = useState(false);
  return (
    <div className={styles.projectImage}>
      <Image
        className={`${styles.image} ${didLoadImage && styles.loadedImage}`}
        src={urlBuilder(client)
          .image(value)
          .width(2000)
          .fit("fill")
          .auto("format")
          .url()}
        alt={value.alt || "Post Image"}
        loading="lazy"
        width={500}
        height={500}
        quality={100}
        onLoad={(event: SyntheticEvent<HTMLImageElement, Event>) => {
          const { currentTarget } = event;

          // next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
          if (currentTarget.src.indexOf("data:image/gif;base64") < 0) {
            setDidLoadImage(true);
          }
        }}
      />
    </div>
  );
}

export default ProjectImage;
