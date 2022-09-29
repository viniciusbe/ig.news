import { Spinner } from "../Spinner";
import styles from "./styles.module.scss";

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

export function Button(props: ButtonsProps) {
  const { loading = false, children, disabled, className, ...rest } = props;

  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}
