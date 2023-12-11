"use client";

import { useEffect, useState } from "react";
import NavBar from "@nr/components/NavBar";
import { getSinglePost } from "@nr/sanity/query";
import { Post } from "@nr/types/Post";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import styles from "./page.module.css";
import "./page.css";
import PostImage from "@nr/components/PostImage";

function ProjectPage() {
  const [project, setProject] = useState<Post | null>(null);

  useEffect(() => {
    getSinglePost("copper")
      .then((project: Post) => {
        setProject(project);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <main>
        {project && (
          <article className={styles.project}>
            <div className={styles.header}>
              <Image
                className={styles.image}
                src={project.image}
                alt={`Image for ${project.title}`}
                width={2000}
                height={2000}
                quality={100}
              />
              <div className={styles.title}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </div>

            <PortableText
              value={project.body}
              components={{ types: { image: PostImage } }}
            />
          </article>
        )}
      </main>
    </>
  );
}

export default ProjectPage;
