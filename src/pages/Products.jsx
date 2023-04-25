import React from 'react'

const Products = () => {
  return (
    <div className='products'>
      <div className='products-left-side'>
      <div className='product-category'>
        <h2>Product Categories</h2>
        <input type='checkbox' id='apple' value='apple' />
        <label htmlFor='apple'>Men</label>
      </div>
      <div className='price-filter'>
        <h2>Price Filter</h2>
        <div className='price-filter-input'>
          <span>0</span>
          <input type='range' min={0} max={1000} />
          <span>1000</span>
        </div>
        </div>
        <div className='sort-by'>
          <h2>Sort by</h2>
          <div className='sort-by-input'>
            <input type='radio' id='asc' name='price' />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='sort-by-input'>
            <input type='radio' id='desc' name='price' />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default Products
