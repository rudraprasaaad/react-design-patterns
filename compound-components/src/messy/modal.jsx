const Modal = ({ title, body, primaryAction, secondaryAction }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-container text-black">
        <h2 className="modal-header">{title}</h2>
        <p className="modal-body">{body}</p>
        <div className="modal-footer">
          {primaryAction}
          {secondaryAction}
        </div>
      </div>
    </div>
  );
};

export default Modal;
