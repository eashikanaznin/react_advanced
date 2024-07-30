import { Child } from "./Child";
import { useState } from "react";
function App() {
  const [enableDog, setEnableDog] = useState(true);
  function toggleAnimal() {
    setEnableDog((n) => !n);
  }
  return (
    <>
      {enableDog ? (
        <>
          <span>For Dog</span>
          <Child key="dog" />
        </>
      ) : (
        <>
          <span>For Cat</span>
          <Child key="cat" />
        </>
      )}
      {/*  With a common input. */}
      {enableDog ? (
        <>
          <span>For Dog</span>
        </>
      ) : (
        <>
          <span>For Cat</span>
        </>
      )}
      <input type="text" key={enableDog ? "dog" : "cat"} />
      <button onClick={toggleAnimal}>Toggle animal</button>
    </>
  );
}

export default App;
