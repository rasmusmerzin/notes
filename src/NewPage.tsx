import { useState } from "react";
import styles from "./NewPage.module.css";

export function NewPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className={styles.page}>
      <div className={styles.form}>
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
        <div className={styles.actions}>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
