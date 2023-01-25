import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import CartButton from "./CartButton";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";
import "./Cart.css";
import Message from "../Partials/Message";

const Cart = () => {
  const { cart, getTotalPrice, removeItemFromCart, clear } = useContext(CartContext);
  const [showMessage, setShowMessage] = useState(false);
  const [messageInfo, setMessageInfo] = useState({ color: "", msg: "" });
  const productAdded = useLocation();

  useEffect(() => {
    productAdded.state?.add &&
      showAlert("success", "El producto se agrego correctamente!");
  }, [productAdded]);

  const removeItem = (e) => {
    const { id, name } = e.target.dataset;
    if (window.confirm(`Desea eliminar ${name} del carrito?`)) {
      removeItemFromCart(id);
      showAlert("warning", "El producto se elimino del carrito.");
    }
  };

  const showAlert = (color, msg) => {
    setMessageInfo({
      color,
      msg,
    });
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
            <CartButton route="/" text={"Ir al inicio"} />
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
