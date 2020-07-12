import Button from "react-bootstrap/Button";
import React from "react";

export default function ({ id, onClick, text, timestamp }) {
  return (
    <Button
      block
      className="mb-4 p-3 text-left shadow rounded-0"
      onClick={() => onClick(id, text)}
      variant="light"
    >
      {text}
    </Button>
  );
}
