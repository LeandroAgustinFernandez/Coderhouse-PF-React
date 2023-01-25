import { Link } from "react-router-dom";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { getTotalProducts } = useContext(CartContext);



  return (
    <Link to={"./cart"} className="navbar-cart">
      <i className="fa fa-shopping-cart fa-2x"></i>
      <div className="cart-contador">{getTotalProducts()}</div>
    </Link>
  );
};

export default CartWidget;
