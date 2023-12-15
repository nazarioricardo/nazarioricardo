import ProjectItem from "./ProjectItem";
import { Post } from "@nr/types/Post";
import styles from "./styles.module.css";

type ProjectsListProps = {
  projects: Post[];
};

function ProjectList({ projects }: ProjectsListProps) {
  return (
    <section className={styles.projectList}>
      {projects.map((project) => {
        return (
          <ProjectItem
            key={project._id}
            image={project.image}
            title={project.title}
            description={project.description}
            link={`/projects/${project.slug}`}
          />
        );
      })}
    </section>
  );
}

export default ProjectList;
