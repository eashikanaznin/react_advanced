import { createPortal } from "react-dom";
import { useEffect } from "react";

export function CustomModal({ isOpen, closeModal }){

  useEffect(() => {
    function handler(e) {
      if (e.key === "Escape") {
        closeModal()
      }
    }
    document.addEventListener("keydown", handler)
    return() => {
      document.removeEventListener("keydown", handler)
    }
  }, [closeModal]);

  return createPortal(
    <div className={`modal-overlay ${isOpen}`}>
      <div className="modal">
        <p>This is a <strong>CUSTOM</strong> modal</p>
        <button onClick={()=> { closeModal()}}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-wrap")
  )
}