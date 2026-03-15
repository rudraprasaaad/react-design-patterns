const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop text-black">
      <div className="modal-container">
        {children}
        <button className="modal-close text-black" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const ModalHeader = ({ children }) => {
  return <div>{children}</div>;
};

const ModalBody = ({ children }) => {
  return <div>{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
