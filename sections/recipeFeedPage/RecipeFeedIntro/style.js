import styled from 'styled-components';

import { mediaQueries } from '../../../utils/ui/mediaQueries';

const { large } = mediaQueries;

function pickTile() {
  let size;
  let tile;
  const number = Math.floor(Math.random() * 20);
  switch (number) {
    default:
      tile = '/static/images/tiles/pattern.svg';
      size = 'auto';
      break;
    case 1:
      tile = '/static/images/tiles/tile_1.svg';
      size = '160px';
      break;
    case 2:
      tile = '/static/images/tiles/tile_2.svg';
      size = '160px';
      break;
    case 3:
      tile = '/static/images/tiles/tile_3.svg';
      size = '160px';
      break;
    case 4:
      tile = '/static/images/tiles/tile_4.svg';
      size = '160px';
      break;
    case 5:
      tile = '/static/images/tiles/tile_5.svg';
      size = '250px';
      break;
    case 6:
      tile = '/static/images/tiles/tile_6.svg';
      size = '300px';
      break;
    case 7:
      tile = '/static/images/tiles/tile_7.svg';
      size = '160px';
      break;
    case 8:
      tile = '/static/images/tiles/tile_8.svg';
      size = '160px';
      break;
    case 9:
      tile = '/static/images/tiles/tile_9.svg';
      size = '160px';
      break;
    case 10:
      tile = '/static/images/tiles/tile_10.svg';
      size = '160px';
      break;
    case 11:
      tile = '/static/images/tiles/tile_11.svg';
      size = '160px';
      break;
    case 12:
      tile = '/static/images/tiles/tile_12.svg';
      size = '160px';
      break;
  }
  return `background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.6)
  ),url('${tile}');
  background-size: ${size};`;
}

export const StyledIntro = styled.div`
  .desktopVersion {
    ${() => pickTile()}
    background-repeat: repeat;
    display: none;
    padding: 50px 40px 32px;

    @media ${large} {
      display: block;
    }

    .recipeFeedIntroRow {
      align-items: center;
      display: flex;
      justify-content: center;

      .recipeFeedIntrothumbnail {
        box-shadow: -4px 4px 0 0 rgba(0, 0, 0, 0.1);
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: 32px;
        width: 400px;
      }

      .recipeFeedIntroCard {
        max-width: 500px;
      }
    }
  }

  .mobileVersion {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 20px 0;

    @media ${large} {
      display: none;
    }

    .recipeFeedIntroTitle {
      color: #57534e;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.33;
      margin-bottom: 67px;
      text-align: center;
    }

    .recipeFeedIntroCardWrapper {
      ${() => pickTile()}
      align-items: flex-start;
      display: flex;
      height: 270px;
      justify-content: center;
      margin-bottom: 100px;
      overflow: visible;
      width: 100%;

      .recipeFeedIntroCard {
        transform: translateY(-27px);
        width: 327px;
      }
    }
  }
`;
