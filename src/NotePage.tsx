import styles from "./NotePage.module.css";
import { useParams } from "react-router";
import { all_notes } from "./Note";

export function NotePage() {
  const { noteId } = useParams();
  const note = all_notes.find((note) => note.id === noteId);
  return (
    <>
      <div className={styles.topbar}>
        <a
          href="/"
          className={styles.symbol}
          onClick={(event) => {
            event.preventDefault();
            history.back();
          }}
        >
          arrow_back
        </a>
      </div>
      <div className={styles.page}>
        {note ? (
          <div className={styles.card}>
            <div>{note.title}</div>
            <div>{note.content}</div>
          </div>
        ) : (
          <div>Not Found</div>
        )}
      </div>
    </>
  );
}
