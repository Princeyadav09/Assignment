import React from 'react';
import { Data } from './Data';

const LeftChild = ({ selectedId, handleItemClick }) => {
  return (
    <div style={{padding:"10px"}}>
      {Data.map(item => (
        <div key={item.id} onClick={() => handleItemClick(item.id)} style={{ cursor: 'pointer' }}>
          <h5>{item.Name}</h5>
        </div>
      ))}
    </div>
  );
};

export default LeftChild;
