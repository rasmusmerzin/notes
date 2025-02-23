import styles from "./Dialogue.module.css";
import { Modal } from "./Modal";

export function Dialogue({
  title,
  body,
  confirmText = "Confirm",
  confirmAction,
  cancelAction,
}: {
  title: string;
  body: string;
  confirmText?: string;
  confirmAction?: () => void;
  cancelAction?: () => void;
}) {
  return (
    <Modal onOffClick={cancelAction}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      <div className={styles.actions}>
        <button onClick={cancelAction}>Cancel</button>
        <button onClick={confirmAction}>{confirmText}</button>
      </div>
    </Modal>
  );
}
