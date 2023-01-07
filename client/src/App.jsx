// https://dev.to/devmdmamun/create-contextual-modal-navigation-with-react-router-v6-28k2
import GlobalStyled from '@/styles/GlobalStyled';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '@/pages/Home';
import Follow from '@/pages/Follow';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/Theme';
import { StyledHeading1 } from '@/components/Text/Text.styled';
import { FORGOT_PASSWORD_PATH } from '@/assets/Constant';
import { useContext } from 'react';
import ForgotPassword from '@/pages/ForgotPassword';
import Authentication from '@/pages/Authentication';
import Explore from '@/pages/Explore';
import Profile from '@/pages/Profile';
import Bookmarks from '@/pages/Bookmarks';
import { ThemeContext } from '@/hooks/ThemeContextProvider';
import ProtectedRoutes from '@/routes/ProtectedRoutes';
import { AnimatePresence } from 'framer-motion';
import {
  COMPOSE_PATH,
  PROFILE_TWEET_PATH,
  PROFILE_REPLIES_PATH,
  PROFILE_MEDIA_PATH,
  PROFILE_FOLLOWERS_PATH,
  PROFILE_FOLLOWING_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  TWEET_COMPOSE_PATH
} from '@/assets/Constant';
import TweetCompose from '@/pages/TweetCompose';
import Search from '@/pages/Search';
import Tweet from '@/pages/Tweet';

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
            {/* <Route element={<Authentication />}>
              <Route path="/" element={<Authentication />} />
              <Route path="/register" element={<Authentication />} />
            </Route> */}
            <Route path={`/${LOGIN_PATH}`} element={<Login />} />
            <Route path={`/${REGISTER_PATH}`} element={<Register />} />
            {/* Home */}
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path={`/${COMPOSE_PATH}`} element={<TweetCompose isModal={false} />} />
            {/* Search */}
            <Route path="/search/:keyword" element={<Search />} />
            {/* Input */}
            <Route path={`/${TWEET_COMPOSE_PATH}`} element={<TweetCompose />} />
            {/* Profile */}
            <Route path={`/:username${PROFILE_TWEET_PATH}`} element={<Profile type="tweets" />} />
            <Route
              path={`/:username${PROFILE_REPLIES_PATH}`}
              element={<Profile type="tweetsAndReplies" />}
            />
            <Route path={`/:username${PROFILE_MEDIA_PATH}`} element={<Profile type="media" />} />
            <Route
              path={`/:username${PROFILE_FOLLOWERS_PATH}`}
              element={<Follow type="followers" />}
            />
            <Route
              path={`/:username${PROFILE_FOLLOWING_PATH}`}
              element={<Follow type="following" />}
            />
            <Route path={`/:username/status/:tweetId`} element={<Tweet />} />
            {/* </Route> */}
            <Route path={`/${FORGOT_PASSWORD_PATH}`} element={<ForgotPassword />} />
            <Route path="*" element={<StyledHeading1>Page Not Exist</StyledHeading1>} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
