import "./ItemCount.css";

const ItemCount = ({ stock, quantity, setQuantity, quantityInCart }) => {
  const handleButtonIncrement = () => {
    quantity < (stock - quantityInCart) && setQuantity(quantity + 1);
  };

  const handleButtonDecrement = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <div className="stockQuantity">
      {quantity > 1 && <button onClick={handleButtonDecrement}>-</button>}
      <span>{quantity}</span>
      {stock - quantityInCart > quantity && <button onClick={handleButtonIncrement}>+</button>}
    </div>
  );
};

export default ItemCount;
