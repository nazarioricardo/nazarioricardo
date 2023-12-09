import { ReactNode } from "react";
import styles from "./styles.module.css";
import Button from "@components/Button";

type HomeCardProps = {
  children: ReactNode;
  shouldDisplay: boolean;
  onClickBack: () => void;
};

function HomeCard({ shouldDisplay, onClickBack, children }: HomeCardProps) {
  return (
    <div
      className={`${styles.homeCard} ${
        shouldDisplay ? styles.displayCard : null
      }`}
    >
      <div className={styles.backButton}>
        <Button onClick={onClickBack} text="Back" />
      </div>
      {children}
    </div>
  );
}

export default HomeCard;
