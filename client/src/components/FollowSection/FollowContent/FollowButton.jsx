import React, { useState } from 'react';
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
const FollowButton = ({ id, isFollowing, ...props }) => {
  const { data, refetch } = useFollowUser(id);
  const [following, setIsFollowing] = useState(isFollowing);
  const followType = following ? 'following' : 'follow';
  const { value: isHover, onSetNewValue: onSetHover } = useChange(false);
  console.log(followType);
  console.log(data?.data);
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
    console.log(id);
    console.log('siu');
    refetch();
    setIsFollowing(!following);
  };
  return (
    <Button
      {...props}
      onMouseEnter={onEnter}
      onMouseOut={onOut}
      onClick={onClick}
      buttonType="primary"
      buttonThemeName={getAttribute('buttonThemeName', followType, isHover)}
      borderRadius="0.7em"
      padding="0.7em 1.3em">
      {getAttribute('text', followType, isHover)}
    </Button>
  );
};

FollowButton.propTypes = {
  isFollowing: PropTypes.bool,
  id: PropTypes.id
};

export default FollowButton;
