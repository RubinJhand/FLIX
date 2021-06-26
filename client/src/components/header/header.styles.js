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

export const Menu = styled.ul``;

export const ListItem = styled.li``;

export const Text = styled.span``;
