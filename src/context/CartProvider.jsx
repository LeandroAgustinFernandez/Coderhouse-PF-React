import { useState } from "react";
import { CartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const checkIfItemExistInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const getTotalProducts = () => {
    return cart.reduce((prev, act) => {
      return prev + act.quantity;
    }, 0);
  };

  const addItemToCart = (product, quantity) => {
    if (!checkIfItemExistInCart(product)) {
      setCart((cart) => [...cart, { ...product, quantity: quantity }]);
    } else {
      let copyCart = cart;
      copyCart.forEach((item) => {
        if (item.id === product.id) item.quantity += quantity;
      });
      setCart([...copyCart]);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((prev, act) => {
      return (prev += act.price * act.quantity);
    }, 0);
  };

  const removeItemFromCart = (id) => {
    let copyCart = [];
    cart.forEach((item) => {
      if (item.id !== id) return copyCart.push(item);
    });
    setCart([...copyCart]);
  };

  const clear = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        checkIfItemExistInCart,
        getTotalProducts,
        addItemToCart,
        quantity,
        setQuantity,
        getTotalPrice,
        removeItemFromCart,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
