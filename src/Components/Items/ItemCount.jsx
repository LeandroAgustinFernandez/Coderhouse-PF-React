import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleButtonIncrement = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  const handleButtonDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <div className="stockQuantity">
      <button onClick={handleButtonDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleButtonIncrement}>+</button>
    </div>
  );
};

export default ItemCount;
