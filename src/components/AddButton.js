import Add from "./icons/Add";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

export default function ({ onClick }) {
  return (
    <Form onSubmit={(event) => onClick(event.target.elements.text.value)}>
      <Form.Group className="mb-2" controlId="text">
        <Form.Control
          as="textarea"
          maxLength="300"
          placeholder="Add your own version..."
        ></Form.Control>
      </Form.Group>
      <Button
        block
        className="mb-2 p-3"
        onClick={onClick}
        type="submit"
        variant="dark"
      >
        <Add></Add>
      </Button>
    </Form>
  );
}
