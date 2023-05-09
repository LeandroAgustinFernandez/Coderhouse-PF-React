import Validator from "fastest-validator";
import Message from "../../Components/Partials/Message";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../assets/firebaseConnection";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [messageInfo, setMessageInfo] = useState({ color: "", msg: "" });
  const navigate = useNavigate();

  const v = new Validator();
  const schema = {
    email: { type: "email", label: "Email" },
    password: { type: "string", min: 6, label: "Password" },
  };
  const check = v.compile(schema);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = check(formData);
    if (Array.isArray(valid)) {
      setMessageInfo({ color: "warning", msg: valid[0].message });
      setShowMessage(true);
      return;
    }
    setMessageInfo({ color: "", msg: "" });
    setShowMessage(false);
    let res = await userLogin(formData);
    if (res?.error) {
      setMessageInfo({ color: "warning", msg: `El usuario y/o contraseña no son correctos.` });
      setShowMessage(true);
      return;
    }
    navigate('/')
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="mt-2">
        {showMessage && (
          <Message
            setShowMessage={setShowMessage}
            color={messageInfo.color}
            msg={messageInfo.msg}
          />
        )}
      </div>
      <section className="login-container form_container">
        <h2 className="text-center">Sign In</h2>
        <form className="login_form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-secondary mt-2 w-100">
            Ingresar
          </button>
          <p className="text-center mt-2">
            Aun no tienes cuenta? <Link to={"/register"}>Registrarse</Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
