import { FiLoader } from "react-icons/fi";
import styles from "./styles.module.scss";

export function Spinner() {
  return <FiLoader className={styles.spinner} />;
}
