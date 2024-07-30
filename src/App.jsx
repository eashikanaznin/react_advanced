import { CustomModal } from "./CustomModal";
import { useState } from "react";
import { ExampleDialog } from "./ExampleDialog";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState("");
  const [isDialogModalOpen, setIsDialogModalOpen] = useState(false);
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
      <button onClick={() => setIsDialogModalOpen(true)}>
        Show Dialog Modal
      </button>
      <ExampleDialog
        isOpen={isDialogModalOpen}
        onClose={() => setIsDialogModalOpen(false)}
      >
        <p>
          This is a <strong>DIALOG</strong> modal
        </p>
        <button onClick={() => setIsDialogModalOpen(false)}>Close</button>
      </ExampleDialog>
    </>
  );
}

export default App;
