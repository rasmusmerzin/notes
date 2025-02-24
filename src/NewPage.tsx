import styles from "./NewPage.module.css";
import { useState } from "react";
import { supabase, useSession } from "./supabase";
import { useNavigate } from "react-router";

export function NewPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.page}>
        <div className={styles.topbar}>
          <h2>New Note</h2>
          <button
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              const { data, error } = await supabase
                .schema("notes")
                .from("notes")
                .insert({
                  title,
                  content,
                  user: session?.user.id,
                  public: true,
                })
                .select()
                .single();
              setLoading(false);
              console.log({ data });
              if (error) return alert(error.message);
              navigate(`/note/${(data as any).id}`, { replace: true });
            }}
          >
            Publish
          </button>
        </div>
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
