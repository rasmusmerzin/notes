import { createClient, type Session } from "@supabase/supabase-js";
import { create } from "zustand";

const project_id = "jyqrmpktztaqdczeglqp";
const storage_session_key = `sb-${project_id}-auth-token`;
export const supabase = createClient(
  `https://${project_id}.supabase.co`,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5cXJtcGt0enRhcWRjemVnbHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyODkwMjQsImV4cCI6MjA0Nzg2NTAyNH0.cnmBaK8Em8M6pcNIMQ0NPeaeyzQVoenv20OtMliZOVk",
);

export const useSession = create<Session | null>((set) => {
  supabase.auth.onAuthStateChange((_event, session) => set(session));
  return loadSession();
});

export async function setSession(value: Session | null) {
  const saved = loadSession();
  if (saved?.access_token === value?.access_token) return;
  if (value) {
    await (supabase.auth as any)._saveSession(value);
    await (supabase.auth as any)._notifyAllSubscribers("SIGNED_IN", value);
  } else if (saved) {
    await (supabase.auth as any)._removeSession();
    saveSession(null);
  }
}

export function saveSession(value: Session | null) {
  if (value) localStorage.setItem(storage_session_key, JSON.stringify(value));
  else localStorage.removeItem(storage_session_key);
}

export function loadSession(): Session | null {
  const data = localStorage.getItem(storage_session_key);
  return data ? JSON.parse(data) : null;
}
