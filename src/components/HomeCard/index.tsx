import { ReactNode, useState } from "react";
import styles from "./styles.module.css";
import {
  ExpandLess,
  ExpandLessRounded,
  ExpandMoreRounded,
  ExpandRounded,
} from "@mui/icons-material";

type HomeCardProps = {
  children: ReactNode;
  shouldDisplay: boolean;
  onClickBack: () => void;
};

function HomeCard({ children }: HomeCardProps) {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const onClickAboutMe = () => {
    setShouldDisplay(!shouldDisplay);
  };

  return (
    <div
      className={`${styles.homeCard} ${
        shouldDisplay ? styles.displayCard : null
      }`}
    >
      {shouldDisplay ? (
        <button className={styles.header} onClick={onClickAboutMe}>
          About Me <ExpandMoreRounded fontSize="large" />
        </button>
      ) : (
        <button className={styles.header} onClick={onClickAboutMe}>
          About Me <ExpandLessRounded fontSize="large" />
        </button>
      )}
      {children}

      <div className={styles.fullHeight} />
    </div>
  );
}

export default HomeCard;
