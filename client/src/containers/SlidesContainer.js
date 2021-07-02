import React from 'react';

// Hooks and Contexts
import useTimedSlides from '../hooks/useTimedSlides';

// Components
import Slides from '../components/slides/Slides';
import Card from '../components/card/Card';

// Styles
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const SlidesContainer = () => {
  const { mediaArray, handleNext, handlePrevious, imgIndex } = useTimedSlides();
  const overview = mediaArray[imgIndex]?.overview.split('. ');

  return (
    <Slides>
      <Slides.Inner>
        <Slides.TextWrapper>
          <Card.Title>{mediaArray[imgIndex]?.title}</Card.Title>
          <Card.Text>{overview && overview[0]}</Card.Text>
        </Slides.TextWrapper>
      </Slides.Inner>
      <Slides.ImageWrapper>
        <Slides.Image src={mediaArray[imgIndex]?.url} alt={'Not available'} />
      </Slides.ImageWrapper>

      <Slides.Button onClick={handlePrevious} isBack>
        <ArrowBackIosIcon />
      </Slides.Button>

      <Slides.Button onClick={handleNext} isForward>
        <ArrowForwardIosIcon />
      </Slides.Button>
    </Slides>
  );
};

export default SlidesContainer;
