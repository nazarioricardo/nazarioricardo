import ProjectItem from "./ProjectItem";
import { Project } from "@nr/types/Project";
import { getProjects } from "@nr/sanity/query";
import styles from "./styles.module.css";

async function ProjectList() {
  const projects: Project[] = await getProjects();
  return (
    <section className={styles.projectList}>
      <ProjectItem
        image="/gneiss.svg"
        title="Gneiss.Dev"
        description="Gneiss.Dev is the home of all my future side projects! It is also potentially my future business."
        link="https://gneiss.dev"
      />
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
