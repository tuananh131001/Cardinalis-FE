import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import ProfileInfoSummary from '@/components/Sections/GeneralSection/ProfileInfoSummary';
import uuid from 'react-uuid';
import FollowButton from './FollowButton';

const FollowList = ({ followList }) => {
  const renderFollowList = () => {
    return followList.map((user) => {
      return (
        <ProfileInfoSummary
          key={uuid()}
          user={user}
          subSection={<FollowButton isFollowing={user.isFollowing} width="30%" />}
        />
      );
    });
  };
  return (
    <FlexContainer fd="column" padding="2em 0">
      {renderFollowList()}
    </FlexContainer>
  );
};

FollowList.propTypes = {
  type: PropTypes.string,
  followList: PropTypes.arrayOf(PropTypes.object)
};

export default FollowList;
