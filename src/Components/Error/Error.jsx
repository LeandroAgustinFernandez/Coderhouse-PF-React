import Button from "../Partials/Button";

const Error = ({ text }) => {
  return (
    <div className="text-center bg-white p-5">
      <h2 className="error pt-2">{text}</h2>
      <Button route="/products" text={"Volver a productos"} />
    </div>
  );
};

export default Error;
