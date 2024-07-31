import React, { useEffect, useLayoutEffect, useState } from 'react';
import ChatBokUseEffect from './ChatBokUseEffect';
import ChatBoxUseLayoutEffect from './ChatBoxUseLayoutEffect';

const App = () => {
  const [count, setCount] = useState(0);
  const longArray = Array.from({ length: 10000 }, (_, index) => index + 1);
  const [messages, setMessages] = useState(longArray);

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('cleanup useEffect');
    };
  }, [count]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    return () => {
      console.log('cleanup useLayoutEffect');
    };
  }, [count]);

  return (
    <div>
          <h1>ChatBox wuth Use effect </h1>
    <ChatBokUseEffect messages={messages}/>
    <h1>ChatBox wuthout Use effect </h1>
    <ChatBoxUseLayoutEffect messages={messages}/>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
