import React from 'react';

function Child({ message }) {
  return (
    <div style={{ border: '2px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Child Component</h3>
      <p>Message from Parent: <strong>{message}</strong></p>
    </div>
  );
}

export default Child;
