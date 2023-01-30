import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <article className="col-lg-3 col-md-4 col-sm-12 col-12 mb-3 animate__animated animate__fadeIn">
      <div className="card h-100">
        <div className="header">
          <img
            src={`../img/productos/${product.image}`}
            className="card-img-top w-100"
            alt={product.name}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{product.name}</h5>
          <Link
            to={`/product/${product.id}`}
            className="btn btn-secondary w-100 my-2"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Item;
