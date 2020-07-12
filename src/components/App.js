import ClauseContainer from "./ClauseContainer";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Readout from "./Readout";
import Row from "react-bootstrap/Row";
import * as Scroll from "../api/Scroll";

function App() {
  const [children, setChildren] = useState([]);
  const [clauses, setClauses] = useState([]);
  const [parentId, setParentId] = useState("");

  const add = (text) => {
    Scroll.add(parentId, text, (data) => {
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
      setClauses(clauses.slice(0, -1));
      setChildren(data.clauses);
      setParentId(data.parent_id);
    });
  };

  useEffect(() => {
    next("ROOT");
  }, []);

  return (
    <Container className="pt-5 pl-5 pr-5 pb-5">
      <Row className="mt-3 mb-3 text-right">
        <Col>
          <h1>scroll</h1>
          <p className="text-muted">A collaborative writing toy.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Readout clauses={clauses}></Readout>
        </Col>
      </Row>
      <Row>
        <Col>
          <ClauseContainer
            children={children}
            onAdd={(text) => add(text)}
            onPrev={() => prev()}
            onNext={(clauseId, text) => {
              setClauses(clauses.concat([text]));
              next(clauseId);
            }}
            showBackButton={parentId !== "ROOT"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
