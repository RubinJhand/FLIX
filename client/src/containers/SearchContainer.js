import React, { useState } from 'react';

// Components
import SearchBar from '../components/searchBar/SearchBar';

// Styles
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
        <SearchBar.Input
          isSearchOpen={isSearchOpen}
          isMobileMenu={isMobileMenu}
          placeholder={'Search...'}
        />
        <SearchBar.Span onClick={handleOpenSearch} isSearchOpen={isSearchOpen}>
          {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
        </SearchBar.Span>
      </SearchBar.Form>
    </SearchBar>
  );
};

export default SearchContainer;
