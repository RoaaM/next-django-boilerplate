export function GetBaseUrl(): string {
  if (window.location.origin === "http://localhost:1234") {
    return "http://127.0.0.1:8000/";
  } else {
    return `${window.location.origin}/`;
  }
}
