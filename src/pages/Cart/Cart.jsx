import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context/contexts";
import CartFooter from "../../Components/Cart/CartFooter";
import CartItem from "../../Components/Cart/CartItem";
import Message from "../../Components/Partials/Message";
import Button from "../../Components/Partials/Button";
import "./Cart.css";

const Cart = () => {
  const { cart, getTotalPrice, removeItemFromCart, clear } =
    useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);
  const [messageInfo, setMessageInfo] = useState({ color: "", msg: "" });
  const productAdded = useLocation();

  useEffect(() => {
    productAdded.state?.add &&
      showAlert("success", "El producto se agrego correctamente!");
  }, [productAdded]);

  const removeItem = (e) => {
    const { id } = e.target.dataset;
    removeItemFromCart(id);
    showAlert("warning", "El producto se elimino del carrito.");
  };

  const showAlert = (color, msg) => {
    setMessageInfo({ color, msg });
    setShowMessage(true);
  };

  return (
    <section className="cart animate__animated animate__fadeIn animate__delay-1s">
      <div className="cart-container">
        {showMessage && (
          <Message
            setShowMessage={setShowMessage}
            color={messageInfo.color}
            msg={messageInfo.msg}
          />
        )}
        {cart.length === 0 ? (
          <article className="text-center">
            <h3 className="cart-title">No hay productos en el carrito.</h3>
            <Button route="/products" text={"Ir a productos"} />
          </article>
        ) : (
          <article>
            <h3 className="cart-title">Lista de productos</h3>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                removeItem={removeItem}
              />
            ))}
            <CartFooter getTotal={getTotalPrice} removeAll={clear} />
          </article>
        )}
      </div>
    </section>
  );
};

export default Cart;
