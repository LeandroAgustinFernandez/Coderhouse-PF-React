import { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ product, removeItem }) => {
  const [showDelete, setShowDelete] = useState(false);

  const toogleDeleteMessage = () => {
    setShowDelete(!showDelete);
  };

  return (
    <div className="cart-item-bb offset-lg-2 col-lg-8 col-12" key={product.id}>
      <div className="cart-item">
        <div>
          <img
            className="cart-item-image"
            src={`../img/productos/${product.image}`}
            alt={product.name}
          />
        </div>
        <div>
          <Link className="cart-item-link" to={`/product/${product.id}`}>
            <p className="cart-item-name">{product.name}</p>
          </Link>
          <p>
            <strong>
              {product.quantity} x $
              {Intl.NumberFormat("de-DE").format(product.price)}
            </strong>
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={toogleDeleteMessage}
            data-id={product.id}
            className="btn btn-secondary cart-button"
          >
            x
          </button>
        </div>
      </div>
      {showDelete && (
        <div className="text-center">
          <p>
            Desea quitar <strong>{product.name}</strong> de la lista?
          </p>
          <p>
            <span
              className="btn btn-secondary"
              onClick={removeItem}
              data-id={product.id}
            >
              Si
            </span>
            <span className="btn btn-secondary" onClick={toogleDeleteMessage}>
              No
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CartItem;
