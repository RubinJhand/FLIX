import React, { useState } from 'react';

import SearchBar from '../components/searchBar/SearchBar';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const SearchContainer = ({ isMobileMenu }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenSearch = (e) => {
    setIsSearchOpen((isSearchOpen) => !isSearchOpen);
  };

  return (
    <SearchBar isSearchOpen={isSearchOpen}>
      <SearchBar.Form isSearchOpen={isSearchOpen}>
        <SearchBar.Input />
      </SearchBar.Form>
      <SearchBar.Span onClick={handleOpenSearch}>
        {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
      </SearchBar.Span>
    </SearchBar>
  );
};

export default SearchContainer;
