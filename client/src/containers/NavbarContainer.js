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
  const [data, setUrl] = useApiData();

  const genreType = mediaType === 'tv' ? genreTvMenuItems : genreMovieMenuItems;
  const collectionType =
    mediaType === 'tv' ? providerMenuItems : collectionMenuItems;

  const handleChangeGenre = (genre) => {
    setUrl(`${mediaType}/${genre}`);
  };

  console.log('navbar rendered', data);

  return (
    <>
      <Navbar isGenre>
        <Navbar.Wrapper isGenre>
          {genreType?.map((item, index) => (
            <Navbar.Text
              key={item.genre + index}
              isGenre
              onClick={() => handleChangeGenre(item.genre)}
            >
              {item.genre}
            </Navbar.Text>
          ))}
        </Navbar.Wrapper>
      </Navbar>
      <Navbar isCollection>
        <Navbar.Wrapper>
          {collectionType?.map((item, index) => (
            <Navbar.IconWrap
              key={item.title + index}
              color={item.color}
              isProvider={item.provider}
              onClick={() => handleChangeGenre(item.title)}
            >
              <Navbar.Text isCollection isMobileMenu={isMobileMenu}>
                {item.title}
              </Navbar.Text>
              {item.icon}
            </Navbar.IconWrap>
          ))}
        </Navbar.Wrapper>
      </Navbar>
    </>
  );
};

export default NavbarContainer;
