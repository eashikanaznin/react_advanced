import React, { useState, useEffect, memo } from 'react';

function Testp({ query }) {
  const [message, setMessage] = useState('Loading...');

  // Use useEffect to handle the side effect of setting a timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(query);
    }, 10000); // 5 seconds delay

    // Clean up the timer if the component unmounts before the delay completes
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <h1>TESTTTTT</h1>
      <div>{message}</div>
    </>
  );
}

export const Slowchild = memo(Testp)
