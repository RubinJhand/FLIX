import React, { useState, useEffect } from 'react';
import useMobileMenu from '../hooks/useMobileMenu';

import Header from '../components/header/Header';
import SearchContainer from './SearchContainer';

import { mainMenuItems } from '../components/header/menuItems';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const HeaderContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenu] = useMobileMenu('(max-width: 700px)');

  useEffect(() => {
    if (!isMobileMenu) {
      setIsMenuOpen(true);
    }
    if (isMobileMenu) {
      setIsMenuOpen(false);
    }
  }, [isMobileMenu]);

  const handleOpenMenu = (e) => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  return (
    <Header>
      <Header.Left>
        <Header.Logo />
        {isMobileMenu && (
          <Header.Text onClick={handleOpenMenu} isMenuOpen={isMenuOpen}>
            Browse
            <ExpandMoreIcon />
          </Header.Text>
        )}
      </Header.Left>

      <Header.Middle>
        <Header.Menu
          isMobileMenu={isMobileMenu}
          isMenuOpen={isMenuOpen}
          list={mainMenuItems}
        />
      </Header.Middle>

      <Header.Right>
        <SearchContainer isMobileMenu={isMobileMenu} />
      </Header.Right>
    </Header>
  );
};

export default HeaderContainer;
