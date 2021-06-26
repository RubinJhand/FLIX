import { useState, useEffect } from 'react';

const useMobileMenu = (mediaWidth) => {
  const [isMobileMenu, setIsMobileMenu] = useState(
    window.matchMedia(mediaWidth).matches
  );

  const handleResize = () => {
    setIsMobileMenu(window.matchMedia(mediaWidth).matches);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [mediaWidth]);

  return [isMobileMenu];
};

export default useMobileMenu;
