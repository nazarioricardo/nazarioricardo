import { ReactNode } from "react";
import Button from "@components/Button";
import styles from "./styles.module.css";

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
      <div className={styles.backButtonContainer}>
        <Button onClick={onClickBack} text="Back" />
      </div>
      {children}
    </div>
  );
}

export default HomeCard;
