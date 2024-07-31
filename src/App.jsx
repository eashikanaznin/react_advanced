import React, { useState, useEffect, useDebugValue } from 'react';

// Custom hook to track online/offline status
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Use useDebugValue to display a custom label in React DevTools
  // useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}

function App() {
  const isOnline = useOnlineStatus();
  useDebugValue(isOnline ? 'Online' : 'Offline');
  return (
    <div>
      <h1>You are currently {isOnline ? 'Online' : 'Offline'}</h1>
    </div>
  );
}

export default App;
