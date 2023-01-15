// https://stackoverflow.com/questions/65255298/how-to-conditionally-disable-the-submit-button-with-react-hook-form

import { useMemo, useState } from 'react';
import { useSearchUsers } from '@/hooks/useUser';
import useDebounce from '@/hooks/useDebounce';
import { SearchSectionStyled } from './SearchSection.styled';
import SearchContentModal from './SearchContent/SearchContentModal';
import MainNav from '@/components/NavSection/MainHome/MainNav';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SearchContent from './SearchContent/SearchContent';
import { extractPath } from '@/helpers/HandleDisplayInfo';
import { mainPathRegex } from '@/assets/Constant';
import PropTypes from 'prop-types';
import Nothing from '@/components/LoadingNothing/Nothing';

const SearchSection = ({ type = 'modal' }) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchTerm = useDebounce(searchValue, 1000);
  const { data, isLoading, isError } = useSearchUsers(debouncedSearchTerm);
  const [isSearching, setIsSearching] = useState(false);

  const { user } = useSelector((state) => state.user);

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
          searchValueObject={{ isLoading, data, isError }}
        />
      ) : (
        <>
          <MainNav user={user} currentTab={currentTab} />

          {isError ? (
            <Nothing />
          ) : (
            <SearchContent
              searchInputObject={{ searchValue, setSearchValue }}
              isSearchingObject={{ isSearching, setIsSearching }}
              searchValueObject={{ isLoading, data, isError }}
            />
          )}
          {/* đừng bỏ dòng này */}
          <div></div>
        </>
      )}
    </SearchSectionStyled>
  );
};

SearchSection.propTypes = {
  type: PropTypes.string
};

export default SearchSection;
