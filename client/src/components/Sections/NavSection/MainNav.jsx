import { FlexContainer } from '@/components/Container/Container.styled';
import NavImage from './NavImage';
import NavButton from './NavButton';
import PropTypes from 'prop-types';
import {
  AiOutlineNumber,
  AiOutlineSetting,
  AiFillSetting,
  AiOutlineHome,
  AiFillHome
} from 'react-icons/ai';
import { IoBookmarkOutline, IoBookmark, IoPersonOutline, IoPerson } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import {
  HOME_PATH,
  EXPLORE_PATH,
  BOOKMARK_PATH,
  PROFILE_PATH,
  SETTINGS_PATH
} from '@/assets/Constant';
import Button from '@/components/Button/Button';
import { useLocation } from 'react-router-dom';

const horizontalSpace = '1.7em';
const displayCurrentTab = (tabCompare, currentTab, type) => {
  // type: "icon" or "props"
  if (type == 'icon') {
    switch (tabCompare) {
      case HOME_PATH:
        return currentTab == HOME_PATH ? <AiFillHome /> : <AiOutlineHome />;
      case EXPLORE_PATH:
        return currentTab == EXPLORE_PATH ? (
          <AiOutlineNumber strokeWidth="35" />
        ) : (
          <AiOutlineNumber />
        );
      case BOOKMARK_PATH:
        return currentTab == BOOKMARK_PATH ? <IoBookmark /> : <IoBookmarkOutline />;
      case PROFILE_PATH:
        return currentTab == PROFILE_PATH ? <IoPerson /> : <IoPersonOutline />;
      case SETTINGS_PATH:
        return currentTab == SETTINGS_PATH ? <AiFillSetting /> : <AiOutlineSetting />;
    }
  } else {
    return {
      fontWeight: tabCompare == currentTab ? '800' : '600',
      transform: tabCompare == currentTab ? 'scale(1.07)' : 'scale(1)'
    };
  }
};
const findNavigateButtonProps = (tabCompare, currentTab, navigate) => {
  return {
    horizontalPadding: horizontalSpace,
    icon: displayCurrentTab(tabCompare, currentTab, 'icon'),
    buttonThemeName: 'thirdButton',
    ...displayCurrentTab(tabCompare, currentTab, 'props'),
    onClick: () => {
      navigate(`/${tabCompare}`);
    }
  };
};
const MainNav = ({ theme, ...props }) => {
  const currentTab = /[^/]*$/.exec(useLocation().pathname)[0];
  const navigate = useNavigate();
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
      <NavImage theme={theme} horizontalMargin={horizontalSpace} />
      {/* Navigate button */}
      <NavButton {...findNavigateButtonProps(HOME_PATH, currentTab, navigate)} text="Home" />
      <NavButton {...findNavigateButtonProps(EXPLORE_PATH, currentTab, navigate)} text="Explore" />
      <NavButton
        {...findNavigateButtonProps(BOOKMARK_PATH, currentTab, navigate)}
        text="Bookmarks"
      />
      <NavButton {...findNavigateButtonProps(PROFILE_PATH, currentTab, navigate)} text="Profile" />
      <NavButton
        {...findNavigateButtonProps(SETTINGS_PATH, currentTab, navigate)}
        text="Settings"
      />
      {/* Tweet button */}
      <Button
        buttonThemeName="primaryButton"
        onClick={() => {
          console.log('Tweet');
        }}
        width="100%"
        borderRadius={horizontalSpace}>
        Tweet
      </Button>

      {/* Profile section display */}
    </FlexContainer>
  );
};

MainNav.propTypes = {
  theme: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default MainNav;
