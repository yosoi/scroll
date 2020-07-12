import PrevButton from "./PrevButton";
import Clause from "./Clause";
import AddButton from "./AddButton";
import React from "react";
import Spinner from "react-bootstrap/Spinner";

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
  if (showBackButton) {
    clauses.push(<PrevButton key="prev" onClick={onPrev}></PrevButton>);
  }
  clauses.push(<AddButton key="add" onClick={onAdd}></AddButton>);
  return <div>{clauses}</div>;
}