import React, { useState, useEffect } from 'react';

// Hooks and Contexts
import useMediaType from '../hooks/useMediaType';
import useMobileMenu from '../hooks/useMobileMenu';

// Components
import Header from '../components/header/Header';
import SearchContainer from './SearchContainer';
import NavbarContainer from './NavbarContainer';

// Styles
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Misc.
import { mainMenuItems } from '../components/header/header.menuItems';

const HeaderContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenu] = useMobileMenu('(max-width: 700px)');
  const { setMediaType } = useMediaType();

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

  const handleChangeMediaType = (type) => {
    type && setMediaType(type);
    type && isMobileMenu && setIsMenuOpen(false);
  };

  return (
    <Header>
      <Header.Left>
        <Header.LogoWrapper>
          <Header.LogoText>fl</Header.LogoText>
          <Header.Logo />
          <Header.LogoText>x</Header.LogoText>
        </Header.LogoWrapper>
        {isMobileMenu && (
          <Header.Text onClick={handleOpenMenu} isMenuOpen={isMenuOpen}>
            Browse
            <ExpandMoreIcon />
          </Header.Text>
        )}
      </Header.Left>

      <Header.Middle>
        <Header.Menu isMobileMenu={isMobileMenu} isMenuOpen={isMenuOpen}>
          {mainMenuItems.map((item, index) => (
            <Header.ListItem
              key={index + item.title}
              isMobileMenu={isMobileMenu}
              onClick={() => handleChangeMediaType(item.type)}
            >
              {item.title}
            </Header.ListItem>
          ))}
        </Header.Menu>
      </Header.Middle>

      <Header.Right>
        <SearchContainer isMobileMenu={isMobileMenu} />
      </Header.Right>
      <NavbarContainer isMobileMenu={isMobileMenu} />
    </Header>
  );
};

export default HeaderContainer;
