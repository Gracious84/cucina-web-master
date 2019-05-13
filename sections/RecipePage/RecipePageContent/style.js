import styled from 'styled-components';

import { mediaQueries } from '../../../utils/ui/mediaQueries';

const { xLarge, medium } = mediaQueries;

export const StyledContent = styled.div`
  .recipeNavHead {
    background-color: #ffffff;
    padding: 0 24px;
    border-bottom: 1px solid #d8d8d8;
    position: sticky;
    top: 72px;

    @media ${medium} {
      padding: 0 80px;
    }

    @media ${xLarge} {
      padding: 0 128px;
    }
  }

  .recipePageMainContent {
    padding: 40px 24px;

    @media ${medium} {
      padding: 40px 80px;
    }

    @media ${xLarge} {
      padding: 40px 128px;
    }
  }

  .recipeIngredients {
    margin-bottom: 50px;
    margin-top: 32px;

    @media ${medium} {
      margin-top: 50px;
    }
  }

  .recipeHowToCook {
    margin-bottom: 32px;

    @media ${medium} {
      margin-bottom: 50px;
    }
  }
`;
