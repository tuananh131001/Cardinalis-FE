import React from 'react';
import PropTypes from 'prop-types';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import { SearchContentStyled } from './SearchContent.styled';
import Divider from '@/components/Divider/Divider';
import BeforeAfterSearchContent from './BeforeAfterSearchContent';

const SearchContent = ({ searchInputObject, isSearchingObject, searchValueObject }) => {
  const { searchValue, setSearchValue } = searchInputObject;
  const { isSearching, setIsSearching } = isSearchingObject;
  const { isLoading, data, isError } = searchValueObject;
  const searchList = data?.data;
  return (
    <SearchContentStyled>
      <HeaderSection content="Search" leftType="back" />
      <input
        onFocus={() => setIsSearching(true)}
        placeholder="What are you looking for?"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <Divider />
      {isSearching ? (
        <BeforeAfterSearchContent
          isLoading={isLoading}
          isError={isError}
          values={searchList}
          inputValues={searchValue}
        />
      ) : null}
    </SearchContentStyled>
  );
};

SearchContent.propTypes = {
  searchInputObject: PropTypes.object,
  isSearchingObject: PropTypes.object,
  searchValueObject: PropTypes.object
};

export default SearchContent;
