"use client";

import Item from "./Item";
import Github from "./github.png";
import LinkedIn from "./linkedin.png";
import Instagram from "./instagram.png";
import styles from "./styles.module.css";

function Socials() {
  return (
    <ul className={styles.socials}>
      <Item
        src={Github}
        link="https://github.com/nazarioricardo/"
        alt="Ricardo Nazario Github"
      />

      <Item
        src={LinkedIn}
        link="https://www.linkedin.com/in/nazarioricardo/"
        alt={"Ricardo Nazario LinkedIn"}
      />

      <Item
        src={Instagram}
        link="https://www.instagram.com/ricardo.nw/"
        alt="Ricardo Nazario Instagram"
      />
    </ul>
  );
}

export default Socials;
