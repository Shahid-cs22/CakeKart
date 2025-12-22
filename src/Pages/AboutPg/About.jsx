import React, { useEffect, useState } from 'react'
import './About.css'
import aboutone from "../../assets/about-one.jpg"
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { Col, Container, Row } from 'react-bootstrap';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import axios from 'axios';
import aboutimg from '../../assets/about-last.jpg'
const About = () => {

  const [manager, setManager] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/managers")
      .then(res => setManager(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>

      <div className='about-section'>
        <div className="about-one">
          <div className="about-two">
            <p>About Page</p>

            <div className="about-three">
              <img src={aboutone} alt="About section image" className="img-fluid" />
            </div>
          </div>
          <div className="para">
            <p >Theobroma means 'Food of the Gods' in Greek, befitting our exclusive and indulgent range \
              of offerings that include brownies, cakes, desserts, chocolates, breads, and savouries.
            </p><br />

            <p>From our humble beginnings in 2004, when the first Theobroma pastry store opened its doors at the iconic Cusrow Baug at Colaba Causeway (Mumbai),
              we've grown to become a Pan-India chain of patisseries with stores in over 30 cities.
            </p><br />
            <p>Our mission is to spread happiness by serving smiles on a plate, and this journey continues as we open Theobroma patisseries across the country.

            </p>
          </div>
        </div>

        <div className="about-two">
          <div className="promis-one">Our Promise</div>
          <div className="promis-two">
            <Row>
              <Col sm={6} lg={3} xs={6}>
                <p><span className='about-icon'><RamenDiningIcon /></span> <br /> <br />
                  <span className='about-heading' >AUTHENTIC RECIPES</span> <br /><br />
                  <span className='about-body'>Our products are based on traditional home-style recipes, using fresh ingredients.</span>
                </p>
              </Col>
              <Col sm={6} lg={3} xs={6}>
                <p><span className='about-icon'><FavoriteIcon /></span><br /><br />
                  <span className='about-heading'>BAKED WITH LOVE</span><br /><br />
                  <span className='about-body'>Our passion for baking is poured into every recipe, serving smiles on a plate everyday.</span>
                </p>
              </Col>
              <Col sm={6} lg={3} xs={6}>
                <p><span className='about-icon'><RequestPageIcon /></span><br /><br />
                  <span className='about-heading'>HONESTLY PRICED</span><br /><br />
                  <span className='about-body'>We constantly strive to offer the best products at the right prices.</span>
                </p>
              </Col>
              <Col sm={6} lg={3} xs={6}>
                <p><span className='about-icon'><CardGiftcardIcon /></span><br /><br />
                  <span className='about-heading'>GOOD QUALITY</span><br /><br />
                  <span className='about-body'>From our ingredients to our kitchen operations & guest services, we always prioritize quality.</span>
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="about-three" >

         
          <Container>
            <Row className="g-1">

              {
                manager.map((data) => (
                  <Col key={data.id} xs={12} md={4} lg={4} className="text-center" style={{alignItems:"center"}}>
                    <img
                      src={data.image} className="img-fluid image-img  mb-3 "
                      style={{ width:"250px", height:"auto", objectFit: "cover", backgroundColor: "white",  borderRadius:"8px", alignItems:"center" , margin:"auto"}}
                    />
                    <h5 className='manager-name'>{data.name}</h5>
                    <p className='manager-description'>{data.description}</p>
                  </Col>
                ))}

            </Row>
          </Container>
        </div>

        <div className="about-fout">

          <div className="about-four-head">

            <h3>Like our products?</h3>
            <p>Treat yourself to your favourite Theobroma products or surprise your loved ones with an edible gift.</p>

            <input
              type="button"
              value="ONLINE ORDER"
              className="about-four-btn"
            />

          </div>
          <div className="about-four-img">
            <img src={aboutimg} alt="" />
          </div>
        </div>

      </div>

    </>
  )
}

export default About
