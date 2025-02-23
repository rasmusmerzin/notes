import styles from "./HomePage.module.css";
import { Link } from "react-router";
import { all_notes } from "./Note";
import { Bottombar } from "./Bottombar";

export function HomePage() {
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.title}>Home</h1>
        <div className={styles.grid}>
          {all_notes.map((note) => (
            <Link to={`/note/${note.id}`} key={note.id} className={styles.card}>
              <div className={styles.cardTitle}>{note.title}</div>
              <div className={styles.cardBody}>{note.content}</div>
            </Link>
          ))}
        </div>
      </div>
      <Bottombar />
    </>
  );
}
