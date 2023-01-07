import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import { HeaderProfile, SubHeaderProfile } from './TextProfile';
import { BsFillPatchCheckFill } from 'react-icons/bs';

// const displaySize = {
//   sm: { // for display in nav
//     nameSize:,
//     usernameSize:,
//   }
// }
const ShortInfoProfile = ({ name, username, isHotUser, ...props }) => {
  return (
    <FlexContainer fd="column" {...props}>
      <FlexContainer jc="flex-start" gap="0.4em" ai="center">
        <HeaderProfile text={name} width="auto" />
        {isHotUser && <BsFillPatchCheckFill size="1.2em" color="var(--primary_color_light)" />}
      </FlexContainer>
      <SubHeaderProfile text={`@${username}`} />
    </FlexContainer>
  );
};

ShortInfoProfile.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  isHotUser: PropTypes.bool,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default ShortInfoProfile;
