import Avatar from '@/components/Image/Avatar';
import { FlexContainer, InlineContainer } from '@/components/Container/Container.styled';
import Image from '@/components/Image/Image';
import { SubHeaderProfile } from './TextProfile';
import { ImCalendar } from 'react-icons/im';
import ShortInfoProfile from './ShortInfoProfile';
import { EditButtonProfile, FollowButtonProfile } from './ButtonProfile';
import PropTypes from 'prop-types';
import { displayDate } from '@/helpers/HandleDisplayInfo';

const avatarSize = '9em';
const bckHeight = '14em';
const MainInfoProfile = ({ horizontalSpaces, user }) => {
  return (
    <FlexContainer fd="column" isHideScrollBar={true}>
      <InlineContainer height={bckHeight} width="100%" overflow="hidden">
        <Image src={user.background} alt="Profile Background" width="100%" />
      </InlineContainer>
      <FlexContainer
        position="relative"
        height={`calc(${avatarSize} / 2)`}
        overflow="visible"
        jc="flex-end"
        padding={`0 ${horizontalSpaces}`}>
        <Avatar
          avatar={user.avatar}
          size={avatarSize}
          position="absolute"
          left={horizontalSpaces}
          top="-100%"
        />
        <EditButtonProfile />
      </FlexContainer>
      <ShortInfoProfile
        name={user.name}
        username={user.username}
        padding={`1em ${horizontalSpaces}`}
      />
      <SubHeaderProfile
        text={[<ImCalendar key={0} />, `Joined ${displayDate(user.createdAt)}`]}
        padding={`0.5em ${horizontalSpaces}`}
      />

      <FlexContainer gap="2em" jc="flex-start" padding={`0.5em ${horizontalSpaces}`}>
        <FollowButtonProfile count={user.following} text="Following" />
        <FollowButtonProfile count={user.followers} text="Followers" />
      </FlexContainer>
    </FlexContainer>
  );
};
MainInfoProfile.propTypes = {
  horizontalSpaces: PropTypes.string,
  user: PropTypes.object
};

export default MainInfoProfile;
