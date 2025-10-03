import Link from "next/link";
import R from "@nr/icons/R";
import styles from "./styles.module.css";

type NavBarProps = {
  isHome?: boolean;
};

function NavBar({ isHome }: NavBarProps) {
  const navBarDisplayStyles = isHome ? styles.homeNavBar : styles.basicNavBar;

  return (
    <nav className={`${styles.navBar} ${navBarDisplayStyles}`}>
      <Link href="/" className={styles.r}>
        <R height={48} width={48} />
      </Link>
    </nav>
  );
}

export default NavBar;
