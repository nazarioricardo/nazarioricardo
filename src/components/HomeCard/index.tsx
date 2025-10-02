import { Download } from "@mui/icons-material";
import LinkButton from "@nr/components/LinkButton";
import Link from "next/link";
import styles from "./styles.module.css";
import TitleCard from "../TitleCard";
import Socials from "../Socials";

function HomeCard() {
  return (
    <>
      <TitleCard className={styles.homeCard}>
        <section>
          <div className={styles.title}>
            <h1 className={styles.name}>Ricardo Nazario</h1>
            <p className={styles.email}>nazarioricardo@gmail.com</p>
            <Socials />
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
        </section>
        <section className={styles.bottomContent}>
          <LinkButton
            text="View C.V."
            href="/RicardoNazario_Resume.pdf"
            Icon={Download}
          />
        </section>
      </TitleCard>
      <div className={styles.zFill} />
    </>
  );
}

export default HomeCard;
