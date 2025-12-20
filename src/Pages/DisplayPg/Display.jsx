import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/disp-1.jpg";
import img2 from "../../assets/disp-2.jpg";
import img3 from "../../assets/disp-3.jpg";
import img4 from "../../assets/disp-4.jpg";
import img5 from "../../assets/disp-5.jpg";
import img6 from "../../assets/display-sectiontwo.jpg"
import img7 from "../../assets/product-one.jpg"
import img8 from "../../assets/product-two.jpg"
import img9 from "../../assets/product-three.jpg"
import img10 from "../../assets/product-four.jpg"
// import img11 from "../../assets/product-five.jpg"
import img12 from "../../assets/product-six.jpg"
import img13 from "../../assets/product-seven.gif"


import './Display.css';
import { Col, Row } from 'react-bootstrap';
// import { Button } from 'react-bootstrap'
import Button from "@mui/material/Button";


const Display = () => {
    return (
        <>
            <Carousel fade interval={3000} pause="hover">
                {[img1, img2, img3, img4, img5].map((img, index) => (
                    <Carousel.Item key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="d-block w-100  h-75 carousel-img"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="seccion-two">
                <Row>

                    <Col md={12}>
                        <div className="text-center section-font">
                            Food of The Gods, Freshly Baked!
                        </div>
                    </Col>

                    <Col md={12} lg={12} className='text-center mx-3 mt-4 section-two2'>
                        Since 2004, we've been serving our guests the best quality treats,
                        traditionally made and presented with care.
                    </Col>
                </Row>


                <Row className='pt-4 m-5'>
                    <Col xs={12} md={4} className="mb-4 mb-md-0 text-center">
                        <h5 className="fw-bold section-two3" >Authentic Recipes</h5>
                        <p className='section-two3-sub'>
                            Our products are based on traditional home-style recipes
                            using fresh ingredients.
                        </p>

                        <h5 className="fw-bold mt-5 section-two3 ">Baked With Love</h5>
                        <p className='section-two3-sub'>
                            Our passion for baking is poured into every recipe,
                            serving smiles on a plate everyday.
                        </p>
                    </Col>


                    <Col xs={12} md={4} className="mb-4 mb-md-0 text-center">
                        <img
                            src={img6}
                            alt="Bakery"
                            className="img-fluid"
                        />
                    </Col>


                    <Col xs={12} md={4} className='text-center'>
                        <h5 className="fw-bold section-two3">Committed To Quality</h5>
                        <p className='section-two3-sub'>
                            From our ingredients to our kitchen operations & guest services,
                            we always prioritize quality.
                        </p>

                        <h5 className="fw-bold mt-5 section-two3 ">Honestly Priced</h5>
                        <p className='section-two3-sub'>
                            We constantly strive to offer the best products
                            at the right prices.
                        </p>
                    </Col>


                </Row>

                <input type="button" value="Know More " className="display-button" />

            </div>




            <div className="product-section">
                <h2 className="product-heading">Our Products</h2>

                <Row className="product-image justify-content-center">

                    <Col lg={3} sm={3} xs={4} className="text-center mb-4">
                        <img src={img8} alt="" />
                        <p>PASTRIES</p>
                    </Col>

                    <Col lg={3} sm={3} xs={4} className="text-center mb-4">
                        <img src={img7} alt="" />
                        <p>CAKES</p>
                    </Col>

                    <Col lg={3} sm={3} xs={4} className="text-center mb-4">
                        <img src={img9} alt="" />
                        <p>DESSERTS & CUPCAKES</p>
                    </Col>

                    <Col lg={3} sm={3} xs={4} className="text-center mb-4">
                        <img src={img10} alt="" />
                        <p>BROWNIES</p>
                    </Col>


                </Row>
                <input type="button" value="View More" className='product-btn text-center' />


            </div>


            <div className="section-four">
                <Row className="align-items-center">

                    <Col lg={6} sm={6} xs={12}>
                        <p className="section-heading-one">
                            Packed with love & all your favourites!
                        </p>
                        <p className="section-heading-two">
                            Now gift your loved ones our special hampers curated with our signature products.
                        </p>
                        <input type="button" value="Know More" className="section-four-btn mt-4" />
                    </Col>

                    <Col lg={6} sm={6} xs={12} className="text-center">
                        <img src={img12} alt="" className="img-fluid section-img" />
                    </Col>

                </Row>

                <Row className="pt-5 align-items-center">
                    <Col lg={6} sm={6} xs={12} className="text-center order-lg-1 order-2">
                        <img src={img13} alt="" className="img-fluid section-img" />
                    </Col>

                    <Col lg={6} sm={6} xs={12} className="order-lg-2 order-1">
                        <p className="section-heading-one">Tea-Time Delights</p>
                        <p className="section-heading-two">
                            Pick the perfect companion for your tea (or coffee!) from a range of tea cakes & more.
                        </p>
                        <input type="button" value="Know More" className="section-four-btn mt-4" />
                    </Col>
                </Row>
            </div>



        </>
    );
};

export default Display;
