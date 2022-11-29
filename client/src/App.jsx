import GlobalStyled from '@/styles/GlobalStyled';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import useTheme from '@/hooks/useTheme';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/Theme';
// import Text from './components/Text/Text';

function App() {
  const [theme, themeToggler] = useTheme();
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

  return (
    <div className="app">
      <ThemeProvider theme={themeMode}>
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<Home themeToggler={themeToggler} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
