import { useEffect, useRef } from "react";
import styles from "./AccountPage.module.css";
import { mountAuthIframe } from "./auth";
import { Bottombar } from "./Bottombar";

export function AccountPage() {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    mountAuthIframe(container.current);
  }, [container.current]);
  return (
    <>
      <div ref={container} className={styles.container}></div>
      <Bottombar />
    </>
  );
}
