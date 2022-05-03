import React, { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductType from '../../types/product';
import { OrderModal } from '../OrderModal/OrderModal';
import { ProductList } from '../ProductList/ProductList';
import './ProductPage.css';

export const ProductsPage = () => {
  const { products, isLoading, getCheapestProduct } = useProducts();
  const [currentProduct, setCurrentProduct] = useState<ProductType | null>();

  const handleSetProduct = (event: any, product: ProductType) => {
    event.preventDefault();
    setCurrentProduct(product);
  }

  const handleClearProduct = () => {
    setCurrentProduct(null);
  }

  const handleGetCheapest = (event: any) => {
    const cheapestProduct = getCheapestProduct();
    cheapestProduct && handleSetProduct(event, cheapestProduct);
  }

  return (
    <div style={{ marginTop: '76px auto' }}>
      <ProductList products={products} isLoading={isLoading} setCurrentProduct={handleSetProduct} />
      {currentProduct &&
        <OrderModal product={currentProduct} onClose={handleClearProduct} />
      }
      <div className='productpage__button' onClick={(event: any) => handleGetCheapest(event)}>Buy Cheapest</div>
    </div>
  )
}