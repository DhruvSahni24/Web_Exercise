import React, { useRef } from 'react';

export function FocusInput() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} placeholder="Click to focus" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}
