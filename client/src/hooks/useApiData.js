import { useContext } from 'react';
import { ApiDataContext } from '../contexts/apiDataContext';

const useApiData = () => useContext(ApiDataContext);

export default useApiData;
