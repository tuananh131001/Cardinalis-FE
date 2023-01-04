import Button from '@/components/Button/Button';
import PropTypes from 'prop-types';
import ProfileInfoSummary from '../GeneralSection/ProfileInfoSummary';

const FollowerSection = ({ user, isFollow }) => {
  return (
    <ProfileInfoSummary
      user={user}
      subSection={
        <Button
          buttonType="primary"
          buttonThemeName={isFollow ? 'primaryButton' : 'secondaryButton'}>
          {isFollow ? 'Following' : 'Follow'}
        </Button>
      }
    />
  );
};

FollowerSection.propTypes = {
  user: PropTypes.object,
  isFollow: PropTypes.bool
};

export default FollowerSection;
