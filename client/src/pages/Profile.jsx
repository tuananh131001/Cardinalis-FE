import { FlexContainer } from '@/components/Container/Container.styled';
import HeaderSection from '@/components/Sections/GeneralSection/HeaderSection';
import BackProfile from '@/components/Sections/ProfileSection/BackProfile';
import MainInfoProfile from '@/components/Sections/ProfileSection/MainInfoProfile';
import ProfileNav from '@/components/Sections/ProfileSection/ProfileNav';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { defaultUser } from '@/assets/data/UserData';
import { useOutletContext } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// Remember to use useMemo to prevent unnecessary re-rendering if have performance issue
const Profile = ({ user = defaultUser, ...props }) => {
  // const { username } = useParams(); // ????????????????

  const { theme, themeToggler } = useOutletContext();
  return (
    <FlexContainer
      fd="column"
      ai="flex-start"
      gridArea="main"
      {...props}
      width="100%"
      overflow="visible">
      <HeaderSection
        content={<BackProfile name={user.name} numTweets={user.numTweets} />}
        theme={theme}
        themeToggler={themeToggler}
      />
      <MainInfoProfile user={user} />
      <ProfileNav user={user} />
      <Outlet context={{ user }} />
    </FlexContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Profile;
