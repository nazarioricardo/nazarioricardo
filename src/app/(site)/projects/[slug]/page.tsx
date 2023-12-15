"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { getSingleProject } from "@nr/sanity/query";
import { Post } from "@nr/types/Post";
import { PortableText } from "@portabletext/react";
import PostImage from "@nr/components/ProjectImage";
import PostVideo from "@nr/components/PostVideo";
import styles from "./page.module.css";
import ImageFadeIn from "@nr/components/ImageFadeIn";

function ProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<Post | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    const { slug } = params;
    getSingleProject(slug as string)
      .then((project: Post) => {
        setIsFetching(false);
        setProject(project);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <main className={styles.page}>
        {isFetching && (
          <div className={styles.loaderContainer}>
            <CircularProgress
              className={styles.loader}
              thickness={0.5}
              size={200}
            />
          </div>
        )}

        {!isFetching && project && (
          <article className={styles.project}>
            <div className={styles.header}>
              <div className={styles.imageContainer}>
                <ImageFadeIn
                  src={project.image}
                  alt={`Image for ${project.title}`}
                />
              </div>
              <div className={styles.title}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </div>

            <PortableText
              value={project.body}
              components={{
                types: {
                  image: PostImage,
                  youtube: PostVideo,
                },
              }}
            />
          </article>
        )}
      </main>
    </>
  );
}

export default ProjectPage;
