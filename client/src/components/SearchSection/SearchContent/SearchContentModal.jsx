import React from 'react';
import PropTypes from 'prop-types';
import { DropDownSearchSectionStyled } from '../SearchSection.styled';
import BeforeAfterSearchContent from './BeforeAfterSearchContent';

const SearchContentModal = ({ searchInputObject, isSearchingObject, searchValueObject }) => {
  const { searchValue, setSearchValue } = searchInputObject;
  const { isSearching, setIsSearching } = isSearchingObject;
  const { isLoading, data } = searchValueObject;
  const searchList = data?.data;
  return (
    <>
      <input
        onFocus={() => setIsSearching(true)}
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      {isSearching ? (
        <DropDownSearchSectionStyled>
          {
            <BeforeAfterSearchContent
              isLoading={isLoading}
              values={searchList}
              inputValues={searchValue}
              type="modal"
            />
          }
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
