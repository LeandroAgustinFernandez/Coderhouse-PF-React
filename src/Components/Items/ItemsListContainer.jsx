import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getProducts } from "../assets/products";
import "./ItemsListContainer.css";
import { useParams } from "react-router-dom";
import IconsNav from "../Navbar/IconsNav";
import Spinner from "../Partials/Spinner";

const ItemsListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const [showSpinner, setShowSpinner] = useState(null);

  const { categoryName } = useParams();
  useEffect(() => {
    setShowSpinner(true)
    if (categoryName) {
      getProducts("../products.json")
        .then((data) => {
          let products = data.filter(
            (product) => product.category === categoryName
          );
          setProducts(products);
        })
        .then(() => {
          setTimeout(() => {
            setShowSpinner(false);
          }, 1500);
        });
    } else {
      getProducts("./products.json")
        .then((data) => setProducts(data))
        .then(() => {
          setTimeout(() => {
            setShowSpinner(false);
          }, 1500);
        });
    }
  }, [categoryName]);

  return (
    <div className="wellcomeMessage container my-4">
      <section>
        <IconsNav categoryName={categoryName} />
      </section>
      <section>
        {showSpinner === true ? <Spinner /> : <ItemList products={products} />}
      </section>
    </div>
  );
};

export default ItemsListContainer;
