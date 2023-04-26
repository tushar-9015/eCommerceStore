import React, { useState } from 'react';
import './List.css';
import Card from '../Card/Card';
import useFetch from '../../utilis/useFetch';

const List = ({selectedCategory, sort, catId, maxPrice}) => {

  const {data, loading, error} = useFetch(
    `/products?populate=*&[filter][categories][id] = ${catId}${selectedCategory.map(
      (item) => `&[filters][categories][id][$eq]=${item}`)}`
  )

    
  return (
    <div className='list'>
  {loading ?
  'loading' 
  : data.map((item) => (
    <Card key={item.id} item={item}/>
  ))}    
    </div>
  )
}

export default List
