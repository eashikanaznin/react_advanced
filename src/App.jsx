import "./App.css";
import { useState } from "react";
import { createPortal } from "react-dom";

function App() {
  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
      return null;
    }

    return createPortal(
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </div>,
      document.getElementById("portal-root")
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>React Portal Example</h1>
      <div id="portal-root"></div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is an example of a modal using React Portals.</p>
      </Modal>
    </div>
  );
}

export default App;
