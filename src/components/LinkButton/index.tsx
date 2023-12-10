import Link, { LinkProps } from "next/link";
import { HTMLProps, FC, RefAttributes } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import styles from "./styles.module.css";

type LinkButtonProps = {
  text: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  gradient?: boolean;
} & LinkProps &
  RefAttributes<HTMLAnchorElement>;

function LinkButton({ text, Icon, href, gradient, ...props }: LinkButtonProps) {
  return (
    <Link
      {...props}
      href={href}
      className={`${styles.linkButton} ${gradient && styles.gradient}`}
    >
      {text} {Icon && <Icon />}
    </Link>
  );
}

export default LinkButton;
