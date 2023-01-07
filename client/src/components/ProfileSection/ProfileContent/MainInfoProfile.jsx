import { FlexContainer } from '@/components/Container/Container.styled';
import { LinkProfile, SpanProfile, SubHeaderProfile } from './TextProfile';
import { ImCalendar } from 'react-icons/im';
import ShortInfoProfile from './ShortInfoProfile';
import { EditButtonProfile, FollowButtonProfile } from './ButtonProfile';
import PropTypes from 'prop-types';
import { displayDate } from '@/helpers/HandleDisplayInfo';
import CustomModal from '@/components/Modals/CustomModal';
import { useChange } from '@/hooks/useChange';
import UpdateProfileForm from '@/components/Form/UpdateProfileForm';
import ImageProfile from './ImageProfile';
import { useNavigate } from 'react-router-dom';
import { PROFILE_FOLLOWING_PATH, PROFILE_FOLLOWERS_PATH } from '@/assets/Constant';
import { MdLocationOn } from 'react-icons/md';
import { RiLinksLine } from 'react-icons/ri';
import FollowButton from '@/components/Sections/FollowSection/FollowButton';

const avatarSize = '9em';
const bckHeight = '14em';
const containerGap = '0.5em';
const MainInfoProfile = ({ user }) => {
  const { value: isOpen, onSetTrue: handleOpen, onSetFalse: handleClose } = useChange(false);
  const navigate = useNavigate();
  const clickNavigate = (type) => {
    switch (type) {
      case 'following':
        navigate(`/${user.username + PROFILE_FOLLOWING_PATH}`);
        break;
      case 'followers':
        navigate(`/${user.username + PROFILE_FOLLOWERS_PATH}`);
        break;
    }
  };
  return (
    <FlexContainer
      fd="column"
      isHideScrollBar={true}
      gap="0.5em"
      position="relative"
      padding={`calc(${bckHeight} + ${containerGap}) var(--horizontal-spaces) 0`}>
      <ImageProfile user={user} bckHeight={bckHeight} avatarSize={avatarSize} />
      {user.isYou ? (
        <EditButtonProfile onClick={handleOpen} />
      ) : (
        <FollowButton isFollowing={user.isFollowing} alignSelf="flex-end" width="20%" />
      )}
      <ShortInfoProfile name={user.name} username={user.username} padding="1em 0" />
      {user.bio && <SubHeaderProfile text={user.bio} />}
      <SpanProfile text={[<ImCalendar key={0} />, `Joined ${displayDate(user.createdAt)}`]} />
      {user.location && <SpanProfile text={[<MdLocationOn key={0} />, user.location]} />}
      {user.website && (
        <LinkProfile
          href={user.website}
          rel="noopener noreferrer"
          textThemeName="primaryText"
          text={[<RiLinksLine key={0} />, user.website]}
        />
      )}
      <FlexContainer gap="2em" jc="flex-start">
        <FollowButtonProfile
          count={user.following}
          text="Following"
          onClick={() => clickNavigate('following')}
        />
        <FollowButtonProfile
          count={user.followers}
          text="Followers"
          onClick={() => clickNavigate('followers')}
        />
      </FlexContainer>

      {user.isYou && (
        <CustomModal isOpen={isOpen} handleClose={handleClose}>
          {<UpdateProfileForm user={user} isInModal={true} closeAction={handleClose} />}
        </CustomModal>
      )}
    </FlexContainer>
  );
};
MainInfoProfile.propTypes = {
  horizontalSpaces: PropTypes.string,
  user: PropTypes.object
};

export default MainInfoProfile;
