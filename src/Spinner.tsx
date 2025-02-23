import styles from "./Spinner.module.css";

export function Spinner() {
  return <img src="/spinner.svg" alt="Loading..." className={styles.spinner} />;
}
