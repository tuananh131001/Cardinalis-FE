import Avatar from '@/components/Image/Avatar';
import Image from '@/components/Image/Image';
import { InlineContainer } from '@/components/Container/Container.styled';
import PropTypes from 'prop-types';
import { Input } from '@/components/Input/Input';
import { BiImageAdd } from 'react-icons/bi';
import Icon from '@/components/Image/Icon';

const FileInputIcon = ({ fontSize }) => {
  return (
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
      borderRadius="50%">
      {<BiImageAdd />}
    </Icon>
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
                  src={
                    user?.banner == null
                      ? 'https://plus.unsplash.com/premium_photo-1669386062266-5b20b994f7cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                      : user.banner
                  }
                  alt="Profile Background"
                  width="100%"
                  height={bckHeight}
                  top="0"
                  left="0"
                  zIndex="-1"
                />
                <FileInputIcon fontSize="var(--font-size-xl)" />
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
                <FileInputIcon fontSize="var(--font-size-xl)" />
              </>
            }
          </Input>
        </>
      ) : (
        <>
          <Image
            src={
              user?.banner == null
                ? 'https://plus.unsplash.com/premium_photo-1669386062266-5b20b994f7cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                : user.banner
            }
            alt="Profile Background"
            width="100%"
            height={bckHeight}
          />
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
