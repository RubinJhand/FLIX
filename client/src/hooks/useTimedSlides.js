import { useState, useEffect } from 'react';

// Hooks and Contexts
import useMediaType from './useMediaType';
import useAxiosFetch from './useAxiosFetch';

const useMediaTimer = () => {
  const { mediaType } = useMediaType();
  const [data] = useAxiosFetch('popular');
  const [slides, setSlides] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  let tvImageUrlsArray = [];
  let movieImageUrlsArray = [];

  useEffect(() => {
    data && setSlides(data.data);
  }, [data]);

  slides?.map((item) => {
    if (item.backdrop_url && item.tv)
      return tvImageUrlsArray.push({
        title: item.title,
        overview: item.overview,
        url: item.backdrop_url
      });
    if (item.backdrop_url && item.movie)
      return movieImageUrlsArray.push({
        title: item.title,
        overview: item.overview,
        url: item.backdrop_url
      });
    return null;
  });

  const mediaArray =
    mediaType === 'tv' ? tvImageUrlsArray : movieImageUrlsArray;
  const mediaArrayIndexLength = mediaArray.length - 1;

  useEffect(() => {
    const sliderTimer = setTimeout(() => {
      if (mediaArrayIndexLength === imgIndex) {
        setImgIndex(0);
      }
      setImgIndex((imgIndex) => imgIndex + 1);
    }, 10000);

    return () => clearTimeout(sliderTimer);
  }, [imgIndex, mediaArrayIndexLength]);

  const handlePrevious = () => {
    if (imgIndex !== 0) {
      setImgIndex((imgIndex) => imgIndex - 1);
      return;
    }
    setImgIndex(mediaArrayIndexLength);
  };

  const handleNext = () => {
    if (imgIndex < mediaArrayIndexLength) {
      setImgIndex((imgIndex) => imgIndex + 1);
      return;
    }
    setImgIndex(0);
  };

  return {
    handleNext,
    handlePrevious,
    mediaArray,
    imgIndex
  };
};

export default useMediaTimer;
