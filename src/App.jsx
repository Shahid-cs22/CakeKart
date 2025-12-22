import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/AboutPg/About';
import Product from './Pages/ProductPg/Product';
import Speciality from './Pages/SpecialPg/Speciality';
import Christmass from './Pages/Chriatmass/Christmass';
import Contact from './Pages/ContactPg/Contact';
import { Route, Routes } from 'react-router-dom';
import Display from './Pages/DisplayPg/Display';
import AddToCart from './Pages/AddCart/AddToCart';
import Footer from './Components/Footer.jsx'
import ProductDetails from './Pages/ProductViewPg/ProductDetails';



const App = () => {

  return (
    <>

      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/about' element={<About />} />
        <Route path='/speciality' element={<Speciality />} />
        <Route path='/christmass' element={<Christmass />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<AddToCart />} />
        <Route path='/footer' element={<Footer />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />



      </Routes>

    </>
  )
}

export default App
