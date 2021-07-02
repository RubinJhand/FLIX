import styled from 'styled-components';
import YouTube from 'react-youtube';

export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 0.625em;

  transition: transform 400ms ease-in-out 300ms;

  &:hover,
  &:focus {
    z-index: 200;
    transform: scale(1.05);
  }
`;

export const Border = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  overflow: hidden;

  border-radius: 0.625em;
  border: 0.25em solid rgba(249, 249, 249, 0.1);
  -webkit-box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.69),
    0px 16px 10px -10px rgba(0, 0, 0, 0.73);
  box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.69),
    0px 16px 10px -10px rgba(0, 0, 0, 0.73);

  transition: border 400ms ease-in-out 400ms, box-shadow 400ms ease-in-out;

  &:hover,
  &:focus {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    border: 0.25em solid var(--primary);
    -webkit-box-shadow: 0px 40px 58px -16px rgba(0, 0, 0, 0.8),
      0px 30px 22px -10px rgba(0, 0, 0, 0.72);
    box-shadow: 0px 40px 58px -16px rgba(0, 0, 0, 0.8),
      0px 30px 22px -10px rgba(0, 0, 0, 0.72);
  }

  &:hover,
  &:focus {
    > div > div > iframe {
      position: relative;

      transition: opacity 400ms ease-in-out;
      visibility: visible;
      opacity: 1;
    }

    > img {
      position: absolute;
      visibility: hidden;
      opacity: 0;
    }

    > div {
      position: relative;

      transition: opacity 400ms ease-in-out;
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  position: relative;
  object-fit: contain;
  width: 100%;
  border-radius: 6px;
`;

export const Trailer = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;

  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  visibility: hidden;
  opacity: 0;
`;

export const TrailerWrapper = styled.div`
  position: relative;

  width: 300%;
  left: -100%;
`;

export const Overview = styled.p`
  font-size: 0.9em;
  overflow: hidden;

  padding: 1.25em 0;
  max-height: 5em;
`;

export const Title = styled.h1`
  font-size: 1.25em;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 15em;
`;

export const Text = styled.span`
  font-size: 0.85em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: rgba(255, 255, 255, 0.75);
`;

export const Categories = styled.span`
  font-size: 0.75em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 24.375em;
  color: rgba(255, 255, 255, 0.75);
`;

export const LogoWrapper = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 3em;
  padding: 0.5em;
  border-radius: 0.25em;
`;

export const LogoImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  padding: 1.5em;
  margin-top: -3.4375em;
  border-radius: 0 0 0.4em 0.4em;

  color: var(--white);
  background: linear-gradient(
    rgba(34, 38, 54, 0),
    var(--background-secondary) 3em
  );
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Seperator = styled.div`
  padding-top: 1em;
`;
