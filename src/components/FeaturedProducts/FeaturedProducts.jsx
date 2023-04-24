import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import axios from 'axios';
import './FeaturedProducts.css'


const FeaturedProducts = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async ()  => {
      try {
        const res = await axios.get('http://localhost:1337/api/products?populate=*', {
  headers: {
    Authorization:
      "Bearer c078912935f1a2270431a59ef05bdad132697b270e4cef499cb61610428e7699f821d06f337568283c7647745fb65edb12f6e9f221950a0ad473d62379f1001513a66c38fc4d96e4cd5e6c98fa49141590eea0c7929d317458f59903d58a5f7e68427c7db7a47e1e4896020bae50d86c7e93ed423b237e1e309af23c288e4d41",
  },
});
setData(res.data.data);
        
      } catch (error) {
        console.log('error');
      }
    } 
    fetchData();
  },[])

  return (
    <div className='featured-products'>
      <h2>Featured Products</h2>
      <div className='featured-products-bottom'>
       {data.map((item, index) => 
       index < 4 && (
        <Card item={item} key={item.id}/>
       ))} 
      </div>
    </div>
  )
}

export default FeaturedProducts
