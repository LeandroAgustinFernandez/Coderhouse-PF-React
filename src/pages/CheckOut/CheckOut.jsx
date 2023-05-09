import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/contexts";
import FormCheckOut from "../../Components/Checkout/FormCheckOut";
import ProductList from "../../Components/Checkout/ProductList";
import Message from "../../Components/Partials/Message";
import Button from "../../Components/Partials/Button";
import { Link, useNavigate } from "react-router-dom";
import { addOrder, auth, updateItem } from "../../assets/firebaseConnection";
import { createOrder, validateUserInfo } from "../../assets/CheckOutFunctions";
import "./CheckOut.css";

const CheckOut = () => {
  const { cart, getTotalPrice, clear } = useContext(CartContext);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [messageInfo, setMessageInfo] = useState({
    color: "",
    msg: "",
  });

  const redirect = useNavigate();

  useEffect(() => {
    if (cart.length === 0) redirect("/");
  }, []);

  useEffect(() => {
    if (auth.currentUser) {
      setShowForm(true);
      setPersonalInfo((prev) => ({
        ...prev,
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
      }));
    }
    console.log(personalInfo);
  }, []);

  const updateStock = () => {
    cart.forEach((item) => updateItem(item));
  };

  const handleClick = () => {
    
    
    if (validateUserInfo(personalInfo)) {
      const order = createOrder({...personalInfo,phone:''}, cart, getTotalPrice());
      addOrder(order).then((res) => {
        setMessageInfo({
          color: "success",
          msg: `Gracias por comprar en Libre Mercado. Su numero de orden es ${res.id}`,
        });
        setShowMessage(true);
        setShowInfo(false);
        setPersonalInfo({
          name: "",
          email: "",
        });
        updateStock();
        clear();
      });
    } else {
      setMessageInfo({
        color: "warning",
        msg: "Uno o mas campos del formulario no cumplen con los requisitos.",
      });
      setShowMessage(true);
    }
  };

  return (
    <section className="checkout container my-5 p-5  animate__animated animate__fadeIn animate__delay-1s">
      <h2 className="text-center">Detalle de la orden</h2>
      {showMessage && (
        <Message
          setShowMessage={setShowMessage}
          color={messageInfo.color}
          msg={messageInfo.msg}
        />
      )}
      {showInfo ? (
        <>
          <article className="d-flex flex-column flex-md-row justify-content-around py-5">
            <ProductList cart={cart} getTotalPrice={getTotalPrice} />
            {showForm ? (
              <FormCheckOut />
            ) : (
              <p className="text-center">
                Por favor <Link to={"/login"}>inicia sesión</Link> para
                continuar.
              </p>
            )}
          </article>
          <article className="text-center">
            <button onClick={handleClick} className="btn btn-secondary mx-auto">
              Finalizar compra
            </button>
          </article>
        </>
      ) : (
        <article className="text-center">
          <Button route="/" text="Regresar al inicio" />
        </article>
      )}
    </section>
  );
};

export default CheckOut;
