import React from 'react';
import './HeroBanner.css'
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className='heroBanner'>
      <div className='heroBanner-left'>
      <span className='heroBanner-tagLine'>Shoes <span className='color-red'>Made</span> <br /> For <span className='color-red'>You</span></span>
      <Link  className='link' to='/products/:id'>
      <button className='explore-btn'>Explore</button>
      </Link>
      </div>
      <div className='heroBanner-right'>
      <img  className= 'hero-image' src='https://images.pexels.com/photos/4490019/pexels-photo-4490019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      </div>
    </div>
  )
}

export default HeroBanner
