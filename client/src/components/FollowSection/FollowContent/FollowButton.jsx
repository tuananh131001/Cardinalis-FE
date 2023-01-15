import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/Button/Button';
import { useChange } from '@/hooks/useChange';
import { useFollowUser } from '@/hooks/useUser';

const getAttribute = (type, followType, isHover = false) => {
  switch (type) {
    case 'buttonThemeName':
      if (followType == 'follow') return 'secondaryButton';
      else {
        if (isHover) return 'warningButton';
        else return 'thirdButton';
      }
    case 'text':
      if (followType == 'follow') return 'Follow';
      else {
        if (isHover) return 'Unfollow';
        else return 'Following';
      }
  }
};
const FollowButton = ({id, isFollowing, ...props }) => {
  const { data, isLoading, isError, error } = useFollowUser();
  const followType = isFollowing ? 'following' : 'follow';
  const { value: isHover, onSetNewValue: onSetHover } = useChange(false);
  const onEnter = () => {
    if (followType == 'following') {
      onSetHover(true);
    }
  };
  const onOut = () => {
    if (followType == 'following') {
      onSetHover(false);
    }
  };
  const onClick = () => {

  };
  return (
    <Button
      {...props}
      onMouseEnter={onEnter}
      onMouseOut={onOut}
      onClick={onClick}
      buttonType="primary"
      buttonThemeName={getAttribute('buttonThemeName', followType, isHover)}
      borderRadius="35%/110%"
      padding="0.7em 1.3em">
      {getAttribute('text', followType, isHover)}
    </Button>
  );
};

FollowButton.propTypes = {
  isFollowing: PropTypes.bool
};

export default FollowButton;
