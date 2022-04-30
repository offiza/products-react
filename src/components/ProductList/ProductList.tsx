import React, { useState } from 'react';
import { Product } from '../Product/Product';
import './ProductList.css';

export const ProductList = () => {
  const [products, setProducts] = useState(['22', '34', 'dd', '22', '34', 'dd']);

  return (
    <div className='productlist__grid'>
      {products.map((product) => {
        return <Product />
      })}
    </div>
  )
}