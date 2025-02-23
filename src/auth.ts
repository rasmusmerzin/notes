import { loadSession, setSession } from "./supabase";

addEventListener("message", async (event) => {
  if (!("session" in event.data)) return;
  const { session } = event.data;
  const logged_out = loadSession() && !session;
  if (logged_out) {
    setSession(null);
    location.reload();
  } else setSession(session);
});

const iframe = document.createElement("iframe");
iframe.src = "https://auth.merzin.dev";

mountAuthIframe();

export function mountAuthIframe(parent?: HTMLElement) {
  iframe.style.display = parent ? "" : "none";
  (parent || document.body).append(iframe);
}
