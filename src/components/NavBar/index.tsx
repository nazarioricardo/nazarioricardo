import Link from "next/link";
import R from "@nr/icons/R";
import styles from "./styles.module.css";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link href="/">
        <R height={48} width={48} />
      </Link>
    </nav>
  );
}

export default NavBar;
