import React from 'react'
import './Speciality.css'
import img from "../../assets/special-img1.jpg"
import { Col, Row } from 'react-bootstrap'
import img2 from "../../assets/special-img2.jpg"
import img3 from "../../assets/special-img3.jpg"
import img4 from "../../assets/special-img4.jpg"
import img5 from "../../assets/special-img5.jpg"
import img6 from "../../assets/special-img7.jpg"
const Speciality = () => {
    return (
        <>
            <div className="specal-section">
                <div className="">
                    <div className="special-one">
                        <h2>Speciality Cakes </h2>
                    </div>
                    <div className="specal-one-para">
                        Our made-to-order range of speciality cakes is here to make any celebration great!
                        From Theobroma classic cakes to gourmet cakes to customized theme cakes, we have something for every special occasion.
                    </div>
                    <div className="specal-one-img">
                        <img src={img} alt="" className='img-fluid' />
                    </div>
                </div>

                <div className="specal-two">
                    <div className="images">
                        <Row className='g-3 ' style={{ margin: "30px", backgroundColor: "#f0f8ff8f", padding: "15px", borderRadius: "10px" }}>
                            <Col md={6} sm={3} xs={6} lg={3}>
                                <img src={img2} className='img-fluid' alt="" />
                                <p className="specal-two-p">After Nine cake </p>
                            </Col>
                            <Col md={6} sm={3} xs={6} lg={3}>
                                <img src={img3} className='img-fluid' alt="" />
                                <p className="specal-two-p">Almond Cake</p>
                            </Col>
                            <Col md={6} sm={3} xs={6} lg={3}>
                                <img src={img4} className='img-fluid' alt="" />
                                <p className="specal-two-p">Cappliccino Cake</p>
                            </Col>
                            <Col md={6} sm={3} xs={6} lg={3}>
                                <img src={img5} className='img-fluid' alt="" />
                                <p className="specal-two-p">Carrot Cake</p>
                            </Col>

                            <input type="button" value="View All" className="about-four-btn" />
                        </Row>
                    </div>
                </div>


                <div className="specal-three">
                    <div className="special-one">
                        <h2>Customised Theme Cakes</h2>
                    </div>
                    <div className="specal-three-two">
                        We handcraft and customize celebration cakes for all special occasions. From theme-based and personalized birthday cakes to exquisite multi-tiered wedding cakes, we have all your celebrations covered!

                        Write to us with your customized theme cake requirements at - contact@theobroma.in
                    </div>
                </div>


                <div className="specal-four">
                    <div className="special-title">
                        <h2 className='specal-four-title'>Pre Order Now!</h2>
                        <p className='specal-four-p'>To pre-order, call us at +91 8182881881 or write to us at contact@theobroma.in</p>
                    </div>

                    <div className="specal-four-btn">
                        <input type="button" value="Call Now" />
                        <input type="button" value="Mail Us" />
                    </div>

                    <div className="specal-four-img">
                        <img src={img6} alt="" className='img-fluid' />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Speciality
