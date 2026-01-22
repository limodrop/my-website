export function track(event: string, payload?: Record<string, any>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("otc-track", { detail: { event, payload } })
  );
}
