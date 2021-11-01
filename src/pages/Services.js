import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";
import Service from "../components/service/Service";

const Services = () => {
  const { services } = useAuth();

  return (
    <div className="py-5 mt-5">
      <div className="text-center text-dark">

        <h1> Our Provided <span className='text-primary'>Tour</span> Plans</h1>

        <p className="mb-0">
          We offer best tour plan for Our client with best accomdation.
        </p>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between">
          <Row>
            {services.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
