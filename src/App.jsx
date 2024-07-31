import React from "react";

const App = () => {
  const handleCaptureClick = (event) => {
    console.log("Capture phase - App");
  };

  const handleBubbleClick = (event) => {
    console.log("Bubble phase - App");
  };

  return (
    <div
      onClickCapture={handleCaptureClick} // Capture phase
     // onClick={handleCaptureClick} // without capture
       // Bubble phase
    >
      <span onClick={handleBubbleClick} >TTTT</span>
      <button onClick={() => console.log("Button clicked")}>Click Me</button>
    </div>
  );
};

export default App;
