import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  z-index: 21;
`;

export const SearchInput = styled.input`
  position: absolute;
  left: auto;
  right: 3em;
  padding: 0;
  width: 0;

  height: 100%;
  z-index: 10;
  outline: none;
  border: 0;
  color: var(--white);
  background-color: var(--background-secondary);

  font-weight: 500;

  transition: border 200ms ease-in-out 300ms, width 400ms ease-in-out,
    right 200ms ease-in 125ms, border-radius 100ms ease-in-out 150ms;

  &:focus {
    border: 2px solid var(--primary);
  }

  ${({ isSearchOpen }) =>
    isSearchOpen &&
    css`
      border: 2px solid var(--white);
      border-radius: 10px;
      width: ${({ isMobileMenu }) =>
        isMobileMenu ? 'calc(100vw - 1.75rem)' : '25vw'};
      padding: 1.15em 2.5em 1.15em 0.75em;
      background-color: rgba(43, 56, 70, 1);
      right: -0.15em;
    `};
`;

export const SearchSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 0.2em 0.5em;
  z-index: 11;

  > svg {
    filter: brightness(50%);
    cursor: pointer;
    color: var(--white);
    transition: filter 400ms linear;

    &:hover {
      filter: brightness(100%);
    }
  }

  ${({ isSearchOpen }) =>
    isSearchOpen &&
    css`
      transition: border-radius 100ms ease-in-out 200ms;
      border-radius: 25px;
      background-color: rgba(43, 56, 70, 1);
    `};
`;
