import getUrl from "./getUrl";

function next(id, onResponse) {
  const url = getUrl(id, "next");
  fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then(onResponse);
}

export { next };
