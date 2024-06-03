import { forwardRef } from "react";

function Innercom(props, ref) {
  return <input {...props} ref={ref} />;
}

export const CustomInput = forwardRef(Innercom);
