import React from 'react';
import PropTypes from 'prop-types';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import SearchList from './SearchList';
import { SearchContentStyled } from './SearchContent.styled';
import { defaultUserList } from '@/assets/data/UserData';
import Divider from '@/components/Divider/Divider';

const SearchContent = ({ searchInputObject, isSearchingObject, searchValueObject }) => {
  const { searchValue, setSearchValue } = searchInputObject;
  const { isSearching, setIsSearching } = isSearchingObject;
  const { isLoading, data } = searchValueObject;
  const searchList = defaultUserList;
  return (
    <SearchContentStyled>
      <HeaderSection content="Search" leftType="back" />
      <input
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
        placeholder="What are you looking for?"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <Divider />
      {isSearching ? <SearchList searchList={searchList} type="page" /> : null}
    </SearchContentStyled>
  );
};

SearchContent.propTypes = {
  searchInputObject: PropTypes.object,
  isSearchingObject: PropTypes.object,
  searchValueObject: PropTypes.object
};

export default SearchContent;
