import styled, { css } from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  top: 4.375em;
  left: 0;
  right: 0;
  z-index: 80;
  background-color: var(--background-primary);

  height: 2em;

  ${({ isGenre }) =>
    isGenre &&
    css`
      margin-top: 1.969em;
      height: 2em;
      background-color: var(--background-secondary);
    `};

  -webkit-box-shadow: inset 15px 15px 25px -9px rgba(0, 0, 0, 0.61),
    inset -18px -18px 28px -23px rgba(255, 255, 255, 0.26);
  box-shadow: inset 15px 15px 25px -9px rgba(0, 0, 0, 0.61),
    inset -18px -18px 28px -23px rgba(255, 255, 255, 0.26);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4em 1em;
  margin: 0 1.5em;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
  }

  ${({ isGenre }) =>
    isGenre &&
    css`
      overflow-x: scroll;
    `};
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  width: 100%;
`;

export const IconWrap = styled.span`
  color: var(--white);
  cursor: pointer;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  transition: transform 400ms ease-in-out;

  > svg {
    font-size: 6.5rem;
    position: absolute;

    z-index: 95;

    transform: scale(0);
    transition: transform 400ms ease-in-out;
  }

  > span {
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    > svg {
      transform: scale(1);
    }

    > span {
      transform: scale(0);
    }
    filter: brightness(100%);
  }
`;

export const Text = styled.span`
  color: var(--text-secondary);

  padding: ${({ isMobileMenu }) =>
    isMobileMenu ? '0.25em .5em' : '0.25em 1em'};
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 0.85em;
  font-weight: 600;

  cursor: pointer;

  ${({ isGenre }) =>
    isGenre &&
    css`
      filter: brightness(50%);
      z-index: 70;
      &:hover {
        color: var(--primary);
      }
    `};

  ${({ isCollection }) =>
    isCollection &&
    css`
      width: 100%;

      text-align: center;
      font-weight: 300;
    `};

  transition: filter 400ms linear, color 400ms linear;

  &:hover {
    filter: brightness(100%);
  }
`;
