import ClauseContainer from "./ClauseContainer";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import * as Scroll from "../api/Scroll";

function App() {
  const [children, setChildren] = useState([]);
  const [parentId, setParentId] = useState("");

  const add = () => {
    const text = "Hey Planet!";
    Scroll.add(parentId, text, (data) => {
      console.log(data);
      next(data.parent_id);
    });
  };

  const next = (id) => {
    Scroll.next(id, (data) => {
      setChildren(data);
      setParentId(id);
    });
  };

  const prev = () => {
    if (parentId === "ROOT") return;
    Scroll.prev(parentId, (data) => {
      console.log(data);
      setChildren(data.clauses);
      setParentId(data.parent_id);
    });
  };

  useEffect(() => {
    next("ROOT");
  }, []);

  return (
    <Container>
      <Row className="mt-3 text-center">
        <Col>
          <h6>scroll</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <ClauseContainer
            children={children}
            onAdd={() => add()}
            onPrev={() => prev()}
            onNext={(clauseId) => next(clauseId)}
            showBackButton={parentId !== "ROOT"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
