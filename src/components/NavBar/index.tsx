import Socials from "@components/Socials";
import Link from "next/link";
import R from "@icons/R";
import styles from "./styles.module.css";

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
