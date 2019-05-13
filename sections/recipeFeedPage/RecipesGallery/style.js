import styled from 'styled-components';

import { mediaQueries } from '../../../utils/ui/mediaQueries';

const { small, medium, large } = mediaQueries;

export const StyledGallery = styled.div`
  padding: 30px 0;

  .recipesGalleryBorder {
    text-align: center;

    img {
      max-width: 100%;
      width: 327px;

      @media ${medium} {
        width: 500px;
      }
    }
  }

  .recipesGalleryTitle {
    color: #57534e;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.33;
    margin-bottom: 35px;
    text-align: center;
  }

  .recipesGallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 24px;

    @media ${small} {
      padding: 0 100px;
    }

    .recipesGalleryCard {
      margin-bottom: 30px;
      max-width: 500px;
      width: 100%;

      @media ${medium} {
        padding: 0 15px;
      }
    }

    .recipesGalleryCard--2 {
      @media ${medium} {
        width: 50%;
      }
    }

    .recipesGalleryCard--3 {
      @media ${medium} {
        width: 33.33333%;
      }
    }

    .recipesGalleryCard--4 {
      @media ${medium} {
        width: 33.33333%;
      }

      @media ${large} {
        width: 25%;
      }
    }
  }
`;
