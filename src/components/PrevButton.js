import Back from "./icons/Back";
import Button from "react-bootstrap/Button";
import React from "react";

export default function ({ onClick }) {
  return (
    <Button
      block
      className="pt-3 pb-3 shadow-sm"
      onClick={onClick}
      variant="info rounded-pill"
    >
      <Back></Back>
    </Button>
  );
}
