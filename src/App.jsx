import React, { useEffect, useLayoutEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

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
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
