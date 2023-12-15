import HomeCard from "@nr/components/HomeCard";
import ProjectList from "@nr/components/ProjectsList";
import { getProjects } from "@nr/sanity/query";
import styles from "./page.module.css";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className={styles.content}>
      <HomeCard />
      <ProjectList projects={projects} />
    </main>
  );
}
