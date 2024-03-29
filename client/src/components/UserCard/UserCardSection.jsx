import React from 'react';
import PropTypes from 'prop-types';
import UserCardInfo from './UserCardContent/UserCardInfo';
import { UserCardSectionStyled } from './UserCardSection.styled';
import Avatar from '@/components/Image/Avatar';
import { useNavigate } from 'react-router-dom';

const getSize = (sz) => {
  switch (sz) {
    case 'base':
      return '3em';
    case 'medium':
      return '3.5em';
    case 'large':
      return '4em';
    default:
      return '4em';
  }
};
const UserCardSection = ({ user, button, sz = 'base', isDisplayButtonOnly = false, ...props }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${user.username}`);
  };
  return (
    <UserCardSectionStyled onClick={handleClick} {...props} overflow="visible">
      {!isDisplayButtonOnly ? (
        <>
          <Avatar
            src={
              user.avatar ??
              'https://i.pinimg.com/736x/d4/15/95/d415956c03d9ca8783bfb3c5cc984dde.jpg'
            }
            size={getSize(sz)}
          />
          <UserCardInfo
            name={user.username ?? 'not found'}
            username={user.username ?? 'not found'}
            isHotUser={user.is_hot_user ?? false}
          />
          {button}
        </>
      ) : (
        <>{button}</>
      )}
    </UserCardSectionStyled>
  );
};

UserCardSection.propTypes = {
  user: PropTypes.object,
  button: PropTypes.node,
  sz: PropTypes.string,
  isDisplayButtonOnly: PropTypes.bool
};

export default UserCardSection;
