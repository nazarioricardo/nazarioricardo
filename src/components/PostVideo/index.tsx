import ReactPlayer from "react-player";
import styles from "./styles.module.css";

type PostVideoProps = {
  value: { url: string };
};

function PostVideo({ value: { url } }: PostVideoProps) {
  return (
    <div className={styles.postVideo}>
      <ReactPlayer url={url} />
    </div>
  );
}

export default PostVideo;
