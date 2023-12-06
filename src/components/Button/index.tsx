import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import styles from "./styles.module.css";

type ButtonProps = {
  text: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ text, Icon, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.button}>
      {text} {Icon && <Icon />}
    </button>
  );
}

export default Button;
