import React, {useState} from 'react'

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className='product'>
      <div className='product-left-side'>
        <img src='https://images.pexels.com/photos/15883360/pexels-photo-15883360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </div>
      <div className='product-right-side'>
        <h1>title</h1>
        <span className='price'>1</span>
        <p className='desc'>fsdcwncw nfwudncn</p>
        <div className='product-quantity'>
          <button>-</button>
          {quantity}
          <button>+</button>
        </div>
        <button className='add-to-cart'>
          add to cart
        </button>
      </div>
    </div>
  )
}

export default Product

