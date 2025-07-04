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
import Contact from './contact/Contact'
import Login from './login/Login';
import { useEffect } from 'react';
import Blog from './blog/Blog';




function App() {

const [count , setCount] = useState(() => {
  const countdata = localStorage.getItem('count');
  return countdata ? JSON.parse(countdata) : [];  
});


useEffect(() => {
  localStorage.setItem("count", JSON.stringify(count));  
}, [count]);


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
         <Route path="/contact" element={<Contact  />} />
         <Route path="/login" element={<Login  />} />
         <Route path = "/blog" element = {<Blog/>}/>
        

        
    </Routes>
   
    <Footer/>
    </Router>
    
    </>
      )
}

export default App
