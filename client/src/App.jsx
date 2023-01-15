// https://dev.to/devmdmamun/create-contextual-modal-navigation-with-react-router-v6-28k2
import GlobalStyled from '@/styles/GlobalStyled';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/Theme';
import { StyledHeading1 } from '@/components/Text/Text.styled';
import { FORGOT_PASSWORD_PATH } from '@/assets/Constant';
import { useContext } from 'react';
import ForgotPassword from '@/pages/ForgotPassword';
import Explore from '@/pages/Explore';
import Profile from '@/pages/Profile';
import Favourite from '@/pages/Favourite';
import { ThemeContext } from '@/hooks/ThemeContextProvider';
import ProtectedRoutes from '@/routes/ProtectedRoutes';
import { AnimatePresence } from 'framer-motion';
import {
  PROFILE_TWEET_PATH,
  PROFILE_REPLIES_PATH,
  PROFILE_MEDIA_PATH,
  PROFILE_FOLLOWERS_PATH,
  PROFILE_FOLLOWING_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  TWEET_COMPOSE_PATH,
  UPDATE_PROFILE_PATH
} from '@/assets/Constant';
import Search from '@/pages/Search';
import Follow from '@/pages/Follow';
import Tweet from '@/pages/Tweet';
import TweetCompose from '@/pages/TweetCompose';
import UpdateProfilePage from '@/pages/UpdateProfilePage';

// import Text from './components/Text/Text';

function App() {
  const { theme } = useContext(ThemeContext);
  // console.log(theme);
  const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;
  const location = useLocation();

  return (
    <div className="app">
      <ThemeProvider theme={themeMode}>
        <GlobalStyled />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Authentication */}
            <Route path={`/${LOGIN_PATH}`} element={<Login />} />
            <Route path={`/${REGISTER_PATH}`} element={<Register />} />
            <Route
              path="/home"
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/explore"
              element={
                <ProtectedRoutes>
                  <Explore />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/favourite"
              element={
                <ProtectedRoutes>
                  <Favourite />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/search/"
              element={
                <ProtectedRoutes>
                  <Search />
                </ProtectedRoutes>
              }
            />
            {/* Input */}
            <Route
              path={`/${TWEET_COMPOSE_PATH}`}
              element={
                <ProtectedRoutes>
                  <TweetCompose />
                </ProtectedRoutes>
              }
            />
            <Route
              path={`/${UPDATE_PROFILE_PATH}`}
              element={
                <ProtectedRoutes>
                  <UpdateProfilePage />
                </ProtectedRoutes>
              }
            />
            <Route
              path={`/:username${PROFILE_TWEET_PATH}`}
              element={
                <ProtectedRoutes>
                  <Profile type="tweets" />
                </ProtectedRoutes>
              }
            />
            <Route
              path={`/:username${PROFILE_REPLIES_PATH}`}
              element={
                <ProtectedRoutes>
                  <Profile type="tweetsAndReplies" />
                </ProtectedRoutes>
              }
            />
            <Route
              path={`/:username${PROFILE_MEDIA_PATH}`}
              element={
                <ProtectedRoutes>
                  <Profile type="media" />
                </ProtectedRoutes>
              }
            />
            <Route
              path={`/:username${PROFILE_FOLLOWERS_PATH}`}
              element={
                <ProtectedRoutes>
                  <Follow type="followers" />
                </ProtectedRoutes>
              }
            />
            <Route
              path={`/:username${PROFILE_FOLLOWING_PATH}`}
              element={
                <ProtectedRoutes>
                  <Follow type="following" />
                </ProtectedRoutes>
              }
            />
            <Route
              path={`/:username/status/:tweetId`}
              element={
                <ProtectedRoutes>
                  <Tweet />
                </ProtectedRoutes>
              }
            />
            <Route
              path={`/${FORGOT_PASSWORD_PATH}`}
              element={
                <ProtectedRoutes>
                  <ForgotPassword />
                </ProtectedRoutes>
              }
            />
            <Route path="*" element={<StyledHeading1>Page Not Exist</StyledHeading1>} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
