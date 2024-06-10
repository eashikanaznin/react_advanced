import React, { useState, useTransition, useMemo } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();

  // Generate a large list of items for demonstration purposes
  const items = useMemo(() => Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`), []);

  // Filter the items based on the search term
  const filteredItems = useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [items, searchTerm]);

  // Handle input change and start a transition for the search term update
  const handleChange = (e) => {
    // startTransition(() => {
      setSearchTerm(e.target.value);
    // });
  };

  return (
    <div>
      <h1>Search Items</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleChange} 
        placeholder="Search for an item" 
      />
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
