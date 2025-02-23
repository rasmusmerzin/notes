import styles from "./HomePage.module.css";
import { Link } from "react-router";
import { notes } from "./Note";
import { Bottombar } from "./Bottombar";

export function MinePage() {
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.title}>My Notes</h1>
        <div className={styles.grid}>
          {notes.map((note) => (
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
