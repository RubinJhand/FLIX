import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1em 3.5em;

  @media (max-width: 1024px) {
    font-size: 12px;
    top: 12em;
  }

  @media (max-width: 600px) {
    font-size: 10px;
    top: 14em;
  }
`;

export const Heading = styled.h1`
  color: var(--white);
  font-size: 3em;
  font-weight: 500;
`;
