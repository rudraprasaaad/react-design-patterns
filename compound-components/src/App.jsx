import Modal from "./with-pattern/modal";
import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <h2>Welcome!</h2>
        </Modal.Header>
        <Modal.Body>
          <p>This is a modal built with compound component pattern.</p>
        </Modal.Body>
        <Modal.Footer>
          <button>Close</button>
          <button>Do Action</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
