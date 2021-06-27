import React, { createContext, useContext, useMemo } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

export const ApiDataContext = createContext();

export const useApiData = () => useContext(ApiDataContext);

export const ApiDataProvider = ({ children }) => {
  const [results, setUrl] = useAxiosFetch('popular');
  const { data } = results;

  const apiDataValue = useMemo(() => [data, setUrl], [data, setUrl]);

  return (
    <ApiDataContext.Provider value={apiDataValue}>
      {children}
    </ApiDataContext.Provider>
  );
};
