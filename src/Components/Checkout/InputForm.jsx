const InputForm = ({ text, type, name, value, handleChange }) => {
  return (
    <div className="form-group">
      <label className="form-label fs-5" htmlFor="name">
        {text}
      </label>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        className="form-control fc-modified"
        disabled
      />
    </div>
  );
};

export default InputForm;
