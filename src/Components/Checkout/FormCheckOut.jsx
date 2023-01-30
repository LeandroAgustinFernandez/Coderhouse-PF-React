import InputForm from "./InputForm";

const FormCheckOut = ({ handleChange, personalInfo }) => {
  return (
    <section>
      <h3 className="text-center">Información personal</h3>
      <form action="">
        <InputForm
          text="Nombre"
          type="text"
          name="name"
          value={personalInfo.name}
          handleChange={handleChange}
        />
        <InputForm
          text="Apellido"
          type="text"
          name="lastName"
          value={personalInfo.lastName}
          handleChange={handleChange}
        />
        <InputForm
          text="Email"
          type="email"
          name="email"
          value={personalInfo.email}
          handleChange={handleChange}
        />
        <InputForm
          text="Confirmar Email"
          type="email"
          name="emailConfirm"
          value={personalInfo.emailConfirm}
          handleChange={handleChange}
        />
        <InputForm
          text="Telefono"
          type="text"
          name="phone"
          value={personalInfo.phone}
          handleChange={handleChange}
        />
      </form>
    </section>
  );
};

export default FormCheckOut;
