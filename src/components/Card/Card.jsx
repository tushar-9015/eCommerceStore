import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css';


const Card = ({item}) => {
  const ImgUrl = import.meta.env.VITE_REACT_APP_API_UPLOAD_URL + item.attributes.img.data.attributes.url;

  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
      <div className='card-img'>
        <img src={ImgUrl} alt=''/>
      </div>
      <h3 className='product-name'>{item?.attributes.title}</h3>
      <span className='price'>₹{item?.attributes.price}</span>  
    </div>
    </Link>
  )
}

export default Card
