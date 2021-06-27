import React from 'react';

import { Container, Wrapper, IconWrap, Text } from './navbar.styles';

const Navbar = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Navbar.Wrapper = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Navbar.IconWrap = ({ color, children, ...restProps }) => {
  return (
    <IconWrap color={color} {...restProps}>
      {children}
    </IconWrap>
  );
};

Navbar.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default Navbar;
