export default function (id = "", method = "") {
  const url =
    "https://tb33atk9xk.execute-api.us-east-1.amazonaws.com/dev/clauses/";
  if (id === "") return url;
  return url + id + "/" + method;
}
