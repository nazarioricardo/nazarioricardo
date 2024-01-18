import HomeCard from "@nr/components/HomeCard";
import ProjectList from "@nr/components/ProjectsList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.content}>
      <HomeCard />
      <ProjectList />
    </main>
  );
}
