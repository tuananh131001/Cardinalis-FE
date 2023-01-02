import Avatar from '@/components/Image/Avatar';
import { FlexContainer, InlineContainer } from '@/components/Container/Container.styled';
import Image from '@/components/Image/Image';
import { SubHeaderProfile } from './TextProfile';
import { ImCalendar } from 'react-icons/im';
import ShortInfoProfile from './ShortInfoProfile';
import { EditButtonProfile, FollowButtonProfile } from './ButtonProfile';
import PropTypes from 'prop-types';
import { displayDate } from '@/helpers/HandleDisplayInfo';
import CustomModal from '@/components/Modals/CustomModal';
import { useChange } from '@/hooks/useChange';
import UpdateProfileForm from '@/components/Form/UpdateProfileForm';

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
      <InlineContainer
        position="absolute"
        top="0"
        left="0"
        height={bckHeight}
        width="100%"
        overflow="visible">
        <Image src={user.background} alt="Profile Background" width="100%" height={bckHeight} />
        <Avatar
          src={user.avatar}
          size={avatarSize}
          position="absolute"
          left="var(--horizontal-spaces)"
          bottom={`calc(-${avatarSize} / 2)`}
        />
      </InlineContainer>
      <EditButtonProfile onClick={handleOpen} />
      <ShortInfoProfile name={user.name} username={user.username} padding="1em 0" />
      <SubHeaderProfile text={[<ImCalendar key={0} />, `Joined ${displayDate(user.createdAt)}`]} />

      <FlexContainer gap="2em" jc="flex-start">
        <FollowButtonProfile count={user.following} text="Following" />
        <FollowButtonProfile count={user.followers} text="Followers" />
      </FlexContainer>

      <CustomModal isOpen={isOpen} handleClose={handleClose}>
        {<UpdateProfileForm user={user} />}
      </CustomModal>
    </FlexContainer>
  );
};
MainInfoProfile.propTypes = {
  horizontalSpaces: PropTypes.string,
  user: PropTypes.object
};

export default MainInfoProfile;
