import Socials from "@nr/components/Socials";
import styles from "./styles.module.css";
import Link from "next/link";
import R from "@nr/icons/R";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link className={styles.logo} href="/">
        <R height={48} width={48} />
      </Link>

      <Socials />
    </nav>
  );
}

export default NavBar;
