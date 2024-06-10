import React, { useState, useDeferredValue, useMemo } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  // Simulate a slow filtering process
  const filteredItems = useMemo(() => {
    const items = ['apple', 'banana', 'orange', 'grape', 'peach', 'pear', 'plum'];
    return items.filter(item => item.toLowerCase().includes(deferredSearchTerm.toLowerCase()));
  }, [deferredSearchTerm]);

  return (
    <div>
      <h1>Search Items</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for an item" 
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;