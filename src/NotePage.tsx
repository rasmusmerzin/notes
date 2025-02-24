import styles from "./NotePage.module.css";
import { Note } from "./Note";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { supabase, useSession } from "./supabase";
import { Spinner } from "./Spinner";
import { Dialogue } from "./Dialogue";

export function NotePage() {
  const { noteId } = useParams();
  const [note, setNote] = useState<Note | null | undefined>();
  const [deleteDialogue, setDeleteDialogue] = useState(false);
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
        if (error) return alert(error.message);
        setNote(data);
      });
  }, [noteId, session?.user.id]);
  return (
    <>
      <div className={styles.page}>
        <div className={styles.topbar}>
          <button onClick={() => history.back()}>arrow_back</button>
          {amowner && (
            <div>
              <button onClick={() => setDeleteDialogue(true)}>delete</button>
            </div>
          )}
        </div>
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
      {deleteDialogue && (
        <Dialogue
          title="Delete Note"
          body="Are you sure you want to delete this note?"
          cancelAction={() => setDeleteDialogue(false)}
          confirmText="Delete"
          confirmAction={async () => {
            const { error } = await supabase
              .schema("notes")
              .from("notes")
              .delete()
              .eq("id", noteId);
            if (error) return alert(error.message);
            history.back();
          }}
        />
      )}
    </>
  );
}
