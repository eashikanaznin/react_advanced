import React, { useLayoutEffect, useRef } from 'react';

function ChatBoxUseLayoutEffect({ messages }) {
  const boxRef = useRef();

  useLayoutEffect(() => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages]);

  return (
    <>
    <div ref={boxRef} style={{ height: '200px', overflow: 'auto', border: '1px solid black' }}>
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  
    </>
  );
}

export default ChatBoxUseLayoutEffect;
