"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CircularProgress } from "@mui/material";
import NavBar from "@nr/components/NavBar";
import { getSinglePost } from "@nr/sanity/query";
import { Post } from "@nr/types/Post";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import PostImage from "@nr/components/PostImage";
import PostVideo from "@nr/components/PostVideo";
import styles from "./page.module.css";
import "./page.css";
function ProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<Post | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    const { slug } = params;
    getSinglePost(slug as string)
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
      <NavBar />
      <main>
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
