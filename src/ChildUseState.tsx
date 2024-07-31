import { useState } from "react";

const ChildUseState = () => {
  const [value, setValue] = useState<string>();
  // const [value, setValue] = useState<string|undefined>();
  // For number array
  // const [value, setValue] = useState<number[]>();

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default ChildUseState;
