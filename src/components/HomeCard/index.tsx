import { ReactNode } from "react";
import styles from "./styles.module.css";

type HomeCardProps = {
  children: ReactNode;
  shouldDisplay: boolean;
};

function HomeCard({ shouldDisplay, children }: HomeCardProps) {
  return (
    <div
      className={`${styles.homeCard} ${
        shouldDisplay ? styles.displayCard : null
      }`}
    >
      {children}
    </div>
  );
}

export default HomeCard;
