import React from "react";

const CartItem = ({product,removeItem}) => {
  return (
    <div className="cart-item offset-md-3 col-md-6" key={product.id}>
      <div>
        <p className="cart-item-name">{product.name}</p>
        <p>
          <strong>
            {product.quantity} x $
            {Intl.NumberFormat("de-DE").format(product.price)}
          </strong>
        </p>
      </div>
      <div className="text-center">
        <button
          onClick={removeItem}
          data-id={product.id}
          data-name={product.name}
          className="btn btn-danger cart-button"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
