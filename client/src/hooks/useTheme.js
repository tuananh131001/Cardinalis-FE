import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('lightTheme');

  const setMode = (mode) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const ThemeTogglers = () => {
    theme === 'lightTheme' ? setMode('darkTheme') : setMode('lightTheme');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('lightTheme');
  }, []);

  return [theme, ThemeTogglers];
};

export default useTheme;
