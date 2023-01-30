import React from "react";

const ProductList = ({ cart,getTotalPrice }) => {
  return (
    <section className="d-flex flex-column mb-3 mb-md-0">
      <h3 className="text-center">Productos</h3>
      {cart.map((product) => (
        <div
          className="fs-5 d-flex justify-content-between gap-3 mt-4"
          key={product.id}
        >
          <span>
            {product.name} <strong>x</strong> {product.quantity} Unidades
          </span>
        </div>
      ))}
      <h4 className="text-center mt-auto">Total: ${new Intl.NumberFormat("de-DE").format(getTotalPrice())}</h4>
    </section>
  );
};

export default ProductList;
