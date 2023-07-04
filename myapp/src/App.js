import React, { useState } from 'react';
import LeftChild from './Components/LeftChild';
import RightChild from './Components/RightChild';

const App = () => {
  const [selectedId, setSelectedId] = useState(3); // Default selected ID is 3

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div style={{padding:"5px"}}>
      <h2>App Component</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <LeftChild selectedId={selectedId} handleItemClick={handleItemClick} />
        </div>
        <div style={{ flex: 1 }}>
          <RightChild selectedId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default App;
