import NavImage from './NavImage';
import NavButton from './NavButton';
import PropTypes from 'prop-types';
import {
  AiOutlineNumber,
  AiOutlineHome,
  AiFillHome,
  AiOutlineHeart,
  AiFillHeart
} from 'react-icons/ai';
import { RiSearchFill, RiSearchLine } from 'react-icons/ri';
import { IoPersonOutline, IoPerson } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import {
  HOME_PATH,
  EXPLORE_PATH,
  FAVOURITE_PATH,
  PROFILE_TWEET_PATH,
  SEARCH_PATH,
  TWEET_COMPOSE_PATH,
  MOBILE_QUERY
} from '@/assets/Constant';
import Button from '@/components/Button/Button';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MainNavContentStyled } from './MainNavContent.styled';
import { useChange } from '@/hooks/useChange';
import TweetComposeModal from '@/components/TweetComposeSection/TweetComposeContent/TweetComposeModal';
import UserCardSection from '@/components/UserCard/UserCardSection';
import LogoutButton from '@/components/Button/LogoutButton';

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
      case FAVOURITE_PATH:
        return currentTab == tabCompare ? <AiFillHeart /> : <AiOutlineHeart />;
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

const MainNavContent = ({ user, currentTab, ...props }) => {
  const navigate = useNavigate();
  const responsiveCondition = {
    desktop: useMediaQuery('(min-width: 1134px)'),
    mobile: useMediaQuery(MOBILE_QUERY)
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
    <MainNavContentStyled {...props}>
      {/* Nav Image */}
      <NavImage />

      {/* Navigate button */}
      <NavButton
        {...findNavigateButtonProps(HOME_PATH, currentTab, navigate)}
        text={responsiveCondition?.desktop ? 'Home' : ''}
      />
      {!responsiveCondition?.desktop && (
        <NavButton
          {...findNavigateButtonProps(SEARCH_PATH, currentTab, navigate)}
          text={responsiveCondition?.desktop ? 'Search' : ''}
        />
      )}
      <NavButton
        {...findNavigateButtonProps(EXPLORE_PATH, currentTab, navigate)}
        text={responsiveCondition?.desktop ? 'Explore' : ''}
      />
      <NavButton
        {...findNavigateButtonProps(FAVOURITE_PATH, currentTab, navigate)}
        text={responsiveCondition?.desktop ? 'Favourite' : ''}
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
      <UserCardSection
        user={user}
        button={<LogoutButton />}
        isDisplayButtonOnly={!responsiveCondition?.desktop}
      />
    </MainNavContentStyled>
  );
};

MainNavContent.propTypes = {
  user: PropTypes.object,
  theme: PropTypes.string,
  openModal: PropTypes.func,
  currentTab: PropTypes.string,
  location: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default MainNavContent;
