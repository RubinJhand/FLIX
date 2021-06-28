import React from 'react';
import { Box, Border } from './card.styles';

const Card = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>;
};
Card.Border = ({ children, ...restProps }) => {
  return <Border {...restProps}>{children}</Border>;
};

export default Card;
