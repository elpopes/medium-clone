export const restoreSession = async () => {
  let res = await fetch("/api/session");

  let token = res.headers.get("X-CSRF-Token");
  sessionStorage.setItem("X-CSRF-Token", token);
  let data = await res.json();
  sessionStorage.setItem("currentUser", JSON.stringify(data.user));
};

async function csrfFetch(url, options = {}) {
  options.method = options.method || "GET";
  options.headers = options.header || {};

  if (options.method.toUpperCase() !== "GET") {
    if (
      !options.headers["Content-Type"] &&
      !(options.body instanceof FormData)
    ) {
      options.headers["Content-Type"] = "application/json";
    }
    options.headers["X-CSRF-Token"] = sessionStorage.getItem("X-CSRF-Token");
  }
  const currentUrl = window.location.origin + "/" + url;
  debugger;
  const res = await fetch(currentUrl, options);
  if (res.status >= 400) throw res;
  return res;
}

export default csrfFetch;
