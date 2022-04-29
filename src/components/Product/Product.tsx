import React from 'react';
import './Product.css';

export const Product = () => {
  return (
    <div className='product__container'>
      <div>
        <p className='product__categories'>fruit</p>
        <p className='product__name'>Grapes</p>
      </div>
      <div className='product__content'>
        <div style={{ display: 'flex' }}>
          <p className='product__dollar'>$</p>
          <p className='product__price'>7.62</p>
        </div>
        <button className='product__button' >
          <p className='product__button-content'>Buy</p>
        </button>
      </div>
    </div>
  )
}