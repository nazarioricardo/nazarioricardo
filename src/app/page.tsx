import HomeCard from "@components/HomeCard";
import styles from "./page.module.css";
import Socials from "@components/Socials";

export default function Home() {
  return (
    <main>
      <HomeCard>
        <h1>Ricardo Nazario</h1>
        <p className={styles.bio}>
          Hello. I am Ricardo. A software developer who loves creating joyful
          products that make life a little nicer for everyone.
        </p>
        <Socials />
      </HomeCard>
    </main>
  );
}
