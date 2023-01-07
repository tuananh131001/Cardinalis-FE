import React from 'react';
import PropTypes from 'prop-types';
import UserCardInfo from './UserCardContent/UserCardInfo';
import { UserCardSectionStyled } from './UserCardSection.styled';

const UserCardSection = ({ name, username, button }) => {
  return (
    <UserCardSectionStyled>
      <UserCardInfo name={name} username={username} />
      {button}
    </UserCardSectionStyled>
  );
};

UserCardSection.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  button: PropTypes.node
};

export default UserCardSection;
