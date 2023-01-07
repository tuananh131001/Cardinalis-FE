import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import Text from '@/components/Text/Text';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const UserCardInfo = ({ name, username, isHotUser }) => {
  return (
    <FlexContainer fd="column">
      <FlexContainer jc="flex-start" gap="0.4em">
        <Text
          type="p3"
          textThemeName="paragraphText"
          text={name}
          className="text"
          weight="700"
          width="auto"
        />
        {isHotUser && <BsFillPatchCheckFill size="1.2em" color="var(--primary_color_light)" />}
      </FlexContainer>
      <Text
        type="callout"
        textThemeName="subText"
        text={`@${username}`}
        className="text"
        width="100%"
      />
    </FlexContainer>
  );
};

UserCardInfo.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  isHotUser: PropTypes.bool
};

export default UserCardInfo;
