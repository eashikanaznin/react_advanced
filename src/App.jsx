import { BoxLayoutEffect } from "./BoxLayoutEffect";
import { UseIdInputs } from "./UseIdInputs";
import { LightSwitch } from "./LightSwitch";
import { useDebugValue, useState, useRef } from "react";

function App() {
  const lightSwitchRef = useRef(null);
  const { count, increment } = useCounter(0); // Call useCounter with initial value

  return (
    <>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <BoxLayoutEffect />
      <UseIdInputs />
      <div>
        <LightSwitch ref={lightSwitchRef} />
        <button onClick={() => lightSwitchRef.current.toggleLight()}>
          Toggle Light
        </button>
      </div>
    </>
  );
}
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);

  useDebugValue(count); // Simply pass the count value

  return { count, increment };
}
export default App;
