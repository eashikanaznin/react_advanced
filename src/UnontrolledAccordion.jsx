import React, { useState } from "react";

export default function UnontrolledAccordion() {
  return (
    <div>
      <Panel key="1" title="Panel 1">
        Loremipsum
      </Panel>
      <Panel key="2" title="Panel 2">
        Loremipsum
      </Panel>
    </div>
  );
}

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <h3>{title}</h3>
      {isActive && <p>{children}</p>}
      <button onClick={() => setIsActive((e) => !e)}>
        {isActive ? "Hide" : "Show"}
      </button>
    </div>
  );
}
