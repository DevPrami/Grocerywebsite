import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <>
    
        <ul className='flex gap-7 items-center'>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li><Link to="/categories">Categories </Link></li>
            <li>Contact us</li>
        </ul>
  
    
    
    
    
    </>
  )
}
