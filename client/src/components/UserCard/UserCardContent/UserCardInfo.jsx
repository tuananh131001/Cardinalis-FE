import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import Text from '@/components/Text/Text';

const UserCardInfo = ({ name, username }) => {
  return (
    <FlexContainer>
      <Text type="p" textThemeName="paragraphText" text={name} className="text" weight="700" />
      <Text type="p2" textThemeName="subText" text={username} className="text" />
    </FlexContainer>
  );
};

UserCardInfo.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string
};

export default UserCardInfo;
