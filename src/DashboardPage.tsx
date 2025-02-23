import styles from "./DashboardPage.module.css";
import { Link } from "react-router";
import { Navbar } from "./Navbar";
import { all_notes } from "./Note";

export function DashboardPage() {
  return (
    <>
      <Navbar title="Home">
        <Link to="/new">
          <button>Create</button>
        </Link>
      </Navbar>
      <div className={styles.page}>
        {all_notes.map((note) => (
          <Link to={`/note/${note.id}`} key={note.id} className={styles.card}>
            <div className={styles.cardTitle}>{note.title}</div>
            <div className={styles.cardBody}>{note.content}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
