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







const App = () => {

  return (
    <>

      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/speciality' element={<Speciality />} />
        <Route path='/christmass' element={<Christmass />} />
        <Route path='/contact' element={<Contact />} />
            

      </Routes>
    
    </>
  )
}

export default App
