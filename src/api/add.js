import getUrl from "./getUrl";

function add(parentId, text, onResponse) {
  const url = getUrl();
  fetch(url, {
    body: JSON.stringify({
      parent_id: parentId,
      text: text,
    }),
    method: "POST",
  })
    .then((response) => response.json())
    .then(onResponse);
}

export { add };
