import React, { FC } from 'react';
import ProductType from '../../types/product';
import './Product.css';

interface ProductProps {
  product: ProductType;
  setCurrentProduct: (event: any, product: ProductType) => void;
}

export const Product: FC<ProductProps> = ({ product, setCurrentProduct }) => {
  return (
    <div className='product__container'>
      <div>
        <p className='product__categories'>{product.category}</p>
        <p className='product__name'>{product.name}</p>
      </div>
      <div className='product__content'>
        <div style={{ display: 'flex' }}>
          <p className='product__dollar'>$</p>
          <p className='product__price'>{product.price}</p>
        </div>
        <button className='product__button'
          onClick={(event: any) => setCurrentProduct(event, product)}>
          <p className='product__button-content'>Buy</p>
        </button>
      </div>
    </div>
  )
}