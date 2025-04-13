import React, { useState } from 'react';

function FormWithState() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Submitted!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Form with useState</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
      <h3>Live Preview:</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default FormWithState;
