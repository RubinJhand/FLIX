import styled, { css } from 'styled-components';

export const Box = styled.div`
  width: 20%;
  min-width: 20%;
  position: relative;
  padding: 0.25em;
  cursor: pointer;

  transition: transform 400ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Border = styled.div`
  position: relative;
  border-radius: 0.625em;
  border: 4px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;

  transition: transform 400ms ease-in-out, border 400ms ease-in-out,
    box-shadow 400ms ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
      rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;

    border: 4px solid var(--primary);
  }
`;
