"use client";

import { useState } from "react";
import HomeCard from "@components/HomeCard";
import styles from "./page.module.css";
import NavBar from "@components/NavBar";
import { Download } from "@mui/icons-material";
import ProjectList from "@components/ProjectsList";
import LinkButton from "@components/LinkButton";
import Link from "next/link";

export default function Home() {
  const [shouldDisplayCard, setShouldDisplayCard] = useState(false);
  const onClickAboutMe = () => {
    setShouldDisplayCard(true);
  };

  const onClickBack = () => {
    setShouldDisplayCard(false);
  };

  return (
    <main>
      <NavBar onClickAboutMe={onClickAboutMe} />
      <div className={styles.content}>
        <HomeCard shouldDisplay={shouldDisplayCard} onClickBack={onClickBack}>
          <div>
            <div className={styles.title}>
              <h1>Ricardo Nazario</h1>
              <p className={styles.email}>nazarioricardo@gmail.com</p>
            </div>

            <p className={styles.bio}>
              {`Hello. I'm a software developer who loves creating joyful products
              that make life a little nicer for everyone.`}
            </p>
            <p className={styles.bio}>
              {`I've worked as a full stack and mobile developer for the past 6
              years, making products in the music, medical, and energy
              industries.`}
            </p>
            <p>
              <b>Disclaimer</b>, this website is a work in progress. Current
              priorities are:
            </p>
            <p>1. Adding my own content pages (instead of external links)</p>
            <p>2. Improved responsiveness for smaller screens</p>
            <p>3. A number of awesome projects that will fill the page</p>
          </div>
          <div className={styles.cardCvButton}>
            <LinkButton
              text="View C.V."
              href="/Ricardo Nazario Resume.pdf"
              Icon={Download}
            />
          </div>
        </HomeCard>
        <div className={`${styles.title} ${styles.mobileTitle}`}>
          <h1>Ricardo Nazario</h1>
          <p className={styles.email}>nazarioricardo@gmail.com</p>
          <div className={styles.mobileCvButton}>
            <Link className={styles.link} href="/Ricardo Nazario Resume.pdf">
              <span> View C.V. </span>
              <Download />
            </Link>
            {/* <LinkButton
              text="View C.V."
              href="/Ricardo Nazario Resume.pdf"
              Icon={Download}
              gradient
            /> */}
          </div>
        </div>
        <ProjectList />
      </div>
    </main>
  );
}
