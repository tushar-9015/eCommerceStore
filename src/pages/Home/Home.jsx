import React from 'react'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Category from '../../components/Category/Category'
import './Home.css';
import Contact from '../../components/Contact/Contact';
const Home = () => {
  return (
    <div className='home'>
      <HeroBanner />
      <Category />
      <FeaturedProducts />
      <Contact />
      
    </div>
  )
}

export default Home
