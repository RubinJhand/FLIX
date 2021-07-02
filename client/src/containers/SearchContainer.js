import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Hooks and Contexts
import useApiData from '../hooks/useApiData';
import useInput from '../hooks/useInput';

// Components
import SearchBar from '../components/searchBar/SearchBar';

// Styles
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const SearchContainer = ({ isMobileMenu }) => {
  const [, setUrl] = useApiData();
  const [searchValue, bindSearch, resetSearch] = useInput('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const history = useHistory();

  const handleOpenSearch = (e) => {
    setIsSearchOpen((isSearchOpen) => !isSearchOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setUrl(`search/${searchValue}`);
    setIsSearchOpen(false);
    resetSearch();

    history.push({
      pathname: `/search/${searchValue}`
    });
  };

  return (
    <SearchBar isSearchOpen={isSearchOpen}>
      <SearchBar.Form onSubmit={handleSearchSubmit} isSearchOpen={isSearchOpen}>
        <SearchBar.Input
          type='text'
          {...bindSearch}
          placeholder={'Search...'}
          isSearchOpen={isSearchOpen}
          isMobileMenu={isMobileMenu}
        />
        <SearchBar.Span onClick={handleOpenSearch} isSearchOpen={isSearchOpen}>
          {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
        </SearchBar.Span>
      </SearchBar.Form>
    </SearchBar>
  );
};

export default SearchContainer;
