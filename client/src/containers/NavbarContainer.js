import React from 'react';

// Hooks and Contexts
import useMediaType from '../hooks/useMediaType';
import useApiData from '../hooks/useApiData';

// Components
import Navbar from '../components/navbar/Navbar';

// Misc.
import {
  providerMenuItems,
  collectionMenuItems,
  genreTvMenuItems,
  genreMovieMenuItems
} from '../components/navbar/navbar.menuItems';

const NavbarContainer = ({ isMobileMenu }) => {
  const { mediaType } = useMediaType();
  const [, setUrl] = useApiData();

  const genreType = mediaType === 'tv' ? genreTvMenuItems : genreMovieMenuItems;
  const collectionType =
    mediaType === 'tv' ? providerMenuItems : collectionMenuItems;

  const handleChangeGenre = (genre) => {
    setUrl(`${mediaType}/${genre}`);
  };

  return (
    <>
      <Navbar isGenre>
        <Navbar.Wrapper isGenre>
          {genreType?.map((item, index) => (
            <Navbar.Link
              key={item.genre + index}
              to={`/${mediaType}/${item.genre}`}
              activeClassName='active'
            >
              <Navbar.Text
                isGenre
                onClick={() => handleChangeGenre(item.genre)}
              >
                {item.genre}
              </Navbar.Text>
            </Navbar.Link>
          ))}
        </Navbar.Wrapper>
      </Navbar>
      <Navbar isCollection>
        <Navbar.Wrapper>
          {collectionType?.map((item, index) => (
            <Navbar.Link
              key={item.title}
              to={`/${mediaType}/${item.title}`}
              activeClassName='active'
            >
              <Navbar.IconWrap
                color={item.color}
                isProvider={item.provider}
                onClick={() => handleChangeGenre(item.title)}
              >
                <Navbar.Text isCollection isMobileMenu={isMobileMenu}>
                  {item.title}
                </Navbar.Text>
                {item.icon}
              </Navbar.IconWrap>
            </Navbar.Link>
          ))}
        </Navbar.Wrapper>
      </Navbar>
    </>
  );
};

export default NavbarContainer;
