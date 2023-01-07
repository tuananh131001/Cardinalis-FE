// https://stackoverflow.com/questions/65255298/how-to-conditionally-disable-the-submit-button-with-react-hook-form

import { useState } from 'react';
import { useSearchUsers } from '@/hooks/useUser';
import useDebounce from '@/hooks/useDebounce';
import { SearchSectionStyled, DropDownSearchSectionStyled } from './SearchSection.styled';
import { defaultUserList } from '@/assets/data/UserData';
import UserCardSection from '@/components/UserCard/UserCardSection';
import uuid from 'react-uuid';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchTerm = useDebounce(searchValue, 1000);
  const { data, isLoading } = useSearchUsers(debouncedSearchTerm);
  const [isSearching, setIsSearching] = useState(false);
  console.log(data?.data);

  const searchList = defaultUserList;
  const renderSearchList = () => {
    return searchList.map((user) => {
      return <UserCardSection user={user} key={uuid()} />;
    });
  };
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
          {/* {isLoading ? <>Loading ...</> : renderSearchList()} */}
          {renderSearchList()}
        </DropDownSearchSectionStyled>
      ) : null}
    </SearchSectionStyled>
  );
};

SearchInput.propTypes = {};

export default SearchInput;
