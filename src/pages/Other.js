import React from 'react';
import { Container } from 'react-bootstrap';

const Other = () => {
    return (
        <div>
            <Container>
                <div>
                    <h1 className='text-center my-3'>Our Other <span className='text-primary'></span> Services</h1>
                </div>
                <div className='row d-flex justify-content-between mt-3'>
                    <div className="card mb-3 col-md-5 shadow">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src="/02.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">HBK Hotels</h5>
                                    <p className="card-text">One of the biggest Chain Hotel Companies in Country.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-5 shadow">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src="/2.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">HBK Resorts</h5>
                                    <p className="card-text">We give best service to people who want to have a wonderful evening.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-5 shadow">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src="/4.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">HBK Fun city</h5>
                                    <p className="card-text">We have artificial beach with park their you can use rides and many fun things.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-5 shadow">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src="/g.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">HBK Chain restaurants</h5>
                                    <p className="card-text">We provide best meals and provide best food around the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>

            </Container>
        </div>
    );
};

export default Other;