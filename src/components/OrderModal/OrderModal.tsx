import React, { FC } from 'react';
import CardType from '../../types/product';
import './OrderModal.css';
import '../Card/Card.css';
import { useInput } from '../../hooks/useInput';

interface OrderModalProps {
  product: CardType;
  onClose: () => void;
}

export const OrderModal: FC<OrderModalProps> = ({ product, onClose }) => {
  const name = useInput('', {
    isEmpty: true,
    minLength: 2,
    stringOnly: true,
  });
  const number = useInput('', {
    isEmpty: true,
    length: 12,
    numberOnly: true
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    name.deepValidate();
    number.deepValidate();

    if (!name.isError && !number.isError) {
      console.log(`Name: ${name.value}\nNumber: ${number.value}`)
      onClose();
    }
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
            onBlur={name.onBlur}
            onFocus={name.onFocus} />
          {name.wasFocused && !name.focus && name.errorMessage && <p className='ordermodal__label'>{name.errorMessage}</p>}
          <input
            className='ordermodal__input'
            type='text'
            placeholder='number'
            value={number.value}
            onChange={number.onChange}
            onBlur={number.onBlur}
            onFocus={number.onFocus} />
          {number.wasFocused && !number.focus && number.errorMessage && <p className='ordermodal__label'>{number.errorMessage}</p>}
          <button className='ordermodal__button' type="submit"><span>Order</span></button>
        </form>
      </div>
      <div className='ordermodal__close' onClick={onClose}></div>
      <div className='ordermodal__close-btn' onClick={onClose}>&#10006;</div>
    </div>
  )
}