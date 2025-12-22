import React, { useEffect, useState } from 'react'
import './Product.css'
import img1 from "../../assets/product-img1.jpg"
import axios from 'axios'
import { Col, Row, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import img2 from '../../assets/about-last.jpg'

const Product = () => {

  const navi = useNavigate();
  const goToContact = () => navi('/contact');

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/product")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='product-sectionn'>

      <div className='product-sectionn-one'>
        <div className="product-head">Theobroma Products</div>
        <div className="product-head-sub">
          At Theobroma, we offer a wide range of products, both sweet & savoury.
          Our offerings include indulgent brownies, cakes & desserts, artisanal breads, puffs & quiches, wholesome sandwiches, wraps & rolls, beverages and more.
        </div>

        <div className="product-image-img">
          <img src={img1} alt="" className='img-fluid' />
        </div>
      </div>

      <div className="product-section-two">
        <Container>
          <Row className='g-2 roe-product'>
            {products.map((data) => (
              <Col key={data.id} xs={6} sm={6} md={4} lg={3} className="text-center mb-3">
                <img src={data.image} alt={data.name} className='img-fluid' />
                <p>{data.name}</p>



                <Link to={`/product/${data.id}`} className="product-button">
                  Order Me
                </Link>

              </Col>
            ))}
          </Row>
        </Container>
      </div>


      <div className="product-last-section">

        <h2>For Queries & Orders</h2>

        <p>Please contact us with your queries or to discuss your requirements.</p>

        <input type="button" value="Contact Us" onClick={goToContact} className='btn-btn-color-ttn' />
        <img src={img2} alt="" className='img-fluid' />
      </div>
    </div>
  )
}

export default Product
