import HomeCard from "@components/HomeCard";
import styles from "./page.module.css";
import NavBar from "@components/NavBar";
import { Download, Email } from "@mui/icons-material";
import ProjectList from "@components/ProjectsList";
import LinkButton from "@components/LinkButton";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className={styles.content}>
        <HomeCard>
          <div>
            <div className={styles.title}>
              <h1>Ricardo Nazario</h1>
              <p className={styles.email}>nazarioricardo@gmail.com</p>
            </div>

            <p className={styles.bio}>
              Hello. I'm a software developer who loves creating joyful products
              that make life a little nicer for everyone.
            </p>
            <p className={styles.bio}>
              I've worked as a full stack and mobile developer for the past 6
              years, making products in the music, medical, and energy
              industries.
            </p>
            <p>
              <b>Disclaimer</b>, this website is a work in progress. Current
              priorities are:
            </p>
            <p>1. Adding my own content pages (instead of external links)</p>
            <p>2. A number of awesome projects that will fill the page</p>
          </div>
          <LinkButton
            text="View C.V."
            href="/Ricardo Nazario Resume.pdf"
            Icon={Download}
          />
        </HomeCard>
        <ProjectList />
      </div>
    </main>
  );
}
