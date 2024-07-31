import { useRef } from "react";

const ChildUseRef = () => {
  // must always be null or ref object
  const inputRef = useRef<HTMLInputElement>(null);
  const value = useRef<number>();

  inputRef.current?.focus();

  value.current = 10;
  return <input ref={inputRef} />;
};

export default ChildUseRef;
