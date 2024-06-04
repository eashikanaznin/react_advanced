import { useState, useLayoutEffect, useEffect, useRef } from "react";

export function BoxLayoutEffect() {
  const [width, setWidth] = useState("100");

  const boxRef = useRef(null);

  // Measure width using useEffect

  useEffect(() => {
    if (boxRef.current) {
      console.log("useEffect Width:", boxRef.current.offsetWidth);
    }
  }, [width]);

  // Measure width using useLayoutEffect
  useLayoutEffect(() => {
    if (boxRef.current) {
      console.log("useLayoutEffect Width:", boxRef.current.offsetWidth);
    }
  }, [width]);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: `${width}px`,
          height: "100px",
          backgroundColor: "lightblue",
        }}
      >
        Resize me!
      </div>

      <button onClick={() => setWidth(width + 50)}>Increase Width</button>
    </div>
  );
}
