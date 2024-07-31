import { useRef } from "react";
import { CustomInput } from "./CustomInput";

function App() {
  // const inputRef = useRef()
  const inputRef = useRef();

  return (
    <>
      <CustomInput ref={inputRef} placeholder="Enter data" />
      <button type="submit" onClick={()=>inputRef.current.input2.focus()}>submit</button>
    </>
  );
}

export default App;
