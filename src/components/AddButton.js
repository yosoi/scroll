import Button from "react-bootstrap/Button";
import React from "react";

export default function ({ onClick }) {
  return (
    <Button block className="mb-2" onClick={onClick} variant="outline-primary">
      Add
    </Button>
  );
}
