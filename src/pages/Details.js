import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";

const Details = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({})

  useEffect(() => {
    fetch(`https://creepy-mansion-01173.herokuapp.com/services/${serviceId}`)
      .then(res => res.json())
      .then(data => setService(data))
  })

  return (
    <div className="my-4 col-md-6 text-center">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <img className="img-fluid" src={service.img} alt="" />
          </Col>
          <Col md={6} className="d-flex justify-content-center flex-column">
            <h2>{service?.name}</h2>
            <h5>{service?.description}</h5>
            <Row>
              <Col>
                <h1>Price:{service?.price}$</h1>

              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
