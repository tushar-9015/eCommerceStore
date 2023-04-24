import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({item}) => {
  return (
    <Link className='link' to={`/products/${item.id}`}>
    <div className='card'>
      <img className='card-img' src={import.meta.env.REACT_APP_API_UPLOAD_URL + item.attributes.img.data.attributes.url} alt=''/>
      <h3 className='product-name'>{item?.attributes.title}</h3>
      <span className='price'>₹{item?.attributes.price}</span>  
    </div>
    </Link>
  )
}

export default Card
