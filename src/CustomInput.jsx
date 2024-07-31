import { useId } from "react";
export default function CustomInput() {
  const id = useId();
  return (
    <>
      <label htmlFor={`${id}-email`}>Name</label>
      <input id={`${id}-email`} type="text" />
    </>
  );
}
