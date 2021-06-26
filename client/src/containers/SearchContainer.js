import React from 'react';

import SearchBar from '../components/searchBar/SearchBar';

const SearchContainer = ({ isMobileMenu }) => {
  return (
    <SearchBar>
      <SearchBar.Form>
        <SearchBar.Input />
      </SearchBar.Form>
      <SearchBar.Span></SearchBar.Span>
    </SearchBar>
  );
};

export default SearchContainer;
