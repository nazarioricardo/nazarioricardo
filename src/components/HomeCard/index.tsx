import { Download } from "@mui/icons-material";
import LinkButton from "@nr/components/LinkButton";
import Link from "next/link";
import styles from "./styles.module.css";
import TitleCard from "../TitleCard";

function HomeCard() {
  return (
    <>
      <TitleCard className={styles.homeCard}>
        <div>
          <div className={styles.title}>
            <h1 className={styles.name}>Ricardo Nazario</h1>
            <p className={styles.email}>nazarioricardo@gmail.com</p>
          </div>

          <p className={styles.bio}>
            {`Hello. I'm a software developer who loves creating joyful products
  that make life a little nicer for everyone.`}
          </p>
          <br />
          <p className={styles.bio}>
            {`I've worked as a full stack and mobile developer for the past 6
  years, making products in the music, medical, and energy
  industries.`}
          </p>
        </div>
        <div className={styles.bottomContent}>
          <div>
            <p>
              <b>Dear Visitor,</b>
            </p>
            <br />
            <p>
              This page launched December 9, 2023. There are a few things I
              still need to add.
            </p>
            <br />
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
          <LinkButton
            text="View C.V."
            href="/Ricardo Nazario Resume.pdf"
            Icon={Download}
          />
        </div>
      </TitleCard>
      <div className={styles.zFill} />
    </>
  );
}

export default HomeCard;
