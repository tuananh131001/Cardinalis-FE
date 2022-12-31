import { FlexContainer } from '@/components/Container/Container.styled';
import BackSection from '@/components/Sections/GeneralSection/BackSection';
import BackProfile from '@/components/Sections/ProfileSection/BackProfile';
import MainInfoProfile from '@/components/Sections/ProfileSection/MainInfoProfile';
import ProfileNav from '@/components/Sections/ProfileSection/ProfileNav';
import { PROFILE_REPLIES_PATH } from '@/assets/Constant';
import PropTypes from 'prop-types';
import { Outlet, Link } from 'react-router-dom';
import TweetSection from '@/components/Sections/GeneralSection/TweetSection';
import { defaultUser } from '@/assets/Data';
import { useParams } from 'react-router-dom';

const horizontalSpaces = '2em';
// Remember to use useMemo to prevent unnecessary re-rendering if have performance issue
const Profile = ({ user = defaultUser, ...props }) => {
  const { username } = useParams();
  return (
    <>
      {/* Main Side */}
      <FlexContainer fd="column" ai="flex-start" gridArea="main" {...props} width="100%">
        <BackSection
          horizontalSpaces={horizontalSpaces}
          content={<BackProfile name={user.name} numTweets={user.numTweets} />}
        />
        <MainInfoProfile horizontalSpaces={horizontalSpaces} user={user} />
        <Link to="/tweets">Tweets</Link>
        <Link to={`/${PROFILE_REPLIES_PATH}`}>Tweets and Relies</Link>
        <ProfileNav user={user} />
        <Outlet />
        <TweetSection />
      </FlexContainer>

      {/* Right side */}
      <BackSection
        gridArea="side"
        horizontalSpaces={horizontalSpaces}
        content={<BackProfile name="Hello" numTweets={1_000_001_000_000_000_000_000_000} />}
      />
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Profile;
