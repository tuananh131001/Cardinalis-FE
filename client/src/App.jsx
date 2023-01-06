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
  PROFILE_FOLLOWING_PATH
} from '@/assets/Constant';
import ProfileSubpage from '@/components/Sections/ProfileSection/ProfileSubpage';
import TweetCompose from '@/pages/TweetCompose';
import { youUser } from '@/assets/data/UserData';
import Search from '@/pages/Search';

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
            <Route element={<Authentication />}>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path={`/${COMPOSE_PATH}`} element={<TweetCompose isModal={false} />} />
            <Route path="/search/:keyword" element={<Search />} />
            <Route element={<Profile />}>
              <Route
                path={`/:username${PROFILE_TWEET_PATH}`}
                element={<ProfileSubpage type="tweets" />}
              />
              <Route
                path={`/:username${PROFILE_REPLIES_PATH}`}
                element={<ProfileSubpage type="tweetsAndReplies" />}
              />
              <Route
                path={`/:username${PROFILE_MEDIA_PATH}`}
                element={<ProfileSubpage type="media" />}
              />
              <Route
                path={`/:username${PROFILE_FOLLOWERS_PATH}`}
                element={<ProfileSubpage type="followers" />}
              />
              <Route
                path={`/:username${PROFILE_FOLLOWING_PATH}`}
                element={<ProfileSubpage type="following" />}
              />
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
