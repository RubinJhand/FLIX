import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 4em;
  grid-column-gap: 2em;
  margin: 2em 3.5em 3em 3.5em;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    font-size: 12px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    /* margin: 12em 1.5em 3em 1.5em; */
  }
`;

export const Container = styled.div`
  position: relative;
  top: 8em;
`;
