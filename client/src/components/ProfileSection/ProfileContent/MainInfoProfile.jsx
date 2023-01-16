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
import FollowButton from '@/components/FollowSection/FollowContent/FollowButton';
import { RiLinksLine } from 'react-icons/ri';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useGetUserFollowers, useGetUserFollowing } from '@/hooks/useUser';
import { UPDATE_PROFILE_PATH } from '@/assets/Constant';
import { MainInfoProfileStyled } from './ProfileContent.styled';
import { CHANGE_PASSWORD_PATH } from '@/assets/Constant';

const avatarSize = '9em';
const bckHeight = '14em';
const MainInfoProfile = ({ user, currentUsername }) => {
  const responsiveCondition = {
    desktop: useMediaQuery('(min-width: 1134px)')
  };

  const { value: isOpen, onSetTrue: handleOpen, onSetFalse: handleClose } = useChange(false);
  const navigate = useNavigate();
  const {
    data: followers,
    isLoading: isLoadingFollowers,
    isError: isErrorFollower
  } = useGetUserFollowers(user.id);
  const {
    data: following,
    isLoading: isLoadingFollowing,
    isError: isErrorFollowing
  } = useGetUserFollowing(user.id);
  if (isLoadingFollowers || isLoadingFollowing) return <div>Loading...</div>;
  if (isErrorFollower || isErrorFollowing) return <div>Error</div>;

  const isYou = user.username === currentUsername ? true : false;
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
  console.log(user);
  console.log(followers);
  const isFollowedByCurrentUser =
    followers?.data.filter((follower) => follower.username === currentUsername).length > 0;

  // event handlers
  const clickUpdateProfile = (event) => {
    event.preventDefault();
    if (responsiveCondition?.desktop) handleOpen(event);
    else navigate(`/${UPDATE_PROFILE_PATH}`);
  };
  const clickEditPassword = (event) => {
    event.preventDefault();
    navigate(`/${CHANGE_PASSWORD_PATH}`);
  };
  return (
    <MainInfoProfileStyled bckHeight={bckHeight}>
      <ImageProfile user={user} bckHeight={bckHeight} avatarSize={avatarSize} />
      {isYou ? (
        <FlexContainer fd="column" gap="0.6em">
          <EditButtonProfile text={'Edit Profile'} onClick={clickUpdateProfile} />
          <EditButtonProfile text={'Edit Pass'} onClick={clickEditPassword} />
        </FlexContainer>
      ) : (
        <FollowButton
          id={user?.id}
          isFollowing={isFollowedByCurrentUser}
          alignSelf="flex-end"
          width="20%"
        />
      )}
      <ShortInfoProfile
        name={user.fullName || user.username}
        username={user.username}
        isHotUser={user.is_hot_user}
        padding="1em 0"
      />
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
          count={following?.data.length ?? 0}
          text="Following"
          onClick={() => clickNavigate('following')}
        />
        <FollowButtonProfile
          count={followers?.data.length ?? 0}
          text="Followers"
          onClick={() => clickNavigate('followers')}
        />
      </FlexContainer>

      {isYou && (
        <CustomModal isOpen={isOpen} handleClose={handleClose}>
          {<UpdateProfileForm user={user} isInModal={true} closeAction={handleClose} />}
        </CustomModal>
      )}
    </MainInfoProfileStyled>
  );
};
MainInfoProfile.propTypes = {
  horizontalSpaces: PropTypes.string,
  user: PropTypes.object,
  currentUsername: PropTypes.string.isRequired
};

export default MainInfoProfile;
