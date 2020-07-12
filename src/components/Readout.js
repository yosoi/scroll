import React from "react";

export default function ({ clauses }) {
  const text = clauses.map((clause) => <p key={clause}>{clause}</p>);
  return <div>{text}</div>;
}
