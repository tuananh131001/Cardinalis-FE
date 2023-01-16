// https://dev.to/devmdmamun/create-contextual-modal-navigation-with-react-router-v6-28k2
import GlobalStyled from '@/styles/GlobalStyled';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/Theme';
import { FORGOT_PASSWORD_PATH } from '@/assets/Constant';
import { useContext } from 'react';
import ForgotPassword from '@/pages/ForgotPassword';
import Explore from '@/pages/Explore';
import Profile from '@/pages/Profile';
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
  UPDATE_PROFILE_PATH,
  CHANGE_PASSWORD_PATH
} from '@/assets/Constant';
import Search from '@/pages/Search';
import Follow from '@/pages/Follow';
import Tweet from '@/pages/Tweet';
import TweetCompose from '@/pages/TweetCompose';
import UpdateProfilePage from '@/pages/UpdateProfilePage';
import TokenRecevied from '@/pages/TokenRecevied';
import Nothing from '@/components/LoadingNothing/Nothing';
import ChangePassword from '@/pages/ChangePassword';

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
            <Route path="oauth2/:token" element={<TokenRecevied />} />
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
              path={`/${CHANGE_PASSWORD_PATH}`}
              element={
                <ProtectedRoutes>
                  <ChangePassword />
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
            <Route path="*" element={<Nothing text="Page Not Found" />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
