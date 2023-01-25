import ItemCount from "./ItemCount";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import CartButton from "../Cart/CartButton";

const ItemDetail = ({ product }) => {
  const { cart, addItemToCart, quantity, setQuantity, checkIfItemExistInCart } =
    useContext(CartContext);
  const [quantityInCart, setQuantityInCart] = useState(0);
  const cartPage = useNavigate();

  useEffect(() => {
    setQuantity(1);
    getQuantityIfExist();
  }, [product]);

  const addItem = () => {
    addItemToCart(product, quantity);
    setQuantity(1);
    cartPage("/cart", { state: { add: true } });
  };

  const getQuantityIfExist = () => {
    if (checkIfItemExistInCart(product)) {
      let item = cart.find((item) => item.id === product.id);
      setQuantityInCart(item.quantity);
    }
  };

  return (
    <div className="card mb-3" style={{ width: "80%" }}>
      <div className="row g-0">
        <div className="col-md-5 p-3">
          <img
            src={`../img/productos/${product.image}`}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body d-flex justify-content-between flex-column h-100">
            <div className="text-center">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <strong>Precio:</strong> ${" "}
                {new Intl.NumberFormat("de-DE").format(product.price)}
              </p>
              <p className="card-text">
                <strong>Stock:</strong> {product.stock}
              </p>

              {quantityInCart > 0 && (
                <p className="card-text">
                  <strong>En el carrito:</strong> {quantityInCart}
                </p>
              )}
            </div>
            <div className="d-flex align-items-center justify-content-around flex-md-row flex-column">
              {product.stock - quantityInCart <= 0 ? (
                <CartButton route={"/cart"} text="Ir al carrito" />
              ) : (
                <>
                  <ItemCount
                    stock={product.stock}
                    quantityInCart={quantityInCart}
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                  <button onClick={addItem} className="btn btn-secondary my-2">
                    Agregar al carrito
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
