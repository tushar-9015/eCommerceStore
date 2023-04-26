import React from 'react'
import Card from '../Card/Card';
import './FeaturedProducts.css'
import useFetch from '../../utilis/useFetch';


const FeaturedProducts = () => {
  const { data, loading, error } = useFetch(
    '/products?populate=*'
  )



  return (
    <div className='featured-products'>
      <h2>Featured Products</h2>
      <div className='featured-products-bottom'>
       {
       error
       ? 'Something went wrong!'
       : loading
       ? "loading"
       : data?.map((item, index) => 
       index < 4 && (
        <Card item={item} key={item.id}/>
       ))} 
      </div>
    </div>
  )
}

export default FeaturedProducts
