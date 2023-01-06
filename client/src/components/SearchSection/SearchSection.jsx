// https://stackoverflow.com/questions/65255298/how-to-conditionally-disable-the-submit-button-with-react-hook-form

import { useState } from 'react';
import { useSearchUsers } from '@/hooks/useUser';
import useDebounce from '@/hooks/useDebounce';
import { SearchSectionStyled, DropDownSearchSectionStyled } from './SearchSection.styled';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchTerm = useDebounce(searchValue, 1000);
  const { data, isLoading } = useSearchUsers(debouncedSearchTerm);
  const [isSearching, setIsSearching] = useState(false);
  console.log(data?.data);

  return (
    <SearchSectionStyled>
      <input
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      {isSearching ? (
        <DropDownSearchSectionStyled>
          {isLoading ? <>Loading ...</> : <h1>siu</h1>}
        </DropDownSearchSectionStyled>
      ) : null}
    </SearchSectionStyled>
  );
};

SearchInput.propTypes = {};

export default SearchInput;
