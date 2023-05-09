import Validator from "fastest-validator";
import { useState } from "react";
import { userRegister } from "../../assets/firebaseConnection";
import { useNavigate } from "react-router-dom";
import Message from "../Partials/Message";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [messageInfo, setMessageInfo] = useState({ color: "", msg: "" });
  const navigate = useNavigate();

  const v = new Validator();
  const schema = {
    name: { type: "string", min: 3, max: 50, label: "Name" },
    email: { type: "email", label: "Email" },
    password: { type: "string", min: 6, label: "Password" },
    confirm_password: {
      type: "equal",
      field: "password",
      label: "Confirm Password",
    },
  };
  const check = v.compile(schema);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = check(formData);
    console.log(valid);
    if (Array.isArray(valid)) {
      setMessageInfo({ color: "warning", msg: valid[0].message });
      setShowMessage(true);
      return;
    }
    setMessageInfo({ color: "", msg: "" });
    setShowMessage(false);
    let res = await userRegister(formData);
    if(res?.error) {
        setMessageInfo({ color: "warning", msg: res.error.message });
        setShowMessage(true);
        return
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
        <h2 className="text-center">Sign Up</h2>
        <form className="login_form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-secondary mt-2 w-100">
            Ingresar
          </button>
        </form>
      </section>
    </>
  );
};

export default RegisterForm;
