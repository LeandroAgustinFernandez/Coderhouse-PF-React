import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconsNav from "../../Components/Navbar/IconsNav";
import ItemList from "../../Components/Items/ItemList";
import Spinner from "../../Components/Partials/Spinner";
import { getItems } from "../../assets/firebaseConnection";
import "./ItemsListContainer.css";

const ItemsListContainer = () => {
  const [products, setProducts] = useState([]);
  const [showSpinner, setShowSpinner] = useState(null);
  const { categoryName } = useParams();

  useEffect(() => {
    setShowSpinner(true);
    getItems(categoryName)
      .then((data) => setProducts(data))
      .then(() => {
        setTimeout(() => {
          setShowSpinner(false);
        }, 1500);
      });
  }, [categoryName]);

  return (
    <div className="wellcomeMessage container my-4">
      <IconsNav categoryName={categoryName} />
      {showSpinner ? <Spinner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemsListContainer;
