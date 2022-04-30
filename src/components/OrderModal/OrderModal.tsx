import React, { FC } from 'react';
import ProductType from '../../types/product';
import './OrderModal.css'

interface OrderModalProps {
  product: ProductType;
  onClose: () => void;
}

export const OrderModal: FC<OrderModalProps> = ({ product, onClose }) => {
  return (
    <div
      className='ordermodal__background'
      onClick={onClose}>
      <div className='ordermodal__container'>
        <div className='ordermodal__info'>
          <p>{product.category}</p>
          <p>{product.category}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  )
}