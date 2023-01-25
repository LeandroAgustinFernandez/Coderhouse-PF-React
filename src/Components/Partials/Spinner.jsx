import "./Spinner.css";

const Spinner = () => {
  return (
    <>
      <h4 className="text-white my-5">
        Cargando{" "}
      </h4>
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
    </>
  );
};

export default Spinner;
