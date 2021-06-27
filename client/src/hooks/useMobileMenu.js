import { useState, useEffect, useCallback } from 'react';

const useMobileMenu = (mediaWidth) => {
  const [isMobileMenu, setIsMobileMenu] = useState(
    window.matchMedia(mediaWidth).matches
  );

  const handleResize = useCallback(() => {
    setIsMobileMenu(window.matchMedia(mediaWidth).matches);
  }, [mediaWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [mediaWidth, handleResize]);

  return [isMobileMenu];
};

export default useMobileMenu;
