import styles from "./HomePage.module.css";
import { Bottombar } from "./Bottombar";
import { Link } from "react-router";
import { Note } from "./Note";
import { supabase, useSession } from "./supabase";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";

export function MinePage() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const session = useSession();
  useEffect(() => {
    if (!session) return;
    supabase
      .schema("notes")
      .from("notes")
      .select()
      .eq("user", session?.user.id)
      .order("created", { ascending: false })
      .then(({ data, error }) => {
        setLoading(false);
        if (error) return alert(error.message);
        if (data) setNotes(data);
      });
  }, [session]);
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.title}>My Notes</h1>
        {loading && <Spinner />}
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
