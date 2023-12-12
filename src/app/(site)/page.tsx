"use client";

import { useState } from "react";
import HomeCard from "@nr/components/HomeCard";
import styles from "./page.module.css";
import NavBar from "@nr/components/NavBar";
import { Download } from "@mui/icons-material";
import ProjectList from "@nr/components/ProjectsList";
import LinkButton from "@nr/components/LinkButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <div className={styles.content}>
          <HomeCard>
            <div>
              <div className={styles.title}>
                <h1 className={styles.name}>Ricardo Nazario</h1>
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
                <b>Dear Visitor,</b>
              </p>
              <p>
                This page launched December 9, 2023. There are a few things I
                still need to add.
              </p>
              <p>
                {`If you're curious, check out the current `}
                <Link
                  className={styles.githubLink}
                  href="https://github.com/nazarioricardo/nazarioricardo/issues"
                  target="_blank"
                >
                  github issues
                </Link>
                .
              </p>
            </div>
            <div className={styles.cardCvButton}>
              <LinkButton
                text="View C.V."
                href="/Ricardo Nazario Resume.pdf"
                Icon={Download}
              />
            </div>
          </HomeCard>

          <section className={`${styles.title} ${styles.mobileTitle}`}>
            <h1 className={styles.name}>Ricardo Nazario</h1>
            <p className={styles.email}>nazarioricardo@gmail.com</p>
            <div className={styles.mobileCvButton}>
              <Link className={styles.link} href="/Ricardo Nazario Resume.pdf">
                <span> View C.V. </span>
                <Download />
              </Link>
            </div>
          </section>

          <ProjectList />
        </div>
      </main>
    </>
  );
}
