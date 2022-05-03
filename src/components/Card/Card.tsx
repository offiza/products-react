import React, { FC } from 'react';
import CardType from '../../types/product';
import './Card.css';

interface CardProps {
  product: CardType;
  setCurrentCard: (event: any, product: CardType) => void;
}

export const Card: FC<CardProps> = ({ product, setCurrentCard }) => {
  return (
    <div className='product__container'>
      <div>
        <p className='product__category'>{product.category}</p>
        <p className='product__name'>{product.name}</p>
      </div>
      <div className='product__content'>
        <div style={{ display: 'flex' }}>
          <p className='product__dollar'>$</p>
          <p className='product__price'>{product.price}</p>
        </div>
        <button className='product__button'
          onClick={(event: any) => setCurrentCard(event, product)}>
          <p className='product__button-content'>Buy</p>
        </button>
      </div>
    </div>
  )
}