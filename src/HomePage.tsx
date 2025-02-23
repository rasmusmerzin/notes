import styles from "./HomePage.module.css";
import { Bottombar } from "./Bottombar";
import { Link } from "react-router";
import { Note } from "./Note";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export function HomePage() {
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    supabase
      .schema("notes")
      .from("notes")
      .select()
      .eq("public", true)
      .order("created", { ascending: false })
      .then(({ data, error }) => {
        if (error) return alert(error.message);
        if (data) setNotes(data);
      });
  }, []);
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.title}>Home</h1>
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
