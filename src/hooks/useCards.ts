import axios from "axios";
import React, { useEffect, useState } from "react";
import CardType from "../types/product";

export const useCards = () => {
  const [products, setCards] = useState<CardType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e")
      .then((response) => setCards(response.data))
      .finally(() => setIsLoading(false));
  }, []);

  const getCheapestCard = () => {
    return products?.reduce((prev, current) =>
      prev.price < current.price ? prev : current
    );
  };

  return {
    products,
    isLoading,
    getCheapestCard,
  };
};
