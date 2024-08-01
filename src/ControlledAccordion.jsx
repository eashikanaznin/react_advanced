import React, { useState } from "react";

export default function ControlledAccordion() {
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <Panel key="1" title="Panel 1" isActive={isActive} toggle={()=>setIsActive((e) => !e)} >
        Loremipsum
      </Panel>
      <Panel key="2" title="Panel 2" isActive={isActive} toggle={()=>setIsActive((e) => !e)} >
        Loremipsum
      </Panel>
    </div>
  );
}

function Panel({ title, children, isActive, toggle }) {
  // const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <h3>{title}</h3>
      {isActive && <p>{children}</p>}
      <button onClick={(toggle)}>
        {isActive ? "Hide" : "Show"}
      </button>
    </div>
  );
}
