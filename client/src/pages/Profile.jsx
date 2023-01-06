import { FlexContainer } from '@/components/Container/Container.styled';
import HeaderSection from '@/components/Sections/GeneralSection/HeaderSection';
import BackProfile from '@/components/Sections/ProfileSection/BackProfile';
import MainInfoProfile from '@/components/Sections/ProfileSection/MainInfoProfile';
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import {
  HOME_PATH,
  PROFILE_NESTED_PATHS,
  PROFILE_FOLLOWERS_PATH,
  PROFILE_FOLLOWING_PATH
} from '@/assets/Constant';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { useParams } from 'react-router-dom';
import { getUserByUsername } from '@/assets/data/UserData';
import { pageContentTemplate } from '@/helpers/PageContentDisplay';

const defineBackDestination = (location, user) => {
  if (PROFILE_NESTED_PATHS.includes(location)) return user.username;
  if (extractPath(location) == user.username) return HOME_PATH;
  return -1;
};
// Remember to use useMemo to prevent unnecessary re-rendering if have performance issue
const Profile = ({ ...props }) => {
  // logic here
  const { username } = useParams(); // ????????????????
  const user = getUserByUsername(username);

  const location = '/' + extractPath(useLocation().pathname);

  const { theme, themeToggler } = useOutletContext();
  return (
    <FlexContainer {...props} {...pageContentTemplate}>
      <HeaderSection
        content={<BackProfile name={user.name} numTweets={user.numTweets} />}
        backDestination={defineBackDestination(location, user)}
        theme={theme}
        themeToggler={themeToggler}
      />
      {!(location == PROFILE_FOLLOWERS_PATH || location == PROFILE_FOLLOWING_PATH) && (
        <MainInfoProfile user={user} />
      )}
      <Outlet context={{ user }} />
    </FlexContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Profile;
