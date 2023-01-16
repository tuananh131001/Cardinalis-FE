import Avatar from '@/components/Image/Avatar';
import Image from '@/components/Image/Image';
import { InlineContainer } from '@/components/Container/Container.styled';
import PropTypes from 'prop-types';
import { BiImageAdd } from 'react-icons/bi';
import Icon from '@/components/Image/Icon';
import { Fragment } from 'react';
import { StyledFileInputContainer } from '@/components/Input/Input.styled';

const FileInputIcon = ({ fontSize, ...props }) => {
  return (
    <Icon
      {...props}
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

const defaultBannerLink =
  'https://plus.unsplash.com/premium_photo-1669386062266-5b20b994f7cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';
const ImageProfile = ({
  user,
  bckHeight,
  avatarSize,
  isInput = false,
  top = 0,
  // for input
  onClickAvatar = null,
  onClickBanner = null,
  avatarContentInput = null,
  bannerContentInput = null
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
          <StyledFileInputContainer
            height={bckHeight}
            top="0"
            left="0"
            width="100%"
            onClick={onClickBanner}>
            <Image
              src={bannerContentInput ? bannerContentInput : defaultBannerLink}
              alt="Profile Background"
              width="100%"
              height={bckHeight}
              top="0"
              left="0"
              zIndex="-1"
            />
            <FileInputIcon fontSize="var(--font-size-xl)" />
          </StyledFileInputContainer>

          <StyledFileInputContainer
            onClick={onClickAvatar}
            width={avatarSize}
            height={avatarSize}
            display="flex"
            position="absolute"
            left="var(--horizontal-spaces)"
            bottom={`calc(-${avatarSize} / 2)`}>
            <Avatar
              src={avatarContentInput}
              size={avatarSize}
              position="absolute"
              left="0"
              bottom="0"
            />
            <FileInputIcon fontSize="var(--font-size-xl)" />
          </StyledFileInputContainer>
        </>
      ) : (
        <>
          <Image
            src={user?.banner == null ? defaultBannerLink : user.banner}
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
  onClickAvatar: PropTypes.func,
  onClickBanner: PropTypes.func,
  avatarContentInput: PropTypes.string,
  bannerContentInput: PropTypes.string
};

export default ImageProfile;
