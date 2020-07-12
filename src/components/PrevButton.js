import Back from "./icons/Back";
import Button from "react-bootstrap/Button";
import React from "react";

export default function ({ onClick }) {
  return (
    <Button block className="p-3" onClick={onClick} variant="outline-dark">
      <Back></Back>
    </Button>
  );
}
