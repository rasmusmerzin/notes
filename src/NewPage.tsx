import styles from "./NewPage.module.css";
import { Navbar } from "./Navbar";
import { useState } from "react";

export function NewPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <>
      <Navbar title="New Note">
        <button
          disabled={!title || !content}
          data-tooltip={
            !title ? "Title is empty" : !content ? "Content is empty" : ""
          }
        >
          Publish
        </button>
      </Navbar>
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
    </>
  );
}
