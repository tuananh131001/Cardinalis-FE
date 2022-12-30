import GlobalStyled from '@/styles/GlobalStyled';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

import useTheme from '@/hooks/useTheme';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/Theme';
import ProtectedRoutes from '@/routes/ProtectedRoutes';
import { FORGOT_PASSWORD_PATH } from '@/assets/Constant';
import ForgotPassword from '@/pages/ForgotPassword';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [theme, themeToggler] = useTheme();
  const location = useLocation();
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;

  return (
    <div className="app">
      <ThemeProvider theme={themeMode}>
        <GlobalStyled />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Login theme={theme} themeToggler={themeToggler} />} />
            <Route
              path="/home"
              element={
                <ProtectedRoutes>
                  <Home theme={theme} themeToggler={themeToggler} />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/register"
              element={<Register theme={theme} themeToggler={themeToggler} />}
            />
            <Route path={`/${FORGOT_PASSWORD_PATH}`} element={<ForgotPassword />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
