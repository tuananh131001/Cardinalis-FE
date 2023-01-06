import { FlexContainer } from '@/components/Container/Container.styled';
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
  COMPOSE_PATH
} from '@/assets/Constant';
import Button from '@/components/Button/Button';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import useMediaQuery from '@/hooks/useMediaQuery';

const horizontalSpace = '1.7em';
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

const MainNav = ({ user, theme, currentTab, location, ...props }) => {
  const navigate = useNavigate();
  const responsiveCondition = {
    desktop: useMediaQuery('(min-width: 1134px)'),
    mobile: useMediaQuery('(min-width:480px)')
  };
  const findNavigateButtonProps = (tabCompare, currentTab, navigate) => {
    tabCompare = extractPath(tabCompare, mainPathRegex);
    return {
      horizontalPadding: responsiveCondition?.mobile ? horizontalSpace : '0.6em',
      icon: displayCurrentTab(tabCompare, currentTab, 'icon'),
      buttonThemeName: 'thirdButton',
      ...displayCurrentTab(tabCompare, currentTab, 'props'),
      onClick: () => {
        navigate(`/${tabCompare}`);
      }
    };
  };
  return (
    <FlexContainer
      fd="column"
      ai="flex-start"
      jc="flex-start"
      gap="1.5em"
      width="100%"
      position="sticky"
      top="0"
      {...props}>
      {/* Nav Image */}
      <NavImage
        theme={theme}
        horizontalMargin={responsiveCondition?.mobile ? horizontalSpace : '0.2em'}
      />

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
        onClick={() => {
          navigate(`/${COMPOSE_PATH}`, { state: { background: location } });
        }}
        width={responsiveCondition?.desktop ? '100%' : '50px'}
        height={responsiveCondition?.desktop ? '50px' : '50px'}
        jc="center"
        padding="0"
        ml={!responsiveCondition?.mobile || responsiveCondition?.desktop ? 0 : '0.8em'}
        borderRadius={responsiveCondition?.desktop ? horizontalSpace : '50%'}>
        {responsiveCondition?.desktop ? 'Tweet' : '+'}
      </Button>

      {/* Profile section display */}
    </FlexContainer>
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
