import React, { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductType from '../../types/product';
import { OrderModal } from '../OrderModal/OrderModal';
import { ProductList } from '../ProductList/ProductList';

export const ProductsPage = () => {
  const { products, isLoading } = useProducts();
  const [currentProduct, setCurrentProduct] = useState<ProductType | null>();

  const handleSetProduct = (event: any, product: ProductType) => {
    event.preventDefault();
    setCurrentProduct(product);
  }

  const handleClearProduct = () => {
    setCurrentProduct(null);
  }

  return (
    <div style={{ marginTop: '76px auto' }}>
      <ProductList products={products} isLoading={isLoading} setCurrentProduct={handleSetProduct} />
      {currentProduct &&
        <OrderModal product={currentProduct} onClose={handleClearProduct} />
      }
    </div>
  )
}