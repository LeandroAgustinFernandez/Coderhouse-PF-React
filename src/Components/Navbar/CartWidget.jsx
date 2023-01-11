import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = ({ quantity }) => {
  return (
    <Link className="navbar-cart">
      <i className="fa fa-shopping-cart fa-2x"></i>
      <div className="cart-contador">{quantity}</div>
    </Link>
  );
};

export default CartWidget;
