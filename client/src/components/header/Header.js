import React from 'react';

import {
  Container,
  Inner,
  Logo,
  Left,
  Middle,
  Right,
  Menu,
  ListItem,
  Text
} from './header.styles';

const Header = ({ className, children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner className={className}>{children}</Inner>
    </Container>
  );
};

Header.Logo = ({ ...restProps }) => {
  return <Logo {...restProps} />;
};

Header.Left = ({ children, ...restProps }) => {
  return <Left {...restProps}>{children}</Left>;
};

Header.Middle = ({ children, ...restProps }) => {
  return <Middle {...restProps}>{children}</Middle>;
};

Header.Right = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};

Header.Menu = ({ list, children, ...restProps }) => {
  return (
    <Menu {...restProps}>
      {list.map((item, index) => (
        <ListItem key={index + item.title} {...restProps}>
          {item.title}
        </ListItem>
      ))}
      {children}
    </Menu>
  );
};

Header.ListItem = ({ children, ...restProps }) => {
  return (
    <ListItem {...restProps}>
      <Text>{children}</Text>
    </ListItem>
  );
};

Header.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export default Header;
