// https://stackoverflow.com/questions/65255298/how-to-conditionally-disable-the-submit-button-with-react-hook-form

import { useMemo, useState } from 'react';
import { useSearchUsers } from '@/hooks/useUser';
import useDebounce from '@/hooks/useDebounce';
import { SearchSectionStyled } from './SearchSection.styled';
import SearchContentModal from './SearchContent/SearchContentModal';
import MainNav from '@/components/NavSection/MainHome/MainNav';
import { youUser } from '@/assets/data/UserData';
import { useLocation } from 'react-router-dom';
import SearchContent from './SearchContent/SearchContent';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import PropTypes from 'prop-types';

const SearchSection = ({ type = 'modal' }) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchTerm = useDebounce(searchValue, 1000);
  const { data, isLoading } = useSearchUsers(debouncedSearchTerm);
  const [isSearching, setIsSearching] = useState(false);
  console.log(data?.data);

  const user = youUser;

  const location = useLocation();
  const { currentTab } = useMemo(() => {
    const currentTab = extractPath(location.pathname, mainPathRegex);
    return { currentTab };
  }, [location]);

  return (
    <SearchSectionStyled type={type}>
      {type === 'modal' ? (
        <SearchContentModal
          searchInputObject={{ searchValue, setSearchValue }}
          isSearchingObject={{ isSearching, setIsSearching }}
          searchValueObject={{ isLoading, data }}
        />
      ) : (
        <>
          <MainNav user={user} currentTab={currentTab} />
          <SearchContent
            searchInputObject={{ searchValue, setSearchValue }}
            isSearchingObject={{ isSearching, setIsSearching }}
            searchValueObject={{ isLoading, data }}
          />
          <div>Hdiskjnsd</div>
        </>
      )}
    </SearchSectionStyled>
  );
};

SearchSection.propTypes = {
  type: PropTypes.string
};

export default SearchSection;
