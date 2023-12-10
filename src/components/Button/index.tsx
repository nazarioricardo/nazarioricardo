import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import styles from "./styles.module.css";

type ButtonProps = {
  text: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  gradient?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ text, Icon, gradient, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.button} ${gradient && styles.gradient}`}
    >
      {text} {Icon && <Icon />}
    </button>
  );
}

export default Button;
