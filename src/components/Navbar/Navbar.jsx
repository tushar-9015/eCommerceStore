import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Cart from '../Cart/Cart';


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
              <div className='nav-wrapper-item'>
              <Link className='link' to='/'>Shoe Store</Link>
              </div>
              <div className='nav-wrapper-item'>
              <Link className='link' to='/products/:id'>Products</Link>
              </div>
              <div className='nav-wrapper-item'  onClick={() => setOpen(!open)}>
                Cart
              </div>
            </div>   
            {open && <Cart />} 
        </div>
  )
}

export default Navbar
