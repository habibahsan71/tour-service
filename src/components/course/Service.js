import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Service.css';


const Service = ({ service }) => {
  const { _id, img, name, description, price } = service;

  const { addToCart } = useAuth();

  return (
    <Col sm={12} md={6} lg={4}>

      <div className="m-2">
        <Card className="mx-auto text-center shadow" style={{ width: "21rem", height: "32rem" }}>
          <div className="inner">
            <Card.Img variant="top" className="img-fluid" src={img} />
          </div>
          <Card.Body className="my-1 py-1">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Body className="my-1 py-1">
            <h4>Price: {price}$</h4>
          </Card.Body>

          <Card.Body>
            <NavLink to={`/services/${_id}`} className="btn btn-primary w-50 mx-auto ">
              View Details
            </NavLink>
            <button
              onClick={() => addToCart(service)}
              className="btn btn-primary  w-100"
            >
              Add to Cart
            </button>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default Service;
