import Button from "react-bootstrap/Button";
import React from "react";

export default function ({ id, onClick, text, timestamp }) {
  return (
    <Button
      block
      className="mb-2 p-3 text-left"
      onClick={() => onClick(id)}
      variant="outline-primary"
    >
      {text}
    </Button>
  );
}
