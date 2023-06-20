import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useRouteError ,useNavigate } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
    const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col xs={{ span: 0, offset: 2 }}>
          <div className="mt-5 text-center">
            <h1>Oops!</h1>
            <p>Sorry , ans Unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
                      </p>
                      <Button primary variant="info" onClick={()=>{navigate("/",{replace:true})}}>Link</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
