import React, {useState} from 'react';
import useFetch from '../../utilis/useFetch';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import './Products.css';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const {data, loading, error } = useFetch(`categories?[filter][category][id][$eq]= ${catId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCategory(
      isChecked ? [...selectedCategory, value] : selectedCategory.filter((item) => item !== value)
    );
  };


  return (
    <div className='products'>
      <div className='products-left-side'>
      <div className='products-left-side-filter-item'>
        <h2>Product Categories</h2>
        {data?.map((item) => (
          <div className='products-left-side-filter-item-input-item' key={item.id }>
           <input type='checkbox' id={item.id} value={item.id} onChange={handleChange} />
        <label htmlFor={item.id}>{item.attributes.title}</label>
      </div>
        ))}
    </div>
        
      <div className='products-left-side-filter-item'>
        <h2>Price Filter</h2>
        <div className='products-left-side-filter-item-input-item'>
          <span>0</span>
          <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
        </div>
        </div>
        <div className='products-left-side-filter-item'>
          <h2>Sort by</h2>
          <div className='products-left-side-filter-item-input-item'>
            <input type='radio' id='asc' name='price' onChange={(e)=> setSort('asc')}/>
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='products-left-side-filter-item-input-item'>
            <input type='radio' id='desc' name='price' onChange={(e)=> setSort('desc')} />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='products-right-side'>
          <img 
          className='products-right-side-catImg'
          src='https://images.pexels.com/photos/8457630/pexels-photo-8457630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''/>
          <List catId={catId} maxPrice={maxPrice} sort={sort} selectedCategory={selectedCategory}/>
        </div>
    </div>
  )
}

export default Products
