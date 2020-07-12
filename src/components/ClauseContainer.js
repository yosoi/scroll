import AddButton from "./AddButton";
import Clause from "./Clause";
import PrevButton from "./PrevButton";
import React from "react";

export default function ({ children, onAdd, onPrev, onNext, showBackButton }) {
  const clauses = children.map((data) => {
    return (
      <Clause
        id={data.id}
        key={data.id}
        onClick={onNext}
        text={data.text}
        timestamp={data.timestamp}
      />
    );
  });
  clauses.push(<AddButton key="add" onClick={onAdd}></AddButton>);
  if (showBackButton) {
    clauses.push(<PrevButton key="prev" onClick={onPrev}></PrevButton>);
  }
  return <div>{clauses}</div>;
}
