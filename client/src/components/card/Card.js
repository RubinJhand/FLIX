import React from 'react';
import {
  Box,
  Border,
  Image,
  Trailer,
  TrailerWrapper,
  Title,
  Overview,
  Text,
  LogoWrapper,
  InfoWrapper,
  LogoImage,
  Section,
  Categories,
  Seperator
} from './card.styles';

const Card = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>;
};
Card.Border = ({ children, ...restProps }) => {
  return <Border {...restProps}>{children}</Border>;
};

Card.Image = ({ src, alt, ...restProps }) => {
  return <Image src={src} alt={alt} {...restProps} />;
};

Card.Trailer = ({ src, alt, ...restProps }) => {
  return <Trailer src={src} alt={alt} {...restProps} />;
};

Card.TrailerWrapper = ({ children, ...restProps }) => {
  return <TrailerWrapper {...restProps}>{children}</TrailerWrapper>;
};

Card.LogoImage = ({ src, alt, ...restProps }) => {
  return <LogoImage src={src} alt={alt} {...restProps} />;
};

Card.Overview = ({ children, ...restProps }) => {
  return <Overview {...restProps}>{children}</Overview>;
};

Card.Categories = ({ children, ...restProps }) => {
  return <Categories {...restProps}>{children}</Categories>;
};

Card.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Card.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Card.InfoWrapper = ({ children, ...restProps }) => {
  return <InfoWrapper {...restProps}>{children}</InfoWrapper>;
};

Card.LogoWrapper = ({ children, ...restProps }) => {
  return <LogoWrapper {...restProps}>{children}</LogoWrapper>;
};

Card.Section = ({ children, ...restProps }) => {
  return <Section {...restProps}>{children}</Section>;
};

Card.Seperator = ({ children, ...restProps }) => {
  return <Seperator {...restProps}>{children}</Seperator>;
};

export default Card;
