const Message = ({ setShowMessage, color, msg }) => {
  let classes = `alert alert-${color} alert-dismissible fade show text-center`;
  return (
    <div className={classes} role="alert">
      <strong>{msg}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => setShowMessage(false)}
      ></button>
    </div>
  );
};

export default Message;
