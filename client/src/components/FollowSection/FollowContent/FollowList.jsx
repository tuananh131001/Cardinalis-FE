import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import FollowButton from './FollowButton';
import UserCardSection from '@/components/UserCard/UserCardSection';
import Divider from '@/components/Divider/Divider';

const FollowList = ({ followList }) => {
  const renderFollowList = () => {
    return followList.map((user) => {
      return (
        <>
          <UserCardSection
            key={user?.id}
            user={user}
            sz="large"
            button={<FollowButton id={user?.id} isFollowing={user.isFollowing} width="30%" />}
          />
          <Divider />
        </>
      );
    });
  };
  return (
    <FlexContainer fd="column" padding="2em 0" gap="1em">
      {renderFollowList()}
    </FlexContainer>
  );
};

FollowList.propTypes = {
  type: PropTypes.string,
  followList: PropTypes.arrayOf(PropTypes.object)
};

export default FollowList;
