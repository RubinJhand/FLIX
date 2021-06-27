import { useContext } from 'react';
import { MediaTypeContext } from '../contexts/mediaTypeContext';

const useMediaType = () => useContext(MediaTypeContext);

export default useMediaType;
