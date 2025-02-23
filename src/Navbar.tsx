import styles from "./Navbar.module.css";
import { Link } from "react-router";

export function Navbar({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.spacer}>
        <Link to="/">
          <img src="/icon.svg" alt="Icon" />
        </Link>
      </div>
      {title && <h1>{title}</h1>}
      <div className={styles.spacer} style={{ justifyContent: "flex-end" }}>
        {children}
        <Link to="/account" className={styles.symbol}>
          account_circle
        </Link>
      </div>
    </nav>
  );
}
