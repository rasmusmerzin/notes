import styles from "./NotePage.module.css";
import { Note } from "./Note";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { supabase, useSession } from "./supabase";
import { Spinner } from "./Spinner";

export function NotePage() {
  const { noteId } = useParams();
  const [note, setNote] = useState<Note | null | undefined>();
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const amowner = !!session && note?.user === session?.user.id;
  useEffect(() => {
    supabase
      .schema("notes")
      .from("notes")
      .select()
      .eq("id", noteId)
      .single()
      .then(({ data, error }) => {
        setLoading(false);
        if (error) return alert(error.message);
        setNote(data);
      });
  }, [noteId, session]);
  return (
    <>
      <div className={styles.topbar}>
        <button onClick={() => history.back()}>arrow_back</button>
        {amowner && (
          <div>
            <button
              disabled={loading}
              onClick={async () => {
                setLoading(true);
                const { error } = await supabase
                  .schema("notes")
                  .from("notes")
                  .delete()
                  .eq("id", noteId);
                setLoading(false);
                if (error) return alert(error.message);
                history.back();
              }}
            >
              delete
            </button>
          </div>
        )}
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
