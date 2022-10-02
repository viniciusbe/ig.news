import { useRouter } from "next/dist/client/router";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./styles.module.scss";

export function BackIcon() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/posts");
  };

  return (
    <div className={styles.backIcon} onClick={handleBack}>
      <FiArrowLeft />
    </div>
  );
}
