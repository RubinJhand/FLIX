import React, { createContext, useContext, useMemo } from 'react';

// Hooks
import useAxiosFetch from '../hooks/useAxiosFetch';

export const ApiDataContext = createContext();

export const useApiData = () => useContext(ApiDataContext);

export const ApiDataProvider = ({ children }) => {
  const [results, setUrl] = useAxiosFetch('category/popular');

  const apiDataValue = useMemo(() => [results, setUrl], [results, setUrl]);

  return (
    <ApiDataContext.Provider value={apiDataValue}>
      {children}
    </ApiDataContext.Provider>
  );
};
