export function isAuthenticated() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return true;
  }
}
