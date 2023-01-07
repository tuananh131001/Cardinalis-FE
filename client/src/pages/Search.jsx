import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { FlexContainer } from '@/components/Container/Container.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import SearchInput from '@/components/Input/SearchInput';
import { pageContentTemplate } from '@/helpers/PageContentDisplay';
import { useOutletContext } from 'react-router-dom';

const Search = ({ ...props }) => {
  const { keyword } = useParams();

  const { theme, themeToggler } = useOutletContext();
  return (
    <FlexContainer {...pageContentTemplate} {...props}>
      <HeaderSection
        content={<SearchInput />}
        isDisplayTheme={true}
        theme={theme}
        themeToggler={themeToggler}
      />
      {/* List search here */}
    </FlexContainer>
  );
};

Search.propTypes = {};

export default Search;
