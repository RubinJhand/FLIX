import React from 'react';

import Header from '../components/header/Header';

import { mainMenuItems } from '../components/header/menuItems';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Left>
        <Header.Logo />

        <Header.Text>
          Browse
          <ExpandMoreIcon />
        </Header.Text>
      </Header.Left>

      <Header.Middle>
        <Header.Menu list={mainMenuItems} />
      </Header.Middle>

      <Header.Right></Header.Right>
    </Header>
  );
};

export default HeaderContainer;
