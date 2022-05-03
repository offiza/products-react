import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductType from '../types/product';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
      .then(response => setProducts(response.data))
      .finally(() => setIsLoading(false))
  }, [])

  const getCheapestProduct = () => {
    return products?.reduce((prev, current) => prev.price < current.price ? prev : current)
  }

  return {
    products,
    isLoading,
    getCheapestProduct
  }
}