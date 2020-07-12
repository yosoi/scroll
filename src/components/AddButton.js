import Add from "./icons/Add";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

export default function ({ onClick }) {
  return (
    <Form onSubmit={(event) => onClick(event.target.elements.text.value)}>
      <Form.Group className="mb-4 mt-5" controlId="text">
        <Form.Control
          as="textarea"
          maxLength="300"
          placeholder="Enter up to 300 characters..."
        ></Form.Control>
      </Form.Group>
      <Button
        block
        className="mb-3 shadow-sm"
        onClick={onClick}
        type="submit"
        variant="secondary rounded-pill"
      >
        <Add></Add>
      </Button>
    </Form>
  );
}
