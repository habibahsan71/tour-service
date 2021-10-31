
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";


import { useHistory } from "react-router-dom";

const Cart = () => {
    const { selectedService, remove, setSelectedService } = useAuth();
    const history = useHistory();
    const totalPrice = selectedService.reduce(
        (total, service) => parseInt(total) + service.price, 0
    );

    return (
        <div className="my-4">
            <Container>
                {selectedService.length ? (
                    <Row>
                        <Col md={8}>
                            {selectedService.map((service) => {
                                const { img, _id, name, description, price } =
                                    service;

                                return (
                                    <Row className="my-2" key={_id}>
                                        <Col sm={5}>
                                            <img className="img-fluid" src={img} alt="" />
                                        </Col>
                                        <Col sm={7}>
                                            <h5>{name}</h5>
                                            <p className="mb-0">{description}</p>
                                            <h4>Price: {price}</h4>
                                            <Row>
                                                <Col sm={8}>
                                                    <div className="d-flex">


                                                        <button
                                                            onClick={() => remove(_id)}
                                                            className="btn btn-primary  w-100"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                );
                            })}
                        </Col>
                        <Col className="text-center" md={4}>
                            <h4>Total {selectedService.length} service selected</h4>
                            <h6>Total Price: {totalPrice} $</h6>

                            <button
                                onClick={() => {
                                    alert("This for purchasing");
                                    localStorage.setItem("cart", JSON.stringify([]));
                                    setSelectedService([]);
                                    history.push("/home");
                                }}
                                className="btn btn-primary"
                            >
                                Check Out
                            </button>
                        </Col>
                    </Row>
                ) : (
                    <div className="text-center my-5 py-5">
                        <h1>No service Selected!</h1>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Cart;
