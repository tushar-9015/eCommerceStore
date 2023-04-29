import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart, removeItem } from '../../Redux/cartReducer'
import './Cart.css'


const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state)=>state.cart.products)

  const totalPrice = () => {
    let total = 0;
    products.forEach((item)=> (total += item.quantity*item.price));
    return total.toFixed(2);
  }

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className='cart-item' key={item.id}>
          <img src={import.meta.env.VITE_REACT_APP_API_UPLOAD_URL + item.img} alt='' />
          <div className='cart-item-details'>
             <h1>{item.title}</h1>
             <p>{item.desc?.substring(0, 100)}</p>
             <div className='cart-item-price'>{item.quantity} x ₹{item.price}</div>
          </div>
          <MdDeleteOutline className='cart-item-delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className='cart-item-total'>
        <span>SUBTOTAL</span>
        <span>₹{totalPrice()}</span>
      </div>
      <button className='cart-cheackout-btn'>PROCEED TO CHECKOUT</button>
      <span className='cart-reset'onClick={()=>dispatch(resetCart())}>
        RESET CART
      </span>
    </div>
  )
}

export default Cart
