import React from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Category from '../components/Category/Category'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Category />
      <FeaturedProducts />
      
    </div>
  )
}

export default Home
