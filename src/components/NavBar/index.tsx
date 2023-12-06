import Socials from "@components/Socials";
import Link from "next/link";
import styles from "./styles.module.css";
import R from "@icons/R";
function NavBar() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <R height={48} width={48} />
      </Link>
      <Socials />
    </nav>
  );
}

export default NavBar;
