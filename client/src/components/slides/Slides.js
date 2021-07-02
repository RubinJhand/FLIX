import React from 'react';

import {
  Container,
  Inner,
  ImageWrapper,
  Image,
  Button,
  TextWrapper
} from './slides.styles';

const Slides = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Slides.Inner = ({ children, ...restProps }) => {
  return <Inner {...restProps}>{children}</Inner>;
};

Slides.ImageWrapper = ({ children, ...restProps }) => {
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
};

Slides.TextWrapper = ({ children, ...restProps }) => {
  return <TextWrapper {...restProps}>{children}</TextWrapper>;
};

Slides.Image = ({ src, alt, ...restProps }) => {
  return <Image src={src} alt={alt} {...restProps} />;
};

Slides.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

export default Slides;
