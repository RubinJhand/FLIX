import React from 'react';

import Header from '../components/header/Header';

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Left></Header.Left>

      <Header.Middle></Header.Middle>

      <Header.Right></Header.Right>
    </Header>
  );
};

export default HeaderContainer;
