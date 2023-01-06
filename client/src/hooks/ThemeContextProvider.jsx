import { useEffect, useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('lightTheme');
  const setMode = (mode) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeTogglers = () => {
    theme === 'lightTheme' ? setMode('darkTheme') : setMode('lightTheme');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('lightTheme');
  }, []);

  return <ThemeContext.Provider value={{ theme, themeTogglers }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;

ThemeContextProvider.propTypes = {
  children: PropTypes.node
};
