import React, { FC } from 'react';
import ProductType from '../../types/product';
import './OrderModal.css';
import '../Product/Product.css';
import { useInput } from '../../hooks/useInput';

interface OrderModalProps {
  product: ProductType;
  onClose: () => void;
}

export const OrderModal: FC<OrderModalProps> = ({ product, onClose }) => {
  const name = useInput('', {
    isEmpty: true,
    minLength: 2,
    stringOnly: true,
  });
  const number = useInput(+380, {
    isEmpty: true,
    length: 12,
    numberOnly: true
  });

  const handleSubmit = (event: any) => {
    console.log(`Name: ${name}\nNumber: ${number}`)
    onClose();
  };

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
        <form onSubmit={handleSubmit}>
          <input
            className='ordermodal__input'
            type="text"
            placeholder='name'
            value={name.value}
            onChange={name.onChange}
            onBlur={name.onBlur} />
          {name.focus && name.errorMessage && <p className='ordermodal__label'>{name.errorMessage}</p>}
          <input
            className='ordermodal__input'
            type='text'
            placeholder='number'
            value={number.value}
            onChange={number.onChange}
            onBlur={number.onBlur} />
          {number.focus && number.errorMessage && <p className='ordermodal__label'>{number.errorMessage}</p>}
          <button className='ordermodal__button' type="submit" >Order</button>
        </form>
      </div>
      <div className='ordermodal__close' onClick={onClose}></div>
      <div className='ordermodal__close-btn' onClick={onClose}>&#10006;</div>
    </div>
  )
}