"use client";

import client from "@client";
import { useEffect } from "react";

function ProjectPage() {
  useEffect(() => {
    client.fetch('*[_type == "post"] && slug === "copper"').then((post) => {
      console.log(post);
    });
  }, []);

  return <div>Projects</div>;
}

export default ProjectPage;
