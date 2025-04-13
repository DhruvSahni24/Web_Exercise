import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  const themeStyles = {
    backgroundColor: darkMode ? '#222' : '#f2f2f2',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease',
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
