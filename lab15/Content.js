import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Content() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>This is a themed content area. Click the button to toggle theme.</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Content;
