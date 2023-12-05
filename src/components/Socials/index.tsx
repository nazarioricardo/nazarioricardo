import Item from "./Item";
import Github from "./github.png";
import LinkedIn from "./linkedin.png";
import Instagram from "./instagram.png";
import styles from "./styles.module.css";

function Socials() {
  return (
    <ul className={styles.container}>
      <Item
        src={Instagram}
        link="https://www.instagram.com/ricrdo.n/"
        alt="Ricardo Nazario Instagram"
      />

      <Item
        src={LinkedIn}
        link="https://www.linkedin.com/in/ricardo-nazario-857b4951/"
        alt={"Ricardo Nazario LinkedIn"}
      />

      <Item
        src={Github}
        link="https://github.com/nazarioricardo"
        alt="Ricardo Nazario Github"
      />
    </ul>
  );
}

export default Socials;
