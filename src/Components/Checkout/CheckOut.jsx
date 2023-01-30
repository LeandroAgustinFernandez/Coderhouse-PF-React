import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import FormCheckOut from "./FormCheckOut";
import ProductList from "./ProductList";
import Message from "../Partials/Message";
import Button from "../Partials/Button";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../../assets/firebaseConnection";
import { createOrder, validateUserInfo } from "../../assets/CheckOutFunctions";
import "./CheckOut.css";

const PERSONAL_INFO = {
  name: "",
  lastName: "",
  email: "",
  emailConfirm: "",
  phone: "",
};

const CheckOut = () => {
  const { cart, getTotalPrice, clear } = useContext(CartContext);
  const [personalInfo, setPersonalInfo] = useState(PERSONAL_INFO);
  const [showMessage, setShowMessage] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [messageInfo, setMessageInfo] = useState({
    color: "",
    msg: "",
  });

  const redirect = useNavigate();

  useEffect(() => {
    if (cart.length === 0) redirect("/");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleClick = () => {
    if (validateUserInfo(personalInfo)) {
      const order = createOrder(personalInfo, cart, getTotalPrice());
      addOrder(order).then((res) => {
        setMessageInfo({
          color: "success",
          msg: `Gracias por comprar en Libre Mercado. Su numero de orden es ${res.id}`,
        });
        setShowMessage(true);
        setShowInfo(false);
        setPersonalInfo(PERSONAL_INFO);
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
            <FormCheckOut
              handleChange={handleChange}
              personalInfo={personalInfo}
            />
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
