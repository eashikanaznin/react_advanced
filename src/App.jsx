import { CustomModal } from "./CustomModal";
import { useState } from "react";
import "./App.css";

function App() {

  const [isOpen, setIsOpen] = useState("");
  function closeModal() {
    setIsOpen("show");
  }

  return (
    <>
      <button
        onClick={() => {
          setIsOpen("show");
        }}
      >
        Show Custom Modal
      </button>
      <CustomModal
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen("");
        }}
      />
    </>
  );
}

export default App;
