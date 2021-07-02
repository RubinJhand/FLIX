import React, { createContext, useMemo } from 'react';

// Hooks
import useAxiosFetch from '../hooks/useAxiosFetch';

export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const [results, setUrl] = useAxiosFetch('category/popular');

  const apiDataValue = useMemo(() => [results, setUrl], [results, setUrl]);

  return (
    <ApiDataContext.Provider value={apiDataValue}>
      {children}
    </ApiDataContext.Provider>
  );
};
