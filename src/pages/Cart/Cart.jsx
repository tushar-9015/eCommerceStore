
import React from 'react'
import './Cart.css'
import { MdDeleteOutline } from 'react-icons/md'



const Cart = () => {
 
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className='cart-item' key={item.id}>
          <img src={import.meta.env.VITE_REACT_APP_API_UPLOAD_URL + item.img} alt='' />
          <div className='cart-item-details'>
             <h1>{item.title}</h1>
             <p>{item.desc}</p>
             <div className='cart-item-price'>{item.quantity} x ${item.price}</div>
          </div>
          <MdDeleteOutline className='cart-item-delete' />
        </div>
      ))}
      <div className='cart-item-total'>
        <span>SUBTOTAL</span>
        <span>{totalPrice()}</span>
      </div>
      <button className='cart-cheackout-btn'>PROCEED TO CHECKOUT</button>
      <span className='cart-reset'>
        RESET CART
      </span>
    </div>
  )
}

export default Cart