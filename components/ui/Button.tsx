import Link from "next/link";
import classes from "./button.module.css";

interface ButtonProps {
  children: any;
  link: string;
}

const Button = ({ link, children }: ButtonProps) => {
  return (
    <Link href={link} legacyBehavior={true}>
      <a className={classes.btn}> {children}</a>
    </Link>
  );
};
export default Button;
