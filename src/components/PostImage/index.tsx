import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import client from "@nr/sanity/client";
import styles from "./styles.module.css";
// https://www.sanity.io/answers/adding-images-to-post-content-using-portable-text-and-sanity-image-url-builder-

type PostImageProps = {
  value: {
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

function PostImage({ value }: PostImageProps) {
  return (
    <div className={styles.postImage}>
      <Image
        className={styles.image}
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
      />
    </div>
  );
}

export default PostImage;
