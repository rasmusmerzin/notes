import styles from "./Layout.module.css";
import { useOutlet } from "react-router";
import { Bottombar } from "./Bottombar";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const outlet = useOutlet();
  return (
    <>
      <div className={styles.row}>
        <Sidebar />
        <div className={styles.column}>{outlet}</div>
      </div>
      <Bottombar />
    </>
  );
}
