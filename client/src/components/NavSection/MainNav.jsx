import NavImage from './NavImage';
import NavButton from './NavButton';
import PropTypes from 'prop-types';
import { AiOutlineNumber, AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { RiSearchFill, RiSearchLine } from 'react-icons/ri';
import { IoBookmarkOutline, IoBookmark, IoPersonOutline, IoPerson } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import {
  HOME_PATH,
  EXPLORE_PATH,
  BOOKMARK_PATH,
  PROFILE_TWEET_PATH,
  SEARCH_PATH,
  TWEET_COMPOSE_PATH
} from '@/assets/Constant';
import Button from '@/components/Button/Button';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MainNavStyled } from './Nav.styled';
import { useChange } from '@/hooks/useChange';
import TweetComposeModal from '@/components/TweetComposeSection/TweetComposeContent/TweetComposeModal';

const displayCurrentTab = (tabCompare, currentTab, type) => {
  // type: "icon" or "props"
  if (type == 'icon') {
    switch (tabCompare) {
      case HOME_PATH:
        return currentTab == tabCompare ? <AiFillHome /> : <AiOutlineHome />;
      case EXPLORE_PATH:
        return currentTab == tabCompare ? (
          <AiOutlineNumber strokeWidth="35" />
        ) : (
          <AiOutlineNumber />
        );
      case BOOKMARK_PATH:
        return currentTab == tabCompare ? <IoBookmark /> : <IoBookmarkOutline />;
      case SEARCH_PATH:
        return currentTab == tabCompare ? <RiSearchFill /> : <RiSearchLine />;
      default:
        // PROFILE
        return currentTab == tabCompare ? <IoPerson /> : <IoPersonOutline />;
    }
  } else {
    return {
      fontWeight: tabCompare == currentTab ? '800' : '600',
      fontSize: tabCompare == currentTab ? 'calc(var(--font-size-sm) + 2px)' : 'var(--font-size-sm)'
    };
  }
};

const MainNav = ({ user, theme, currentTab, ...props }) => {
  const navigate = useNavigate();
  const responsiveCondition = {
    desktop: useMediaQuery('(min-width: 1134px)')
  };
  const { value: isOpenTweet, onSetTrue: openTweet, onSetFalse: closeTweet } = useChange(false);
  const findNavigateButtonProps = (tabCompare, currentTab, navigate) => {
    tabCompare = extractPath(tabCompare, mainPathRegex);
    return {
      icon: displayCurrentTab(tabCompare, currentTab, 'icon'),
      buttonThemeName: 'thirdButton',
      ...displayCurrentTab(tabCompare, currentTab, 'props'),
      onClick: () => {
        navigate(`/${tabCompare}`);
      }
    };
  };
  return (
    <MainNavStyled {...props}>
      {/* Nav Image */}
      <NavImage theme={theme} />

      {/* Navigate button */}
      <NavButton
        {...findNavigateButtonProps(HOME_PATH, currentTab, navigate)}
        text={responsiveCondition?.desktop ? 'Home' : ''}
      />
      <NavButton
        {...findNavigateButtonProps(SEARCH_PATH, currentTab, navigate)}
        text={responsiveCondition?.desktop ? 'Search' : ''}
      />
      <NavButton
        {...findNavigateButtonProps(EXPLORE_PATH, currentTab, navigate)}
        text={responsiveCondition?.desktop ? 'Explore' : ''}
      />
      <NavButton
        {...findNavigateButtonProps(BOOKMARK_PATH, currentTab, navigate)}
        text={responsiveCondition?.desktop ? 'Bookmark' : ''}
      />
      <NavButton
        {...findNavigateButtonProps(user.username + PROFILE_TWEET_PATH, currentTab, navigate)}
        text={responsiveCondition?.desktop ? 'Profile' : ''}
      />
      {/* Tweet button */}
      <Button
        buttonThemeName="primaryButton"
        className="tweet-button"
        onClick={() => {
          // navigate(`/${COMPOSE_PATH}`, { state: { background: location } });
          if (responsiveCondition?.desktop) {
            openTweet();
          } else {
            navigate(`/${TWEET_COMPOSE_PATH}`);
          }
        }}
        jc="center"
        padding="0">
        {responsiveCondition?.desktop ? 'Tweet' : '+'}
      </Button>
      <TweetComposeModal isOpen={isOpenTweet} handleCloseModal={closeTweet} />

      {/* Profile section display */}
    </MainNavStyled>
  );
};

MainNav.propTypes = {
  user: PropTypes.object,
  theme: PropTypes.string,
  openModal: PropTypes.func,
  currentTab: PropTypes.string,
  location: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default MainNav;