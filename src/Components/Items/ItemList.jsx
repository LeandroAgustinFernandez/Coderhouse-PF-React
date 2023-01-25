import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <section className="row product-list">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </section>
  );
};

export default ItemList;
