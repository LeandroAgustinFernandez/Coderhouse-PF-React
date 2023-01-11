import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div className="card mb-3" style={{ width: "80%" }}>
      <div className="row g-0">
        <div className="col-md-5">
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
            </div>
            <div className="d-flex align-items-center justify-content-around flex-md-row flex-column">
              <ItemCount stock={product.stock} />
              <a href="#" className="btn btn-secondary my-2">
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
