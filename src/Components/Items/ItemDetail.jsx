import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "80%" }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={`../img/productos/${product.image}`}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body d-flex justify-content-between flex-column align-items-center h-100">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <strong>Precio:</strong> ${" "}
              {new Intl.NumberFormat("de-DE").format(product.price)}
            </p>
            <p className="card-text">
              <strong>Stock:</strong> {product.stock}
            </p>
            <ItemCount stock={product.stock} />
            <a href="#" className="btn btn-secondary w-100 my-2">
              Agregar al carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
