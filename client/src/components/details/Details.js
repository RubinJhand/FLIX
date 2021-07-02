import React from 'react';

import { Container, Heading } from './details.styles';

const Details = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Details.Heading = ({ children, ...restProps }) => {
  return <Heading {...restProps}>{children}</Heading>;
};

export default Details;
