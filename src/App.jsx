import { useRef } from "react";
import { CustomRefCom } from "./CustomRefCom";
function App() {
  const myRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    alert(myRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* <CustomRefCom ref={myRef} /> */}
      <button>Submit</button>
    </form>
  );
}

export default App;
