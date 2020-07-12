import getUrl from "./getUrl";

function prev(parentId, onResponse) {
  const url = getUrl(parentId, "prev");
  console.log(url);
  fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then(onResponse);
}

export { prev };
