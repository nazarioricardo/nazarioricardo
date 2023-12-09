import Socials from "@components/Socials";
import styles from "./styles.module.css";

type NavBarProps = {
  onClickAboutMe: () => void;
};

function NavBar({ onClickAboutMe }: NavBarProps) {
  return (
    <nav className={styles.navBar}>
      {/* <Link className={styles.logo} href="/">
        <R height={48} width={48} />
      </Link> */}
      <button onClick={onClickAboutMe} className={styles.aboutMeButton}>
        About Me
      </button>
      <Socials />
    </nav>
  );
}

export default NavBar;
