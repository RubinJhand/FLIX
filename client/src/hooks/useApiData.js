import { useContext } from 'react';
import { ApiDataContext } from '../contexts/apiDataContext';

export const useApiData = () => useContext(ApiDataContext);

export default useApiData;
