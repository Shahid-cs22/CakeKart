import React from 'react'
import './About.css'
import aboutone from "../../assets/about-one.jpg"

const About = () => {
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
      </div>

    </>
  )
}

export default About
