"use client";

import HomeCard from "@nr/components/HomeCard";
import styles from "./page.module.css";
import { Download } from "@mui/icons-material";
import ProjectList from "@nr/components/ProjectsList";
import LinkButton from "@nr/components/LinkButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.content}>
        <HomeCard />
        <ProjectList />
      </main>
    </>
  );
}
