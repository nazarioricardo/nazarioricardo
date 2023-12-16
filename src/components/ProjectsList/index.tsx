import ProjectItem from "./ProjectItem";
import { Project } from "@nr/types/Project";
import styles from "./styles.module.css";

type ProjectsListProps = {
  projects: Project[];
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
