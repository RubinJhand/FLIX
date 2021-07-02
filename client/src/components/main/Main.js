import React from 'react';

import { Grid, Container } from './main.styles';

const Main = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Main.Grid = ({ children, ...restProps }) => {
  return <Grid {...restProps}>{children}</Grid>;
};

export default Main;
