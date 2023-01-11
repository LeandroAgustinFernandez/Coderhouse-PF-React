import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getProducts } from "../assets/products";
import "./ItemsListContainer.css";
import { useParams } from "react-router-dom";

const ItemsListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();
  useEffect(() => {
    if (categoryName) {
      getProducts("../products.json").then((data) => {
        let products = data.filter(
          (product) => product.category === categoryName
        );
        setProducts(products);
      });
    } else {
      getProducts("./products.json").then((data) => setProducts(data));
    }
  }, [categoryName]);

  return (
    <div className="wellcomeMessage container">
      { (categoryName) ? <p>Categoría: {categoryName[0].toUpperCase()+categoryName.substring(1)}</p> : <p>{greetings}</p>  }
      <ItemList products={products} />
    </div>
  );
};

export default ItemsListContainer;
