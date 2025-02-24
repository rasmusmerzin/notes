import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router";
import { useSession } from "./supabase";

export function Sidebar() {
  const location = useLocation();
  const session = useSession();
  return (
    <div className={styles.sidebar}>
      <Link to="/" className={location.pathname === "/" ? styles.active : ""}>
        <span className={styles.symbol}>home</span>
        <span>Home</span>
      </Link>
      <Link
        to="/mine"
        className={
          location.pathname === "/mine"
            ? styles.active
            : session
              ? ""
              : styles.disabled
        }
      >
        <span className={styles.symbol}>bookmark</span>
        <span>My notes</span>
      </Link>
      <Link
        to="/new"
        className={
          location.pathname === "/new"
            ? styles.active
            : session
              ? ""
              : styles.disabled
        }
      >
        <span className={styles.symbol}>add_circle</span>
        <span>New note</span>
      </Link>
      <Link
        to="/account"
        className={location.pathname === "/account" ? styles.active : ""}
      >
        <span className={styles.symbol}>account_circle</span>
        <span>Account</span>
      </Link>
    </div>
  );
}
