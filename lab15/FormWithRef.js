import React, { useRef, useState } from 'react';

function FormWithRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submittedData, setSubmittedData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" ref={nameRef} /><br /><br />
        <input type="email" placeholder="Enter email" ref={emailRef} /><br /><br />
        <button type="submit">Submit</button>
      </form>
      {submittedData.name && (
        <>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </>
      )}
    </div>
  );
}

export default FormWithRef;
