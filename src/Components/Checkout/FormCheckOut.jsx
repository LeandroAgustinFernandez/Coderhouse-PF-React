import { auth } from "../../assets/firebaseConnection";
import InputForm from "./InputForm";

const FormCheckOut = () => {
  return (
    <section>
      <h3 className="text-center">Información personal</h3>
      <form>
        <InputForm
          text="Nombre"
          type="text"
          name="name"
          value={auth.currentUser.displayName}
        />
        <InputForm
          text="Email"
          type="email"
          name="email"
          value={auth.currentUser.email}
        />
      </form>
    </section>
  );
};

export default FormCheckOut;
