import Button from '@/components/Button/Button';
import Avatar from '@/components/Image/Avatar';
import Text from '@/components/Text/Text';
import { FlexContainer, InlineContainer } from '@/components/Container/Container.styled';
import { useOutletContext } from 'react-router-dom';
import Image from '@/components/Image/Image';
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
const avatarPositionTop = `calc(${bckHeight} - ${avatarSize} / 2)`;
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
        <Button
          buttonType="primary"
          buttonThemeName="thirdButton"
          borderRadius="30%/110%"
          width="auto"
          padding="0.8em 1.3em">
          Edit Profile
        </Button>
      </FlexContainer>
      <Text
        type="p"
        textThemeName="paragraphText"
        text={user.name}
        width="100%"
        txtAlign="left"
        gridArea="name"
      />
      <Text
        type="h4"
        textThemeName="paragraphText"
        text={user.username}
        width="100%"
        txtAlign="left"
        gridArea="username"
      />
      <Text
        type="h4"
        textThemeName="paragraphText"
        text="joined"
        width="100%"
        txtAlign="left"
        gridArea="joined"
      />
      <Text
        type="h4"
        textThemeName="paragraphText"
        text="Foloo"
        width="100%"
        txtAlign="left"
        gridArea="follow"
      />
    </FlexContainer>
  );
};
const gridTempateAreas = `
    "bck bck" 1fr
    "avatar edit" auto
    "name name" auto
    "username username" auto
    "joined joined" auto
    follow follow" auto /
    1fr 1fr
`;

export default MainInfoProfile;
