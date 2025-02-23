import styles from "./Bottombar.module.css";
import { Link, useLocation } from "react-router";
import { useSession } from "./supabase";

export function Bottombar() {
  const location = useLocation();
  const session = useSession();
  return (
    <div className={styles.bottombar}>
      <Link to="/" className={location.pathname === "/" ? styles.active : ""}>
        home
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
        bookmark
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
        add_circle
      </Link>
      <Link
        to="/account"
        className={location.pathname === "/account" ? styles.active : ""}
      >
        account_circle
      </Link>
    </div>
  );
}
