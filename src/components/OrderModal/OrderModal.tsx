import React, { FC } from 'react';
import ProductType from '../../types/product';
import './OrderModal.css';
import '../Product/Product.css';


interface OrderModalProps {
  product: ProductType;
  onClose: () => void;
}

export const OrderModal: FC<OrderModalProps> = ({ product, onClose }) => {
  return (
    <div
      className='ordermodal__background'>
      <div className='ordermodal__container'>
        <div className='ordermodal__info'>
          <p className='ordermodal__category'>{product.category}</p>
          <p className='ordermodal__name'>{product.name}</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p className='ordermodal__dollar'>$</p>
            <p className='ordermodal__price'>{product.price}</p>
          </div>
        </div>
        <form onSubmit={onClose}>
          <input className='ordermodal__input' type="text" placeholder='name' />
          <input className='ordermodal__input' type="text" placeholder='number' />
          <input className='ordermodal__button' type="submit" value='Order' />
        </form>
      </div>
      <div className='ordermodal__close' onClick={onClose} ></div>
    </div>
  )
}