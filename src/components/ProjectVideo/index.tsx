import ReactPlayer from "react-player";
import styles from "./styles.module.css";

type ProjectVideoProps = {
  value: { url: string };
};

function ProjectVideo({ value: { url } }: ProjectVideoProps) {
  return (
    <div className={styles.postVideo}>
      <ReactPlayer url={url} />
    </div>
  );
}

export default ProjectVideo;
