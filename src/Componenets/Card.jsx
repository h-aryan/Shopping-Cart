import React, { useState } from "react";

const PokemonCard = ({ id, image, price, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={id} style={imageStyle} />
      <h3>{id}</h3>
      <p style={priceStyle}>Price: ${price.toFixed(2)}</p>
      <div style={quantityStyle}>
        <button onClick={handleDecrease} style={buttonStyle}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrease} style={buttonStyle}>
          +
        </button>
      </div>
      <button
        onClick={() => onAddToCart(id, quantity, price)}
        style={addToCartStyle}
      >
        Add to Cart
      </button>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "10px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  width: "200px",
};

const imageStyle = {
  width: "100px",
  height: "100px",
};

const priceStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  margin: "10px 0",
  color: "#333",
};

const quantityStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  margin: "10px 0",
};

const buttonStyle = {
  padding: "5px 10px",
  borderRadius: "5px",
  cursor: "pointer",
};

const addToCartStyle = {
  padding: "10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default PokemonCard;
