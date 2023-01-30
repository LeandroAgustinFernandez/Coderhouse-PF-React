import "./Spinner.css";

const Spinner = () => {
  return (
    <section>
      <h4 className="text-spinner my-5 text-center">Cargando</h4>
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </section>
  );
};

export default Spinner;
