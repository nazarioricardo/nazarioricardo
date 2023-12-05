import HomeCard from "@components/HomeCard";
import styles from "./page.module.css";
import Socials from "@components/Socials";
import NavBar from "@components/NavBar";

export default function Home() {
  return (
    <main>
      {/* <NavBar /> */}
      <HomeCard>
        <h1>Ricardo Nazario</h1>
        <p className={styles.bio}>
          Hello. I'm a software developer who loves creating joyful products
          that make life a little nicer for everyone.
        </p>
      </HomeCard>
    </main>
  );
}
