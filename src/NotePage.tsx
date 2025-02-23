import styles from "./NotePage.module.css";
import { Note } from "./Note";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { supabase, useSession } from "./supabase";
import { Spinner } from "./Spinner";
import { safeback } from "./safeback";

export function NotePage() {
  const { noteId } = useParams();
  const [note, setNote] = useState<Note | null | undefined>();
  const session = useSession();
  useEffect(() => {
    supabase
      .schema("notes")
      .from("notes")
      .select()
      .eq("id", noteId)
      .single()
      .then(({ data, error }) => {
        if (error) return alert(error.message);
        setNote(data);
      });
  }, [noteId]);
  return (
    <>
      <div className={styles.topbar}>
        <a
          href="/"
          className={styles.symbol}
          onClick={(event) => {
            event.preventDefault();
            safeback();
          }}
        >
          arrow_back
        </a>
        {note?.user && note.user === session?.user.id && <button>Edit</button>}
      </div>
      <div className={styles.page}>
        {note ? (
          <div className={styles.card}>
            <div>{note.title}</div>
            <pre>{note.content}</pre>
          </div>
        ) : note === null ? (
          <div>Not Found</div>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}
