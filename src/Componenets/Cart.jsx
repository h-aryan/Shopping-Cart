import React from "react";

const Cart = ({ cart = [] }) => {
  const total = cart.length
    ? cart.reduce((sum, item) => sum + item.quantity * item.price, 0)
    : 0;

  return (
    <div style={cartStyle}>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} style={cartItemStyle}>
            <p>{item.id}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty!</p>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

const cartStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  margin: "20px 0",
};

const cartItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0",
};

export default Cart;
