import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../utilis/useFetch';
import './Product.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartReducer';

const Product = () => {
  const id = useParams().id
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()

  const {data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  )
  return (
    <div className='product'>
      {loading ? "loading " : (
        <> 
      <div className='product-left-side'>
        <img src={import.meta.env.VITE_REACT_APP_API_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} />
      </div>
      <div className='product-right-side'>
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>₹{data?.attributes?.price}</span>
        <p className='desc'>{data?.attributes?.desc}</p>
        <div className='product-quantity'>
          <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={()=> setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='product-quantity-add' onClick={() => 
        dispatch(
          addToCart({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            price: data.attributes.price,
            img: data.attributes.img.data.attributes.url,
            quantity,
          }))}>
          add to cart
        </button>
      </div>
      </>
      )}
    </div>
  )
}

export default Product

