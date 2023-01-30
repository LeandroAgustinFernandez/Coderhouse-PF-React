import Button from "../Partials/Button";

const CartFooter = ({getTotal,removeAll}) => {
  return (
    <footer className="text-center">
      <h4 className="cart-total">
        Total: ${Intl.NumberFormat("de-DE").format(getTotal())}
      </h4>
      <div className="">
        <Button route="/checkout" text={"Finalizar compra"} />
        <Button route="/products" text={"Continuar comprando"} />
        <button onClick={removeAll} className="btn btn-secondary mt-2">Vaciar Carrito</button>
      </div>
    </footer>
  );
};

export default CartFooter;
