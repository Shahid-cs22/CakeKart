import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <Row className="footer-row text-center justify-content-center">

            <Col xs={4} sm={4} md={3} lg={3} className="mb-4">
              <p className="footer-p">Information</p>
              <div className="rooter-row">
                <Card.Link href="#">About Us</Card.Link><br />
                <Card.Link href="#">Privacy Policy</Card.Link><br />
                <Card.Link href="#">Terms & Conditions</Card.Link><br />
                <Card.Link href="#">Shipping Policy</Card.Link>

              </div>
            </Col>

            <Col xs={4} sm={4} md={3} lg={3} className="mb-4">
              <p className="footer-p">Customer Service</p>
              <div className="rooter-row">
                <Card.Link href="#">Contact Us</Card.Link><br />
                <Card.Link href="#">Support</Card.Link> <br />
                <Card.Link href="#">Returns & Refunds</Card.Link><br />
                <Card.Link href="#">FAQs</Card.Link>
              </div>
            </Col>

            <Col xs={4} sm={4} md={3} lg={3} className="mb-4">
              <p className="footer-p">Categories</p>
              <div className="rooter-row">
                <Card.Link href="#">Cakes</Card.Link><br />
                <Card.Link href="#">Pastries</Card.Link><br />
                <Card.Link href="#">Cup Cakes</Card.Link><br />
                <Card.Link href="#">Cookies</Card.Link>

              </div>
            </Col>

            <Col xs={4} sm={4} md={3} lg={3} className="mb-4">
              <p className="footer-p">Location</p>
              <div className="rooter-row">
                <Card.Link href="#">Eathamozhi</Card.Link><br />
                <Card.Link href="#">Nagercoil</Card.Link><br />
                <Card.Link href="#">Kanyakumari</Card.Link><br />
                <Card.Link href="#">TamilNadu</Card.Link>
              </div>
            </Col>

            <Col xs={4} sm={4} md={3} lg={3} className="mb-4">
              <p className="footer-p">Contact Us</p>
              <div className="rooter-row">
                <Card.Link href="#">7339110968</Card.Link><br />
                <Card.Link href="#">info@cakekart.in</Card.Link><br />
                <Card.Link href="#">cakecartblog.in</Card.Link><br />
                <Card.Link href="#">cakekart</Card.Link>
              </div>
            </Col>

          </Row>
        </div>
        <div className="text-center py-3 footer-copy">
          <Col> &copy; {new Date().getFullYear()}. All Rights Reserved.</Col>
        </div>
      </div>


    </>
  )
}

export default Footer
