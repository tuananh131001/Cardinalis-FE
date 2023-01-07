import React from 'react';
import PropTypes from 'prop-types';
import { DropDownSearchSectionStyled } from '../SearchSection.styled';
import SearchList from './SearchList';
import { defaultUserList } from '@/assets/data/UserData';

const SearchContentModal = ({ searchInputObject, isSearchingObject, searchValueObject }) => {
  const { searchValue, setSearchValue } = searchInputObject;
  const { isSearching, setIsSearching } = isSearchingObject;
  const { isLoading, data } = searchValueObject;
  const searchList = defaultUserList;
  return (
    <>
      <input
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      {isSearching ? (
        <DropDownSearchSectionStyled>
          {/* {isLoading ? <>Loading ...</> : <SearchList searchList={searchList} type="modal" />} */}
          {<SearchList searchList={searchList} type="modal" />}
        </DropDownSearchSectionStyled>
      ) : null}
    </>
  );
};

SearchContentModal.propTypes = {
  searchInputObject: PropTypes.object,
  isSearchingObject: PropTypes.object,
  searchValueObject: PropTypes.object,
  searchList: PropTypes.arrayOf(PropTypes.object)
};

export default SearchContentModal;
