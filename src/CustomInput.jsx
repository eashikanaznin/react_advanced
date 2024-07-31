import { forwardRef, useImperativeHandle, useRef } from "react";

function Innercom(props, ref) {
  const inp1 = useRef();
  const inp2 = useRef();
  useImperativeHandle(ref, () => {
    //  return { pinkVar: () => alert("hello!") };
    return { input1: inp1.current, input2: inp2.current }
  });
  return (
    <>
      <input {...props} ref={inp1} />
      <input {...props} ref={inp2} />
    </>
  );
}

export const CustomInput = forwardRef(Innercom);
