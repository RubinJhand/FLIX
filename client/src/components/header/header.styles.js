import styled, { css } from 'styled-components';
import LogoIcon from '../../assets/LogoIcon';

export const Container = styled.header`
  background-color: var(--background-secondary);
  background-image: linear-gradient(
    180deg,
    var(--background-secondary) 0,
    rgba(26, 29, 41, 0.75)
  );
  height: 4.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Inner = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  width: 100%;
  position: relative;
  z-index: 99;
`;

export const Logo = styled(LogoIcon).attrs((props) => ({}))``;

export const Left = styled.div`
  display: flex;
  align-items: center;

  > svg {
    cursor: pointer;
    font-size: 4.375rem;
    background: transparent;

    transition: color 400ms linear;
    color: var(--white);

    &:hover {
      color: var(--primary);
    }
  }
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Menu = styled.ul`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  height: auto;
  text-transform: uppercase;
  color: var(--white);
  list-style: none;
  padding: 0;

  ${({ isMobileMenu }) =>
    isMobileMenu &&
    css`
      position: absolute;
      flex-direction: column;
      top: 4.375rem;
      left: 0;
      right: 0;
      z-index: 10;
      background-color: var(--background-secondary);
    `};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9em;
  letter-spacing: 0.1875em;
  padding: ${({ isMobileMenu }) => (isMobileMenu ? '1.5em' : '0.25em 1em')};
  filter: brightness(50%);

  transition: filter 400ms linear;

  &:hover {
    filter: brightness(100%);
    border-bottom: ${({ isMobileMenu }) =>
      isMobileMenu ? 'none' : '2px solid var(--primary)'};
  }
`;

export const Text = styled.span`
  color: var(--white);
  padding: 0.25em 1em;
  display: flex;
  align-items: center;
  cursor: pointer;

  transition: filter 400ms linear;
  filter: brightness(50%);

  > svg {
    transition: transform 400ms ease-in-out;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(-180deg)' : 'rotate(0)'};
  }

  &:hover {
    filter: brightness(100%);
  }
`;
