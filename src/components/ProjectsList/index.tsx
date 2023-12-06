import Project from "./Project";
import styles from "./styles.module.css";

function ProjectList() {
  return (
    <section className={styles.projectList}>
      <Project />
    </section>
  );
}

export default ProjectList;
