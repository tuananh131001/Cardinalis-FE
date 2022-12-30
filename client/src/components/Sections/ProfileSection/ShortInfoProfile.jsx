import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import { HeaderProfile, SubHeaderProfile } from './TextProfile';

// const displaySize = {
//   sm: { // for display in nav
//     nameSize:,
//     usernameSize:,
//   }
// }
const ShortInfoProfile = ({ name, username, ...props }) => {
  return (
    <FlexContainer fd="column" {...props}>
      <HeaderProfile text={name} />
      <SubHeaderProfile text={`@${username}`} />
    </FlexContainer>
  );
};

ShortInfoProfile.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default ShortInfoProfile;
