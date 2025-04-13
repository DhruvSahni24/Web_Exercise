import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const { darkMode } = useContext(ThemeContext);
  return <h1>{darkMode ? 'Dark Mode' : 'Light Mode'} Enabled</h1>;
}

export default Header;
