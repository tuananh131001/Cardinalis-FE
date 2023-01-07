import PropTypes from 'prop-types';
import ProfileSection from '@/components/ProfileSection/ProfileSection';

// Remember to use useMemo to prevent unnecessary re-rendering if have performance issue
const Profile = ({ type }) => {
  return <ProfileSection pageSubType={type} />;
};

Profile.propTypes = {
  type: PropTypes.string.isRequired
};

export default Profile;
