import Avatar from '@/components/Image/Avatar';
import Image from '@/components/Image/Image';
import { FlexContainer, InlineContainer } from '@/components/Container/Container.styled';
import PropTypes from 'prop-types';
import { Input } from '@/components/Input/Input';
import { BiImageAdd } from 'react-icons/bi';
import Icon from '@/components/Image/Icon';

const FileInputIcon = ({ fontSize }) => {
  return (
    <Icon
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      fontSize={fontSize}>
      {<BiImageAdd />}
    </Icon>
  );
};
const ImageProfile = ({ user, bckHeight, avatarSize, isInput = false }) => {
  return (
    <InlineContainer
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height={bckHeight}
      overflow="visible">
      <Input
        inputType="image"
        inputThemeName="loginInput"
        id="updateProfileAvatar"
        height={bckHeight}
        isDisplay={false}>
        {
          <>
            <Image src={user.background} alt="Profile Background" width="100%" height={bckHeight} />
            <FileInputIcon fontSize="var(--font-size-xl)" />
          </>
        }
      </Input>

      <Avatar
        src={user.avatar}
        size={avatarSize}
        position="absolute"
        left="var(--horizontal-spaces)"
        bottom={`calc(-${avatarSize} / 2)`}
      />
    </InlineContainer>
  );
};

ImageProfile.propTypes = {
  user: PropTypes.object,
  bckHeight: PropTypes.string,
  avatarSize: PropTypes.string
};

export default ImageProfile;
