import Socials from "@nr/components/Socials";
import styles from "./styles.module.css";
import Button from "@nr/components/Button";

type NavBarProps = {
  onClickAboutMe: () => void;
};

function NavBar({ onClickAboutMe }: NavBarProps) {
  return (
    <nav className={styles.navBar}>
      {/* <Link className={styles.logo} href="/">
        <R height={48} width={48} />
      </Link> */}
      <Button onClick={onClickAboutMe} text="About Me" gradient />

      <Socials />
    </nav>
  );
}

export default NavBar;
