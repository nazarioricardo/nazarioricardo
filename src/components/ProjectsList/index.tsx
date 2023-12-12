import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { getPosts } from "@nr/sanity/query";
import { Post } from "@nr/types/Post";
import styles from "./styles.module.css";
import { CircularProgress } from "@mui/material";

function ProjectList() {
  const [isFetching, setIsFetching] = useState(true);
  const [projects, setProjects] = useState<Post[]>([]);

  useEffect(() => {
    setIsFetching(true);
    getPosts().then((projects) => {
      setIsFetching(false);
      setProjects(projects);
    });
  }, []);

  return (
    <section className={styles.projectList}>
      {isFetching && (
        <div className={styles.loaderContainer}>
          <CircularProgress
            className={styles.loader}
            thickness={0.5}
            size={200}
          />
        </div>
      )}
      {!isFetching &&
        projects.map((project) => {
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
