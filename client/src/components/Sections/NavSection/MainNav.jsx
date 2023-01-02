import { FlexContainer } from '@/components/Container/Container.styled';
import NavImage from './NavImage';
import NavButton from './NavButton';
import PropTypes from 'prop-types';
import { AiOutlineNumber, AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { IoBookmarkOutline, IoBookmark, IoPersonOutline, IoPerson } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { HOME_PATH, EXPLORE_PATH, BOOKMARK_PATH } from '@/assets/Constant';
import Button from '@/components/Button/Button';
import { useLocation } from 'react-router-dom';
import { defaultUser } from '@/assets/data/UserData';

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
const MainNav = ({ user = defaultUser, theme, ...props }) => {
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
      <NavButton {...findNavigateButtonProps(user.username, currentTab, navigate)} text="Profile" />
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
  user: PropTypes.object,
  theme: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default MainNav;
