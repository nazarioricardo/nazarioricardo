import type { Metadata } from "next";
import styles from "./page.module.css";
import ProjectContent from "./ProjectContent";
import { slugToTitle } from "../../../../utils/slugToTitle";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: slugToTitle(params.slug),
  };
}

function ProjectPage() {
  return (
    <main className={styles.page}>
      <ProjectContent />
    </main>
  );
}

export default ProjectPage;
