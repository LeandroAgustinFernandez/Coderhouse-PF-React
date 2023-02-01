import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../assets/firebaseConnection";
import ItemDetail from "./ItemDetail";
import Spinner from "../Partials/Spinner";
import Error from "../Error/Error";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [showSpinner, setShowSpinner] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setShowSpinner(true);
    getItem(id)
      .then((product) => {
        setProduct(product);
      })
      .then(() => {
        setTimeout(() => {
          setShowSpinner(false);
        }, 1000);
      });
  }, [id]);

  return (
    <section className="container flex-grow-1 mt-5">
      {showSpinner ? (
        <Spinner />
      ) : (
        <article className="d-flex justify-content-center">
          {product ? (
            <ItemDetail product={product} />
          ) : (
            <Error text={`El producto con id ${id} no existe`} />
          )}
        </article>
      )}
    </section>
  );
};

export default ItemDetailContainer;
