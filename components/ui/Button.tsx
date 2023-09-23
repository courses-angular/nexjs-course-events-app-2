import Link from "next/link";
import classes from "./button.module.css";

interface ButtonProps {
  children: any;
  link?: string;
  clickFn?: () => void;
}

const Button = ({ link, children, clickFn }: ButtonProps) => {
  if (link) {
    return (
      <Link href={link} legacyBehavior={true}>
        <a className={classes.btn}> {children}</a>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={clickFn}>
      {children}
    </button>
  );
};
export default Button;
