import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { Product } from '../Product/Product';
import './ProductList.css';

export const ProductList = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className='productlist__loading'>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className='productlist__grid'>
      {products && products.map((product) => {
        return <Product key={product.name} product={product} />
      })}
    </div>
  )
}