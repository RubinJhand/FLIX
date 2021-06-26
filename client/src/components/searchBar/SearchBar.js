import React from 'react';

import {
  Container,
  SearchForm,
  SearchInput,
  SearchSpan
} from './searchBar.styles';

const SearchBar = ({ className, children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

SearchBar.Form = ({ children, ...restProps }) => {
  return <SearchForm {...restProps}>{children}</SearchForm>;
};

SearchBar.Input = ({ ...restProps }) => {
  return <SearchInput {...restProps} />;
};

SearchBar.Span = ({ children, ...restProps }) => {
  return <SearchSpan {...restProps}>{children}</SearchSpan>;
};

export default SearchBar;
