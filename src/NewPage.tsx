import styles from "./NewPage.module.css";
import { useState } from "react";
import { Bottombar } from "./Bottombar";

export function NewPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <>
      <div className={styles.topbar}>
        <h2>New Note</h2>
        <button>Publish</button>
      </div>
      <div className={styles.page}>
        <div className={styles.card}>
          <input
            spellCheck={false}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
          />
          <textarea
            spellCheck={false}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Content"
          ></textarea>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
