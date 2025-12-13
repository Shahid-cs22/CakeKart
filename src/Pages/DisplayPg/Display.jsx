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



            </div>

            <Button className="display-button"
                variant="contained"
                sx={{
                    fontFamily: "Josefin Sans, sans-serif",
                    backgroundColor: "lightgreen",
                    color: "black",
                    fontWeight: 400,
                    "&:hover": {
                        backgroundColor: "#90ee90",
                    },
                }}
            >
                Know More
            </Button>

            <div className="product-section">

                <h2 className="product-heading">Our Products</h2>

                <Row className='product-image'>
                    <Col><img src={img7} alt="" /><h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4></Col>
                    <Col><img src={img8} alt="" /><h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4></Col>
                    <Col><img src={img9} alt="" /><h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4></Col>
                    <Col><img src={img10} alt="" /><h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4></Col>

                </Row>
            </div>


        </>
    );
};

export default Display;
