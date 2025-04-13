import React from 'react';
import Child from './Child';

function Parent() {
  const message = "Hello from the Parent component!";

  return (
    <div style={{ padding: '20px' }}>
      <h2>Parent Component</h2>
      <Child message={message} />
    </div>
  );
}

export default Parent;
