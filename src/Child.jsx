import { useState } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  
  return (
    <div>
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
    </div>
  );
}
