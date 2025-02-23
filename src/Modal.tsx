import styles from "./Modal.module.css";

export function Modal({
  children,
  onOffClick,
}: {
  children: React.ReactNode;
  onOffClick?: () => void;
}) {
  return (
    <div className={styles.modal} onClick={onOffClick}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
