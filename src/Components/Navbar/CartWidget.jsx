import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="navbar-cart">
      <i class="fa fa-shopping-cart fa-2x"></i>
      <div class="cart-contador">0</div>
    </div>
  );
};

export default CartWidget;
