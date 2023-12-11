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

      {/* <ProjectItem
        src={Copper}
        link="https://www.copperlabs.com"
        alt="Copper's New Dashboard"
        title="New Copper Dashboard"
        description="A new Copper experience, emphasizing easy-to-read data, and organizing information in a way that better reflects how Copper wants users to engage with the app."
      />
      <ProjectItem
        src={Remidi}
        link={"https://www.youtube.com/watch?v=lJjqT7zo5Qg"}
        alt={"Remix by Remidi"}
        title="Remix by Remidi"
        description="Remix was an iOS app for Remidi’s main hardware product, the T8. It's goal was to make jamming with the T8 accessible and fun to non-musicians."
      /> */}
    </section>
  );
}

export default ProjectList;
