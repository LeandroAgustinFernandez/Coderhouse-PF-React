import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../assets/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProducts("../products.json").then((data) => {
      let itemList = data.filter((item) => item.id === parseInt(id));
      setProduct(itemList[0]);
    });
  }, [id]);

  return (
    <section className="container vh-100 mt-5">
      <article className="d-flex justify-content-center">
        <ItemDetail product={product} />
      </article>
    </section>
  );
};

export default ItemDetailContainer;
