import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import Service from "../components/course/Service.js";
import Other from "./Other.js";
import Specialist from "./Specialist.js";

const Home = () => {
  const { services } = useAuth();
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./12.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='text-dark'>Best Places</h3>
            <p className='text-dark fw-bold'>Best Places with world best Services to give Enjoyable Tour</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./14.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className='text-dark'>Best Guides</h3>
            <p className='text-dark fw-bold'>We Have the best Local Guide. and we provide best Guide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./11.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className='text-dark'>Best Facilities</h3>
            <p className='text-dark fw-bold'>We Have the best facilities for a Tourist. and Facilities matter for Tourist</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id="feature"
        className="py-5">
        <div className="text-center">

          <h1 >Our <span className='text-primary'>Services</span></h1>
          <p className="mb-0">
            We Provide Best Services around The country
          </p>

        </div>

        <Container>
          <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {services.slice(0, 6)?.map((service) => (
                <Service key={service._id} service={service} />
              ))}
            </Row>
          </div>
        </Container>

        <Container >
          <div className="text-center">
            <NavLink to="/services" className="rounded-pill btn btn-primary fs-5 py-2 px-4">
              View All Services
            </NavLink>
          </div>
        </Container>
      </div>
      <Other></Other>
      <Specialist></Specialist>
    </div>
  );
};

export default Home;
