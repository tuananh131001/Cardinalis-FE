import { FlexContainer } from '@/components/Container/Container.styled';
import { SubHeaderProfile } from './TextProfile';
import { ImCalendar } from 'react-icons/im';
import ShortInfoProfile from './ShortInfoProfile';
import { EditButtonProfile, FollowButtonProfile } from './ButtonProfile';
import PropTypes from 'prop-types';
import { displayDate } from '@/helpers/HandleDisplayInfo';
import CustomModal from '@/components/Modals/CustomModal';
import { useChange } from '@/hooks/useChange';
import UpdateProfileForm from '@/components/Form/UpdateProfileForm';
import ImageProfile from './ImageProfile';

const avatarSize = '9em';
const bckHeight = '14em';
const containerGap = '0.5em';
const MainInfoProfile = ({ user }) => {
  const { value: isOpen, onSetTrue: handleOpen, onSetFalse: handleClose } = useChange(false);
  return (
    <FlexContainer
      fd="column"
      isHideScrollBar={true}
      gap="0.5em"
      position="relative"
      padding={`calc(${bckHeight} + ${containerGap}) var(--horizontal-spaces) 0`}>
      <ImageProfile user={user} bckHeight={bckHeight} avatarSize={avatarSize} />
      <EditButtonProfile onClick={handleOpen} />
      <ShortInfoProfile name={user.name} username={user.username} padding="1em 0" />
      <SubHeaderProfile text={[<ImCalendar key={0} />, `Joined ${displayDate(user.createdAt)}`]} />

      <FlexContainer gap="2em" jc="flex-start">
        <FollowButtonProfile count={user.following} text="Following" />
        <FollowButtonProfile count={user.followers} text="Followers" />
      </FlexContainer>

      <CustomModal isOpen={isOpen} handleClose={handleClose}>
        {<UpdateProfileForm user={user} isInModal={true} closeAction={handleClose} />}
      </CustomModal>
    </FlexContainer>
  );
};
MainInfoProfile.propTypes = {
  horizontalSpaces: PropTypes.string,
  user: PropTypes.object
};

export default MainInfoProfile;
