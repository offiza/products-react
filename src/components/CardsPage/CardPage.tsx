import React, { useState } from "react";
import { useCards } from "../../hooks/useCards";
import CardType from "../../types/product";
import { OrderModal } from "../OrderModal/OrderModal";
import { CardList } from "../CardList/CardList";
import "./CardPage.css";

export const CardsPage = () => {
  const { products, isLoading, getCheapestCard } = useCards();
  const [currentCard, setCurrentCard] = useState<CardType | null>();

  const handleSetCard = (event: any, product: CardType) => {
    event.preventDefault();
    setCurrentCard(product);
  };

  const handleClearCard = () => {
    setCurrentCard(null);
  };

  const handleGetCheapest = (event: any) => {
    const cheapestCard = getCheapestCard();
    cheapestCard && handleSetCard(event, cheapestCard);
  };

  return (
    <div style={{ marginTop: "76px auto" }}>
      <CardList
        products={products}
        isLoading={isLoading}
        setCurrentCard={handleSetCard}
      />
      {currentCard && (
        <OrderModal product={currentCard} onClose={handleClearCard} />
      )}
      {!isLoading && (
        <div
          className="productpage__button"
          onClick={(event: any) => handleGetCheapest(event)}
        >
          Buy Cheapest
        </div>
      )}
    </div>
  );
};
