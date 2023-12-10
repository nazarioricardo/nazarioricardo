"use client";

import { getSingleProject } from "@nr/sanity/query";
import { Project } from "@nr/types/Project";
import { useEffect, useState } from "react";

function ProjectPage() {
  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    getSingleProject("copper")
      .then((project: Project) => {
        setProject(project);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
    </div>
  );
}

export default ProjectPage;
