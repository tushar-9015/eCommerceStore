import React, { useState } from 'react';
import './List.css';
import Card from '../Card/Card';
import { useParams } from 'react-router-dom';

const List = () => {

    
  return (
    <div className='list'>
  {data.map((item) => (
    <Card key={item.id} item={item}/>
  ))}    
    </div>
  )
}

export default List
