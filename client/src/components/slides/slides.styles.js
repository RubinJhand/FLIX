import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;

  max-height: 50vh;
  width: 100%;

  margin: 0 auto;
  overflow: hidden;
`;

export const Inner = styled.div`
  position: absolute;
  bottom: -3.5em;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  max-width: 50%;

  display: flex;
  align-items: center;

  background: -moz-linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 47%
  );
  background: -webkit-linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 47%
  );
  background: -o-linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 47%
  );
  background: -ms-linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 47%
  );
  background: linear-gradient(
    -90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 47%
  );
`;

export const ImageWrapper = styled.div``;

export const TextWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 70%;
  margin-left: 5.5em;

  > h1 {
    all: initial;
    text-align: left;
    width: 100%;
    font-size: 2em;
    font-weight: 700;
    line-height: 1.3;
    color: white !important;
  }

  > span {
    all: initial;
    color: var(--white);
    text-align: left;
    font-size: 1.0625em;
    padding-top: 1em;
    line-height: 1.2;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
    max-width: 100%;

    > h1 {
      font-size: 1.5em;
    }

    > span {
      padding-top: 0.5em;
    }
  }
`;

export const Image = styled.img`
  height: auto;
  width: 100%;

  object-fit: contain;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  color: white;
  z-index: 10;
  cursor: pointer;
  height: 100%;

  border: none;
  opacity: 0.5;

  > svg {
    font-size: 5em;
  }

  ${({ isBack }) =>
    isBack &&
    css`
      left: 0;

      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.4) 0,
        rgba(17, 17, 17, 0)
      );
      > svg {
        padding-left: 0.25em;
      }
    `};

  ${({ isForward }) =>
    isForward &&
    css`
      right: 0;
      background: linear-gradient(90deg, transparent 0, rgba(17, 17, 17, 0.6));

      > svg {
        padding-right: 0.25em;
      }
    `};

  &:hover {
    transition: opacity 400ms linear;
    opacity: 1;
  }
`;
