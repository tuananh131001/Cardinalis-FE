import GlobalStyled from '@/styles/GlobalStyled';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import useTheme from '@/hooks/useTheme';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/Theme';
import { StyledHeading1 } from '@/components/Text/Text.styled';
import { FORGOT_PASSWORD_PATH } from '@/assets/Constant';
import ForgotPassword from '@/pages/ForgotPassword';
import Authentication from '@/pages/Authentication';
// import Text from './components/Text/Text';

function App() {
  const [theme, themeToggler] = useTheme();
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

  return (
    <div className="app">
      <ThemeProvider theme={themeMode}>
        <GlobalStyled />
        <Routes>
          <Route element={<Authentication theme={theme} themeToggler={themeToggler} />}>
            <Route path="/" element={<Login theme={theme} themeToggler={themeToggler} />} />
            <Route
              path="/register"
              element={<Register theme={theme} themeToggler={themeToggler} />}
            />
          </Route>
          <Route path="/home" element={<Home theme={theme} themeToggler={themeToggler} />} />
          <Route path={`/${FORGOT_PASSWORD_PATH}`} element={<ForgotPassword />} />
          <Route path="*" element={<StyledHeading1>Page Not Exist</StyledHeading1>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
