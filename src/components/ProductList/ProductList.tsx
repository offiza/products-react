import React, { FC } from 'react';
import ProductType from '../../types/product';
import { Product } from '../Product/Product';
import './ProductList.css';

interface ProductListProps {
  products: ProductType[] | null;
  isLoading: boolean;
  setCurrentProduct: (event: any, product: ProductType) => void
}

export const ProductList: FC<ProductListProps> = ({ products, isLoading, setCurrentProduct }) => {

  if (isLoading) {
    return (
      <div className='productlist__loading'>
        <p>Loading...</p>
      </div>
    )
  }

  if (!isLoading && !products) {
    return (
      <div className='productlist__loading'>
        <p>No products</p>
      </div>
    )
  }

  return (
    <div className='productlist__grid'>
      {products && products.map((product) => {
        return <Product key={product.name} product={product} setCurrentProduct={setCurrentProduct}/>
      })}
    </div>
  )
}