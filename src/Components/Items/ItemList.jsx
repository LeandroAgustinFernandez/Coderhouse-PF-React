import Error from "../Error/Error";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <section>
      {products.length !== 0 ? (
        <article className="row product-list">
          {products.map((product) => (
            <Item product={product} key={product.id} />
          ))}
        </article>
      ) : (
        <article>
         <Error text="La categoria no existe." />
        </article>
      )}
    </section>
  );
};

export default ItemList;
