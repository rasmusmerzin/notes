export function safeback(fallback = "/") {
  const referrer = new URL(document.referrer || "/", location.href);
  if (referrer.origin === location.origin) history.back();
  else history.replaceState(null, "", fallback);
}
