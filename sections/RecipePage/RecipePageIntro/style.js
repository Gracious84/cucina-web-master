import styled from 'styled-components';

import { mediaQueries } from '../../../utils/ui/mediaQueries';

const { medium } = mediaQueries;

export const Intro = styled.div`
  height: 380px;

  @media ${medium} {
    height: 570px;
  }

  .introInner {
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
      ),
      url('/static/images/tiles/tile_7.svg');
    background-repeat: repeat;
    padding: 32px 0;
    display: flex;
    height: 320px;
    justify-content: center;
    overflow: visible;
    position: relative;
    width: 100%;

    @media ${medium} {
      height: 480px;
    }

    .videoThumbnail {
      max-width: 100%;
      width: 327px;

      & > div {
        box-shadow: -4px 4px 5px 0 rgba(0, 0, 0, 0.5);
      }

      @media ${medium} {
        width: 496px;
      }
    }
  }
`;
