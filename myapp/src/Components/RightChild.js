import React from 'react';
import { Data } from './Data';

const RightChild = ({ selectedId }) => {
  const selectedItem = Data.find(item => item.id === selectedId);

  return (
    <div >
      <h3>Selected Item:</h3>
      <div className="card" >
        <div className="card-body">
          <h4 className="card-title">{selectedItem.Name}</h4>
          <h4 className="card-text">ID: {selectedItem.id}</h4>
          <h4 className="card-text">Price: ${selectedItem.Price}</h4>
        </div>
      </div>
    </div>
  );
};

export default RightChild;
