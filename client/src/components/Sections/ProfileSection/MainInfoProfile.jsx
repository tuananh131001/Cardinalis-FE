import Avatar from '@/components/Image/Avatar';
import { FlexContainer, InlineContainer } from '@/components/Container/Container.styled';
import { useOutletContext } from 'react-router-dom';
import Image from '@/components/Image/Image';
import { SubHeaderProfile } from './TextProfile';
import { ImCalendar } from 'react-icons/im';
import ShortInfoProfile from './ShortInfoProfile';
import { EditButtonProfile, FollowButtonProfile } from './ButtonProfile';
import PropTypes from 'prop-types';

const defaultUser = {
  name: 'Hello',
  username: 'Matsuri',
  avatar:
    'https://images.unsplash.com/photo-1633531008092-055a03a8ea0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  background:
    'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80',
  numTweets: 1_00,
  followers: 3,
  following: 4,
  createdAt: '2021-06-02T21:33:45.249967'
};
const avatarSize = '9em';
const bckHeight = '14em';
const MainInfoProfile = ({ user = defaultUser }) => {
  const { horizontalSpaces } = useOutletContext();
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
        text={[<ImCalendar key={0} />, 'Joined 2021']}
        padding={`0.4em ${horizontalSpaces}`}
      />

      <FlexContainer gap="2em" jc="flex-start" padding={`0.4em ${horizontalSpaces}`}>
        <FollowButtonProfile count={user.following} text="Following" />
        <FollowButtonProfile count={user.followers} text="Followers" />
      </FlexContainer>
    </FlexContainer>
  );
};
MainInfoProfile.propTypes = {
  user: PropTypes.object
};

export default MainInfoProfile;
