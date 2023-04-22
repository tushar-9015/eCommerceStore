import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
              <div className='nav-wrapper-item'>
              <Link className='link' to='/'>Logo</Link>
              </div>
              <div className='nav-wrapper-item'>
              <Link className='link' to='/product/:id'>Products</Link>
              </div>
              <div className='nav-wrapper-item'>
              <Link className='link' to='cart'>Cart</Link>
              </div>
            </div>    
        </div>
  )
}

export default Navbar
