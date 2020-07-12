import Button from "react-bootstrap/Button";
import React from "react";

export default function ({ onClick }) {
  return (
    <Button block onClick={onClick} variant="outline-primary">
      Back
    </Button>
  );
}
