"use client";

import { ReactNode, useState } from "react";
import styles from "./styles.module.css";

type HomeCardProps = {
  children: ReactNode;
};

function HomeCard({ children }: HomeCardProps) {
  const [shouldShow, setShouldShow] = useState(false);

  const onClick = () => {
    setShouldShow(!shouldShow);
  };

  return (
    <div
      onClick={onClick}
      className={`${styles.homeCard} ${shouldShow ? styles.showCard : null}`}
    >
      {children}
    </div>
  );
}

export default HomeCard;
