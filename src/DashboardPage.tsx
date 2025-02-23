import styles from "./DashboardPage.module.css";
import { Link, useNavigate } from "react-router";
import { Navbar } from "./Navbar";
import { all_notes } from "./Note";
import { useSession } from "./supabase";

export function DashboardPage() {
  const navigate = useNavigate();
  const session = useSession();
  return (
    <>
      <Navbar title="Home">
        <button
          onClick={() => navigate("/new")}
          disabled={!session}
          data-tooltip={session ? null : "Not signed in"}
        >
          Create
        </button>
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
