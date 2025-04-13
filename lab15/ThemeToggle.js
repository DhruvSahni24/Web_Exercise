import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
