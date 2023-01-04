import Avatar from '@/components/Image/Avatar';
import Image from '@/components/Image/Image';
import { InlineContainer } from '@/components/Container/Container.styled';
import PropTypes from 'prop-types';
import { Input } from '@/components/Input/Input';
import { BiImageAdd } from 'react-icons/bi';
import Icon from '@/components/Image/Icon';

const FileInputIcon = ({ fontSize, bckHeight }) => {
  return (
    <InlineContainer width="100%" height={bckHeight} backgroundColor="black" opacity={0.7}>
      <Icon
        iconThemeName="secondaryButton"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        display="flex"
        fontSize={fontSize}
        padding="0.2em"
        isHover={true}
        width="fit-content"
        aspectRatio="1/1"
        borderRadius="50%">
        {<BiImageAdd />}
      </Icon>
    </InlineContainer>
  );
};
const ImageProfile = ({
  user,
  bckHeight,
  avatarSize,
  isInput = false,
  top = 0,
  avatarName = 'avatar',
  bannerName = 'banner',
  register = null
}) => {
  return (
    <InlineContainer
      position="absolute"
      top={top}
      left="0"
      width="100%"
      height={bckHeight}
      overflow="visible">
      {isInput ? (
        <>
          <Input
            // register
            register={register}
            registerName={bannerName}
            // style
            inputType="image"
            inputThemeName="loginInput"
            id="updateProfileBanner"
            width="100%"
            height={bckHeight}
            isDisplay={false}>
            {
              <>
                <Image
                  src={user.background}
                  alt="Profile Background"
                  width="100%"
                  height={bckHeight}
                  position="absolute"
                  top="0"
                  left="0"
                  zIndex="-1"
                />
                <FileInputIcon fontSize="var(--font-size-xl)" bckHeight={bckHeight} />
              </>
            }
          </Input>

          <Input
            // register
            register={register}
            registerName={avatarName}
            // style
            inputType="image"
            inputThemeName="loginInput"
            id="updateProfileAvatar"
            width={avatarSize}
            height={avatarSize}
            display="flex"
            position="absolute"
            left="var(--horizontal-spaces)"
            bottom={`calc(-${avatarSize} / 2)`}
            isDisplay={false}>
            {
              <>
                <Avatar
                  src={user.avatar}
                  size={avatarSize}
                  position="absolute"
                  left="0"
                  bottom="0"
                />
                <FileInputIcon fontSize="var(--font-size-xl)" bckHeight={avatarSize} />
              </>
            }
          </Input>
        </>
      ) : (
        <>
          <Image src={user.background} alt="Profile Background" width="100%" height={bckHeight} />
          <Avatar
            src={user.avatar}
            size={avatarSize}
            position="absolute"
            left="var(--horizontal-spaces)"
            bottom={`calc(-${avatarSize} / 2)`}
          />
        </>
      )}
    </InlineContainer>
  );
};

FileInputIcon.propTypes = {
  fontSize: PropTypes.string,
  bckHeight: PropTypes.string
};
ImageProfile.propTypes = {
  user: PropTypes.object,
  bckHeight: PropTypes.string,
  avatarSize: PropTypes.string,
  isInput: PropTypes.bool,
  top: PropTypes.string,
  avatarName: PropTypes.string,
  bannerName: PropTypes.string,
  register: PropTypes.any
};

export default ImageProfile;