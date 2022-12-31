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
import Explore from '@/pages/Explore';
import Profile from '@/pages/Profile';
import Bookmarks from '@/pages/Bookmarks';
import Main from '@/pages/Main';
import ProtectedRoutes from '@/routes/ProtectedRoutes';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom/dist/index';
import {
  PROFILE_TWEET_PATH,
  PROFILE_REPLIES_PATH,
  PROFILE_MEDIA_PATH,
  PROFILE_LIKE_PATH
} from '@/assets/Constant';
import ProfileTweet from '@/components/Sections/ProfileSection/SubPage/ProfileTweet';

// import Text from './components/Text/Text';

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
            {/* Authentication */}
            <Route element={<Authentication theme={theme} themeToggler={themeToggler} />}>
              <Route path="/" element={<Login theme={theme} themeToggler={themeToggler} />} />
              <Route
                path="/register"
                element={<Register theme={theme} themeToggler={themeToggler} />}
              />
            </Route>
            {/* Main */}
            <Route element={<Main theme={theme} themeToggler={themeToggler} />}>
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route element={<Profile />}>
                <Route path={`/:username/${PROFILE_TWEET_PATH}`} element={<ProfileTweet />} />
                <Route
                  path={`/:username/${PROFILE_REPLIES_PATH}`}
                  element={<h1>with_replies</h1>}
                />
                <Route path={`/:username/${PROFILE_MEDIA_PATH}`} element={<h1>with_replies</h1>} />
                <Route path={`/:username/${PROFILE_LIKE_PATH}`} element={<h1>with_replies</h1>} />
              </Route>
            </Route>
            <Route path={`/${FORGOT_PASSWORD_PATH}`} element={<ForgotPassword />} />
            <Route path="*" element={<StyledHeading1>Page Not Exist</StyledHeading1>} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
