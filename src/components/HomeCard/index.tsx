import { ReactNode } from "react";
import styles from "./styles.module.css";

type HomeCardProps = {
  children: ReactNode;
};

function HomeCard({ children }: HomeCardProps) {
  return <div className={styles.homeCard}>{children}</div>;
}

export default HomeCard;
