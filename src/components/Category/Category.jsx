import React from 'react'
import './Category.css';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className='category'>
      <div className='categories'>
        <img src='https://images.pexels.com/photos/9775856/pexels-photo-9775856.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <button className='category-btn'>
            <Link className='link' to='/products/1'>Men</Link>
        </button>
      </div>
      <div className='categories'>
        <img src='https://images.pexels.com/photos/8217196/pexels-photo-8217196.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <button className='category-btn'>
            <Link className='link' to='/products/2'>Women</Link>
        </button>
      </div>

    </div>
  )
}

export default Category
