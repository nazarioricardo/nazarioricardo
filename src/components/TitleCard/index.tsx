import styles from "./styles.module.css";

type TitleCardProps = {
  children: React.ReactNode;
  className?: string;
};

function TitleCard({ children, className }: TitleCardProps) {
  return (
    <section
      className={`${styles.titleCard}${className ? " " + className : ""}`}
    >
      {children}
    </section>
  );
}

export default TitleCard;
