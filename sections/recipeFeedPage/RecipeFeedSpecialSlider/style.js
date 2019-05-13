import styled from 'styled-components';

import { mediaQueries } from '../../../utils/ui/mediaQueries';

const { medium, large, xLarge } = mediaQueries;

export const StyledSection = styled.div`
  background-color: #faf8f2;
  padding: 24px 0;

  .specialSliderInner {
    padding: 35px 0;
    position: relative;

    &::after,
    &::before {
      bottom: -35px;
      content: '';
      display: none;
      position: absolute;
      top: -35px;
      width: 120px;
      z-index: 2;

      @media ${medium} {
        display: block;
        width: 80px;
      }

      @media ${large} {
        width: 100px;
      }

      @media ${xLarge} {
        width: 120px;
      }
    }

    &::after {
      background-image: linear-gradient(
        to left,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      right: 0;
    }

    &::before {
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0)
      );
      left: 0;
    }

    .specialSliderTitle {
      color: #57534e;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.33;
      margin-bottom: 15px;
      text-align: center;
    }

    .specialSliderDescription {
      color: #57534e;
      font-size: 16px;
      line-height: 1.5;
      margin: 0 auto 25px;
      max-width: 250px;
      text-align: center;

      @media ${medium} {
        max-width: 500px;
      }
    }

    .specialCarousel {
      .slick-slide {
        padding: 8px 15px;
      }
    }
  }
`;

export const PrevArrow = styled.div`
  background-color: #ffffff;
  border: solid 1px #ccc6c0;
  border-radius: 50%;
  box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
  height: 50px;
  left: 72px;
  width: 50px;
  z-index: 3;

  i {
    display: block;
    line-height: 50px;
    text-align: center;
  }

  &::before {
    content: '';
  }

  &:hover {
    background-color: #ffffff;
  }
`;

export const NexttArrow = styled.div`
  background-color: #ffffff;
  border: solid 1px #ccc6c0;
  border-radius: 50%;
  box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
  height: 50px;
  right: 72px;
  width: 50px;
  z-index: 3;

  i {
    display: block;
    line-height: 50px;
    text-align: center;
  }

  &::before {
    content: '';
  }

  &:hover {
    background-color: #ffffff;
  }
`;
