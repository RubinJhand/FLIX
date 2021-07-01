import styled, { css } from 'styled-components';
import LogoIcon from '../../assets/LogoIcon';

export const Container = styled.header`
  height: 4.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--background-primary);
  background-image: linear-gradient(
    180deg,
    var(--background-secondary) 0,
    rgba(26, 29, 41, 0.75)
  );
`;

export const Inner = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3.5rem;
  width: 100%;
  position: relative;
  z-index: 99;
`;

export const Logo = styled(LogoIcon).attrs((props) => ({}))``;

export const LogoText = styled.h1`
  font-size: 1.953em;
  letter-spacing: 0.1875em;

  text-transform: uppercase;
  font-weight: 300;
`;

export const LogoWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  padding: 0.5em;
  cursor: pointer;

  border-radius: 0.625em;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(249, 249, 249, 0.1);
  box-shadow: 0px 0px 0px 1px rgba(249, 249, 249, 0.1);
  transition: box-shadow 400ms ease-in-out;

  > svg {
    cursor: pointer;
    font-size: 1.953rem;
    margin: 0 0.05em 0 -0.25em;
  }

  &:hover,
  &:focus {
    -webkit-box-shadow: 0px 0px 0px 1px #02d3de;
    box-shadow: 0px 0px 0px 1px #02d3de;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
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
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  ${({ isMobileMenu }) =>
    isMobileMenu &&
    css`
      position: absolute;
      flex-direction: column;
      top: 3.75rem;
      left: 0;
      right: 0;
      z-index: 101;

      background: var(--background-secondary);
    `};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  padding: ${({ isMobileMenu }) => (isMobileMenu ? '0' : '0.25em 1em')};
  margin: 1.5em;

  font-size: 1.25em;
  letter-spacing: 0.1875em;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;

    background-color: var(--primary);
    transform: scaleX(0);
    transition: transform 400ms ease-in-out;
  }

  &:hover,
  &:focus {
    &::before {
      transform: scaleX(1);
    }
  }
`;

export const Text = styled.span`
  color: var(--white);
  padding: 0.25em 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  filter: brightness(50%);
  transition: filter 400ms linear;

  > svg {
    padding-top: 0.18em;
    transition: transform 400ms ease-in-out;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(-180deg)' : 'rotate(0)'};
  }

  &:hover {
    filter: brightness(100%);
  }
`;
