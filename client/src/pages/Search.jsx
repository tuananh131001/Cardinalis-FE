import React from 'react';
// import PropTypes from 'prop-types';
import SearchSection from '@/components/SearchSection/SearchSection';

const Search = ({ ...props }) => {
  // const { keyword } = useParams();
  return <SearchSection type="page" {...props}></SearchSection>;
};

Search.propTypes = {};

export default Search;
