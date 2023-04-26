import React, {useState} from 'react'
import useFetch from '../utilis/useFetch'
import { useParams } from 'react-router-dom'

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const {data, loading, error } = useFetch(`categories?[filter][categories][id][$eq]= ${catId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCategory(
      isChecked ? [...selectedCategory, value] : selectedCategory.filter((item) => item !== value)
    );
  };

  console.log(selectedCategory);

  return (
    <div className='products'>
      <div className='products-left-side'>
      <div className='product-category'>
        <h2>Product Categories</h2>
        {data?.map((item) => (
          <div className='input-item' key={item.id}>
           <input type='checkbox' id={item.id} value={item.id} onChange={handleChange} />
        <label htmlFor={item.id}>{item.attributes.title}</label>
      </div>
        ))}
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
