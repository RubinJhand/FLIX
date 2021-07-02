import { useState, useEffect } from 'react';

// Hooks and Contexts
import useMediaType from './useMediaType';
import useAxiosFetch from './useAxiosFetch';

const useTimedSlides = (seconds, initiateTimer = false) => {
  const { mediaType } = useMediaType();
  const [data] = useAxiosFetch('category/popular');
  const [slides, setSlides] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  let tvImageUrlsArray = [];
  let movieImageUrlsArray = [];
  const convertedToMilliseconds = seconds * 1000;

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
    if (initiateTimer) {
      const sliderTimer = setTimeout(() => {
        if (mediaArrayIndexLength === imgIndex) {
          setImgIndex(0);
        }
        setImgIndex((imgIndex) => imgIndex + 1);
      }, convertedToMilliseconds);

      return () => clearTimeout(sliderTimer);
    }
  }, [imgIndex, mediaArrayIndexLength, initiateTimer, convertedToMilliseconds]);

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

export default useTimedSlides;
