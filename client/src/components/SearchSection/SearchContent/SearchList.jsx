import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UserCardSection from '@/components/UserCard/UserCardSection';
import Divider from '@/components/Divider/Divider';
import FollowButton from '@/components/FollowSection/FollowContent/FollowButton';
import { SearchListStyled } from './SearchContent.styled';

const SearchList = ({ searchList, type }) => {
  const renderSearchList = () => {
    return searchList.map((user) => {
      return (
        <Fragment key={user.id}>
          <UserCardSection
            key={user.id}
            user={user}
            sz="medium"
            button={type != 'modal' && <FollowButton isFollowing={user.isFollowing} width="30%" />}
          />
          {type != 'modal' && <Divider />}
        </Fragment>
      );
    });
  };
  return <SearchListStyled>{renderSearchList()}</SearchListStyled>;
};

SearchList.propTypes = {
  type: PropTypes.string,
  searchList: PropTypes.arrayOf(PropTypes.object)
};

export default SearchList;
