import classes from "./error-alert.module.css";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

function ErrorAlert(props: Props) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
