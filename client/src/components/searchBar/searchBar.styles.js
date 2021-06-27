import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  right: 0;
  max-width: 100%;

  transition: color 400ms linear, transform 400ms ease-in-out 500ms,
    box-shadow 400ms ease-in-out;

  ${({ isSearchOpen }) =>
    isSearchOpen &&
    css`
      border: 2px solid var(--primary);
      background-color: var(--background-secondary);
      border-radius: 3px;
      right: 0;
      margin: 0 1rem;
      transform: scale(1.05);

      box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
        rgba(0, 0, 0, 0.72) 0px 30px 22px -10px,
        rgba(0, 0, 0, 0.25) 0px -10px 20px -10px;
    `};
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  width: 0;
  z-index: 21;

  transition: transform 200ms ease-in-out;

  transform: translateX(2.1em);
  opacity: 0;

  ${({ isSearchOpen }) =>
    isSearchOpen &&
    css`
      opacity: 1;
      width: 100%;
      transform: translateX(0);
      background-color: #56708c;
    `};
`;

export const SearchInput = styled.input`
  padding: 1.15em 1em;
  width: 100%;
  color: var(--white);
  font-weight: 500;
  height: 0.9em;
  background-color: rgba(86, 112, 140, 0.45);
  border: none;

  &:focus {
    border: 1px solid var(--secondary);
    border-radius: 2px;
    outline: var(--primary);
  }
`;

export const SearchSpan = styled.span`
  position: relative;
  top: 0;
  right: 0;
  z-index: 22;

  display: flex;
  align-items: center;
  padding: 0.2em 0.5em;

  > svg {
    filter: brightness(50%);
    cursor: pointer;
    color: var(--white);
    transition: color 400ms linear, filter 400ms linear;

    &:hover {
      filter: brightness(100%);
    }
  }
`;
