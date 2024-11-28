import React, { useEffect, useState } from "react";
import PokemonCard from "./Card";
import Cart from "./Cart";
import { fetchPokemon } from "./fetching";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemon(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (id, quantity, price) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { id, quantity, price }];
    });
  };

  return (
    <div>
      <div style={listStyle}>
        {pokemon.map((poke) => (
          <PokemonCard
            key={poke.id}
            id={poke.id}
            image={poke.image}
            price={poke.price}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

const listStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  padding: "20px",
};

export default PokemonList;
