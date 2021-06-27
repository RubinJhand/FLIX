import React, { createContext, useContext, useState, useMemo } from 'react';

export const MediaTypeContext = createContext();

export const MediaTypeProvider = ({ children }) => {
  const [mediaType, setMediaType] = useState('tv');

  const mediaTypeValue = useMemo(
    () => ({ mediaType, setMediaType }),
    [mediaType, setMediaType]
  );

  return (
    <MediaTypeContext.Provider value={mediaTypeValue}>
      {children}
    </MediaTypeContext.Provider>
  );
};
