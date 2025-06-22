import Header from './Header/Header'
import Home from './home/Home'
import Footer from './Footer/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About/About';
import Categories from './Categories/Categories';
import SingleProduct from './Singleproduct/singleProduct';
import Singlecatogry from './Singlecatogry/Singlecatogry';
import { useState } from 'react';
import Cart from './Cart/Cart'



function App() {

  const [count , setCount]= useState([])

  return (
    <>
     <Router>
    <Header count={count}/>
    <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category" element={<SingleProduct count={count} setCount={setCount} />} />
        <Route path="/singlecatogry" element={<Singlecatogry  />} />
        <Route path="/Cart" element={<Cart  count={count} setCount={setCount} />} />
        
    </Routes>
   
    <Footer/>
    </Router>
    
    </>
      )
}

export default App
