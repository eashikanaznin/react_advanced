import React, { useRef, forwardRef, useState, useImperativeHandle } from 'react';

function LightSwitchFunctionality(props, ref) {
  const [on, setOn] = useState(false);

  const toggleLight = () => setOn(!on);

  // Expose the toggleLight function using useImperativeHandle
  useImperativeHandle(ref, () => ({
    toggleLight,
  }));

  return (
    <div  style={{ backgroundColor: on ? 'yellow' : 'gray' }}>
      LIGHT
      {/* {on ? 'Light On' : 'Light Off'} */}
    </div>
  );
}

export const LightSwitch = forwardRef(LightSwitchFunctionality);