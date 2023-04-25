import React from 'react';
import './List.css';
import Card from '../Card/Card';

const List = ({item}) => {
    
  return (
    <div className='list'>
  {data.map((item) => (
    <Card key={item.id} item={item}/>
  ))}    
    </div>
  )
}

export default List
