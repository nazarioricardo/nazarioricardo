import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { getPosts } from "@nr/sanity/query";
import { Post } from "@nr/types/Post";
import styles from "./styles.module.css";

function ProjectList() {
  const [projects, setProjects] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((projects) => {
      setProjects(projects);
    });
  }, []);

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
