import React, { useEffect, useRef } from "react";

function ChatBokUseEffect({ messages }) {
  const boxRef = useRef();

  useEffect(() => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={boxRef}
      style={{ height: "200px", overflow: "auto", border: "1px solid black" }}
    >
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  );
}

export default ChatBokUseEffect;
