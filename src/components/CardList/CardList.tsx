import React, { FC } from "react";
import CardType from "../../types/product";
import { Card } from "../Card/Card";
import "./CardList.css";

interface CardListProps {
  products: CardType[] | null;
  isLoading: boolean;
  setCurrentCard: (event: any, product: CardType) => void;
}

export const CardList: FC<CardListProps> = ({
  products,
  isLoading,
  setCurrentCard,
}) => {
  if (isLoading) {
    return (
      <div className="productlist__loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isLoading && !products) {
    return (
      <div className="productlist__loading">
        <p>No products</p>
      </div>
    );
  }

  return (
    <div className="productlist__grid">
      {products &&
        products.map((product) => {
          return (
            <Card
              key={product.name}
              product={product}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
    </div>
  );
};
