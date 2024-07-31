import { forwardRef } from "react";
function CustomInput(ref) {
  return <input ref={ref} />;
}
export const CustomRefCom = forwardRef(CustomInput);

